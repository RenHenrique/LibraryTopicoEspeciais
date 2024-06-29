import React, { useState } from 'react';

const NovoLivro: React.FC = () => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [editora, setEditora] = useState('');

  const handleCadastroLivro = async () => {
    try {
      const response = await fetch('http://localhost:5292/livro/cadastrar', {
        method: 'POST',
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
        console.log('Livro cadastrado com sucesso!');
        // Aqui você pode redirecionar o usuário para outra página ou atualizar o estado da aplicação
      } else {
        console.error('Erro ao cadastrar livro:', await response.text());
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
    }
  };

  return (
    <div>
      <h2>Cadastrar Novo Livro</h2>
      <form onSubmit={handleCadastroLivro}>
        <label>
          Título:
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </label>
        <br />
        <label>
          Autor:
          <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)} />
        </label>
        <br />
        <label>
          Editora:
          <input type="text" value={editora} onChange={(e) => setEditora(e.target.value)} />
        </label>
        <br />
        <button type="submit">Cadastrar Livro</button>
      </form>
    </div>
  );
};

export default NovoLivro;
