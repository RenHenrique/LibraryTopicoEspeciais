import React, { useState } from 'react';

const BuscaLivro: React.FC = () => {
  const [livroId, setLivroId] = useState('');
  const [livro, setLivro] = useState<any>(null);
  const [mensagemErro, setMensagemErro] = useState('');

  const handleBuscarLivro = async () => {
    try {
      const response = await fetch(`http://localhost:5292/livro/buscar/${livroId}`);

      if (response.ok) {
        const data = await response.json();
        setLivro(data);
        setMensagemErro('');
      } else {
        const errorText = await response.text();
        setLivro(null);
        setMensagemErro(`Livro não encontrado: ${errorText}`);
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
      setLivro(null);
      setMensagemErro('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div>
      <h2>Buscar Livro por ID</h2>
      <form onSubmit={handleBuscarLivro}>
        <label>
          ID do Livro:
          <input type="text" value={livroId} onChange={(e) => setLivroId(e.target.value)} />
        </label>
        <br />
        <button type="submit">Buscar Livro</button>
      </form>
      {livro && (
        <div>
          <h3>Informações do Livro:</h3>
          <p>Título: {livro.titulo}</p>
          <p>Autor: {livro.autor}</p>
          <p>Editora: {livro.editora}</p>
        </div>
      )}
      {mensagemErro && <p>{mensagemErro}</p>}
    </div>
  );
};

export default BuscaLivro;
