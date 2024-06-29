import React, { useState } from 'react';

const RemocaoLivro: React.FC = () => {
  const [livroId, setLivroId] = useState('');

  const handleRemocaoLivro = async () => {
    try {
      const response = await fetch(`http://localhost:5292/livro/deletar/${livroId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        console.log('Livro removido com sucesso!');
        // Aqui você pode redirecionar o usuário para outra página ou atualizar o estado da aplicação
      } else {
        console.error('Erro ao remover livro:', await response.text());
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
    }
  };

  return (
    <div>
      <h2>Remoção de Livro</h2>
      <form onSubmit={handleRemocaoLivro}>
        <label>
          ID do Livro:
          <input type="text" value={livroId} onChange={(e) => setLivroId(e.target.value)} />
        </label>
        <br />
        <button type="submit">Remover Livro</button>
      </form>
    </div>
  );
};

export default RemocaoLivro;
