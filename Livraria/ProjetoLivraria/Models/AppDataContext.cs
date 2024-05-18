using Microsoft.EntityFrameworkCore;

namespace ProjetoLivraria.Models
{
    public class AppDataContext : DbContext
    {
        public DbSet<Emprestimo> Emprestimos { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Livro> Livros { get; set; }
        public DbSet<Devolucao> Devolucoes { get; set; }
        public DbSet<ReservaLivro> ReservasLivros { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=Livraria.db");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Usuario>().ToTable("Usuarios");
            modelBuilder.Entity<Livro>().ToTable("Livros");
            modelBuilder.Entity<Emprestimo>().ToTable("Emprestimos");
            modelBuilder.Entity<Devolucao>().ToTable("Devolucoes");
            modelBuilder.Entity<ReservaLivro>().ToTable("ReservasLivros");
        }
    }
}
