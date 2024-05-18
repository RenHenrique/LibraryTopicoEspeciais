namespace ProjetoLivraria.Models
{
    public class RelatorioUsoLivro
    {
        public int LivroId { get; set; }
        public string Titulo { get; set; }
        public int QuantidadeEmprestimos { get; set; }
        public int QuantidadeReservas { get; set; }
    }
}
