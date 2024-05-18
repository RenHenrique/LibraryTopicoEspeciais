namespace ProjetoLivraria.Models
{
    public class ReservaLivro
    {
        public int LivroId { get; set; }
        public int UsuarioId { get; set; }
        public DateTime DataReserva { get; set; }
        public bool Ativa { get; set; }
    }
}
