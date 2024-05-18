namespace ProjetoLivraria.Models;

public class Devolucao
{
    public int Id { get; set; }
    public Emprestimo? Emprestimo { get; set; }
    public int EmprestimoId { get; set; }

}