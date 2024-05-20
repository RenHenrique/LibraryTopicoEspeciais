namespace ProjetoLivraria.Models
{
    public class EstatisticasLivro
    {
        public int LivroId { get; set; }
        public string Titulo { get; set; }
        public int QuantidadeEmprestimos { get; set; }
        public int QuantidadeReservas { get; set; }

        // Construtor que recebe os parâmetros Livro e AppDataContext
        public EstatisticasLivro(Livro livro, AppDataContext context)
        {
            LivroId = livro.Id;
            Titulo = livro.Titulo;
            QuantidadeEmprestimos = context.Emprestimos.Count(e => e.LivroId == livro.Id);
            QuantidadeReservas = context.ReservasLivros.Count(r => r.LivroId == livro.Id);
        }
    }
}
