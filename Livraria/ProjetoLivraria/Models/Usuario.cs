namespace ProjetoLivraria.Models;

public class Usuario{

public Usuario()
    {
    }

    public Usuario(string nome, string email, string senha)
    {
        Nome = nome;
        Email = email;
        Senha = senha;
    }

    public int Id { get; set; }

    public string? Nome { get; set; }

    public string? Email { get; set; }

    public string? Senha { get; set; }

}