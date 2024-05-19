using System;

namespace ProjetoLivraria.Models
{
    public class Livro
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Autor { get; set; }
        public string Editora { get; set; }
        public bool Emprestimo { get; private set; }
        public bool Reservado { get; private set; }

        public Livro()
        {
            Emprestimo = false;
            Reservado = false;
        }

        public Livro(string titulo, string autor, string editora) : this()
        {
            Titulo = titulo;
            Autor = autor;
            Editora = editora;
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

        public void ReservarLivro()
        {
            if (!Reservado)
            {
                Reservado = true;
                Console.WriteLine($"Livro '{Titulo}' reservado.");
            }
            else
            {
                Console.WriteLine($"O livro '{Titulo}' já está reservado.");
            }
        }

        public void CancelarReservaLivro()
        {
            if (Reservado)
            {
                Reservado = false;
                Console.WriteLine($"Reserva do livro '{Titulo}' cancelada.");
            }
            else
            {
                Console.WriteLine($"O livro '{Titulo}' não está reservado.");
            }
        }
    }
}

