import React, { useEffect, useState } from 'react';

type Livro = {
  id: number;
  titulo: string;
  autor: string;
  editora: string;
  emprestimos: number;
  reservas: number;
};

const EstatisticasLivro: React.FC<{ livroId: number }> = ({ livroId }) => {
  const [livro, setLivro] = useState<Livro | null>(null);

  useEffect(() => {
    const fetchEstatisticasLivro = async () => {
      try {
        const response = await fetch(`http://localhost:5292/livro/estatisticas/${livroId}`);

        if (response.ok) {
          const data = await response.json();
          setLivro(data);
        } else {
          console.error('Erro ao buscar estatísticas do livro:', await response.text());
        }
      } catch (error) {
        console.error('Erro ao conectar com o servidor:', error);
      }
    };

    fetchEstatisticasLivro();
  }, [livroId]);

  if (!livro) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h2>Estatísticas do Livro</h2>
      <p>Título: {livro.titulo}</p>
      <p>Autor: {livro.autor}</p>
      <p>Editora: {livro.editora}</p>
      <p>Número de Empréstimos: {livro.emprestimos}</p>
      <p>Número de Reservas: {livro.reservas}</p>
    </div>
  );
};

export default EstatisticasLivro;
