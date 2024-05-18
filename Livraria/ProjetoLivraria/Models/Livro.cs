namespace ProjetoLivraria.Models;

public class Livro
{

    public int Id { get; set; }

    public string? Titulo { get; set; }

    public string? Autor { get; set; }

    public string? Editora { get; set; }

    public bool Emprestimo { get; set; }

    public Livro(){
        Emprestimo = false;
    }

        public Livro(string titulo, string autor, string editora)
    {
        Titulo = titulo;
        Autor = autor;
        Editora = editora;
        Emprestimo = false;
    }


    public void EmprestarLivro()
    {
        if (!Emprestimo)
        {
            Emprestimo = true;
            Console.WriteLine($"Livro '{Titulo}' emprestado.");
        }
        else
        {
            Console.WriteLine($"O livro '{Titulo}' já está emprestado.");
        }
    }

    public void DevolverLivro()
    {
        if (Emprestimo)
        {
            Emprestimo = false;
            Console.WriteLine($"Livro '{Titulo}' devolvido.");
        }
        else
        {
            Console.WriteLine($"O livro '{Titulo}' não está emprestado.");
        }
    }
}