import React, { useState } from 'react';

const AlteracaoLivro: React.FC = () => {
  const [livroId, setLivroId] = useState('');
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [editora, setEditora] = useState('');

  const handleAlteracaoLivro = async () => {
    try {
      const response = await fetch(`http://localhost:5292/livro/alterar/${livroId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          titulo,
          autor,
          editora
        })
      });

      if (response.ok) {
        console.log('Livro alterado com sucesso!');
        // Aqui você pode redirecionar o usuário para outra página ou atualizar o estado da aplicação
      } else {
        console.error('Erro ao alterar livro:', await response.text());
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
    }
  };

  return (
    <div>
      <h2>Alteração de Livro</h2>
      <form onSubmit={handleAlteracaoLivro}>
        <label>
          ID do Livro:
          <input type="text" value={livroId} onChange={(e) => setLivroId(e.target.value)} />
        </label>
        <br />
        <label>
          Novo Título:
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </label>
        <br />
        <label>
          Novo Autor:
          <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)} />
        </label>
        <br />
        <label>
          Nova Editora:
          <input type="text" value={editora} onChange={(e) => setEditora(e.target.value)} />
        </label>
        <br />
        <button type="submit">Alterar Livro</button>
      </form>
    </div>
  );
};

export default AlteracaoLivro;
