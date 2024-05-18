namespace ProjetoLivraria.Models;

public class Emprestimo
{
    public int Id { get; set; }
    public DateTime DataEmprestimo { get; set; }
    public DateTime DataDevolucao { get; set; }
    public Livro? Livro { get; set; }
    public int LivroId { get; set; }
    public Usuario? Usuario { get; set; }
    public int UsuarioId { get; set; }

    public Emprestimo()
    {
        DataEmprestimo = DateTime.Now;
        DataDevolucao = DataEmprestimo.AddDays(5);
    }

}