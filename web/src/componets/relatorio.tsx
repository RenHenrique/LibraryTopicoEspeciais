import React, { useEffect, useState } from 'react';

type EstatisticasLivro = {
  id: number;
  titulo: string;
  emprestimos: number;
  reservas: number;
};

const RelatorioEstatisticas: React.FC = () => {
  const [estatisticas, setEstatisticas] = useState<EstatisticasLivro[]>([]);

  useEffect(() => {
    const fetchRelatorioEstatisticas = async () => {
      try {
        const response = await fetch(`http://localhost:5292/relatorio/estatisticas`);

        if (response.ok) {
          const data = await response.json();
          setEstatisticas(data);
        } else {
          console.error('Erro ao buscar relatório de estatísticas:', await response.text());
        }
      } catch (error) {
        console.error('Erro ao conectar com o servidor:', error);
      }
    };

    fetchRelatorioEstatisticas();
  }, []);

  return (
    <div>
      <h2>Relatório de Estatísticas de Uso e Reservas de Livros</h2>
      {estatisticas.map((livro) => (
        <div key={livro.id}>
          <h3>{livro.titulo}</h3>
          <p>Número de Empréstimos: {livro.emprestimos}</p>
          <p>Número de Reservas: {livro.reservas}</p>
        </div>
      ))}
    </div>
  );
};

export default RelatorioEstatisticas;
