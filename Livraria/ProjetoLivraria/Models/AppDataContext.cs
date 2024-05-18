using Microsoft.EntityFrameworkCore;

namespace ProjetoLivraria.Models;

public class AppDataContext : DbContext
{
    public DbSet<Emprestimo> Emprestimos { get; set; }
    public DbSet<Usuario> Usuarios { get; set; }
    public DbSet<Livro> Livros { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=Livraria.db");
    }
}
