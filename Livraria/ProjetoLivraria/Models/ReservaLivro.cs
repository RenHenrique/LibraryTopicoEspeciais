using System;

namespace ProjetoLivraria.Models
{
    public class ReservaLivro
    {
        public int Id { get; set; }
        public int LivroId { get; set; }
        public Livro Livro { get; set; }
        public int UsuarioId { get; set; }
        public Usuario Usuario { get; set; }
        public DateTime DataReserva { get; set; }
        public bool Ativa { get; set; }
    }
}
