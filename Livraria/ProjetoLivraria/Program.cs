using ProjetoLivraria.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDataContext>();
var app = builder.Build();

app.MapGet("/", () => "Projeto Livraria!");

app.MapPost("/usuario/cadastrar", ([FromBody] Usuario usuario,
    [FromServices] AppDataContext ctx) =>
{
    ctx.Usuarios.Add(usuario);
    ctx.SaveChanges();
    return Results.Created($"Usuario '{usuario}' foi cadastrado: ", usuario);
});

app.MapPost("/livro/cadastrar", ([FromBody] Livro livro,
    [FromServices] AppDataContext ctx) =>
{
    ctx.Livros.Add(livro);
    ctx.SaveChanges();
    return Results.Created($"Livro '{livro}' foi cadastrado: ", livro);
});

app.MapPost("/emprestimo/cadastrar", ([FromBody] Emprestimo emprestimo,
    [FromServices] AppDataContext ctx) =>
{

    Livro? livro = ctx.Livros.FirstOrDefault(l => l.Id == emprestimo.LivroId && !l.Emprestimo);

    Usuario? usuario = ctx.Usuarios.FirstOrDefault(u => u.Id == emprestimo.UsuarioId);

    if (livro != null && usuario != null && !livro.Emprestimo)
    {
        emprestimo.Usuario = usuario;
        emprestimo.Livro = livro;

        ctx.Emprestimos.Add(emprestimo);
        livro.EmprestarLivro();
        ctx.SaveChanges();
        return Results.Created($"Livro '{livro.Titulo}' emprestado para o usuario '{usuario.Nome}'.", emprestimo);
    }
    else
    {
        if (livro == null)
        {
            return Results.NotFound("Livro nao encontrado ou ja emprestado");
        }

        if (usuario == null)
        {
            return Results.NotFound("Usuario nao encontrado");
        }

        return Results.BadRequest();

    }

});

app.MapPost("/emprestimo/devolver", ([FromBody] Devolucao devolucao,
    [FromServices] AppDataContext ctx) =>
{
    Emprestimo? emprestimo = ctx.Emprestimos.FirstOrDefault(e => e.Id == devolucao.EmprestimoId);
    if (emprestimo == null)
    {
        return Results.NotFound("Empréstimo não encontrado.");
    }

    Livro? livro = ctx.Livros.FirstOrDefault(l => l.Id == emprestimo.LivroId);
    if (livro == null)
    {
        return Results.NotFound("Livro não encontrado.");
    }

    livro.DevolverLivro();
    ctx.Emprestimos.Remove(emprestimo);
    ctx.SaveChanges();

    return Results.Ok($"Livro '{livro.Titulo}' devolvido com sucesso.");
});

app.MapDelete("/livro/deletar/{id}", ([FromRoute] int id,
    [FromServices] AppDataContext ctx) =>
{
    Livro? livro = ctx.Livros.FirstOrDefault(x => x.Id == id);
    if (livro is null)
    {
        return Results.NotFound("Livro não encontrado!");
    }
    ctx.Livros.Remove(livro);
    ctx.SaveChanges();
    return Results.Ok("Livro deletado!");
});

app.MapPut("/livro/alterar/{id}", ([FromRoute] int id,
    [FromBody] Livro livroAlterado, [FromServices] AppDataContext ctx) =>
{
    Livro? livro = ctx.Livros.Find(id);
    if (livro is null)
    {
        return Results.NotFound("Livro não encontrado!");
    }
    livro.Titulo = livroAlterado.Titulo;
    livro.Autor = livroAlterado.Autor;
    livro.Editora = livroAlterado.Editora;
    ctx.Livros.Update(livro);
    ctx.SaveChanges();
    return Results.Ok("Livro alterado!");

});

app.MapGet("/livro/buscar/{id}", ([FromRoute] int id,
    [FromServices] AppDataContext ctx) =>
{
    Livro? livro = ctx.Livros.Find(id);
    if (livro is null)
    {
        return Results.NotFound("Livro não encontrado!");
    }
    return Results.Ok(livro);
});
 // Reservar Livro
app.MapPost("/livro/reservar/{id}", ([FromRoute] int id, [FromBody] ReservaLivro reservaLivro,
    [FromServices] AppDataContext ctx) =>
{
    Livro? livro = ctx.Livros.FirstOrDefault(l => l.Id == id);
    if (livro == null)
    {
        return Results.NotFound("Livro não encontrado.");
    }

    if (livro.Reservado)
    {
        return Results.BadRequest("Livro já reservado.");
    }

    livro.ReservarLivro();
    ctx.SaveChanges();

    return Results.Created($"Livro '{livro.Titulo}' reservado com sucesso.", livro);
});

// Relatório de Estatísticas de Uso de Livros
app.MapGet("/livro/estatisticas", ([FromServices] AppDataContext ctx) =>
{
    var estatisticas = ctx.Livros
        .Select(l => new EstatisticasLivro
        {
            LivroId = l.Id,
            Titulo = l.Titulo,
            QuantidadeEmprestimos = ctx.Emprestimos.Count(e => e.LivroId == l.Id),
            QuantidadeReservas = ctx.ReservasLivros.Count(r => r.LivroId == l.Id)
        })
        .ToList();

    return Results.Ok(estatisticas);
});
app.Run();

