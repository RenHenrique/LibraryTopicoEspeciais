import React, { useState } from 'react';

const ReservarLivro: React.FC = () => {
  const [livroId, setLivroId] = useState('');
  const [usuarioId, setUsuarioId] = useState('');

  const handleReservarLivro = async () => {
    try {
      const response = await fetch(`http://localhost:5292/livro/reservar/${livroId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          usuarioId: parseInt(usuarioId)
        })
      });

      if (response.ok) {
        console.log('Livro reservado com sucesso!');
        // Aqui você pode redirecionar o usuário para outra página ou atualizar o estado da aplicação
      } else {
        console.error('Erro ao reservar livro:', await response.text());
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
    }
  };

  return (
    <div>
      <h2>Reservar Livro</h2>
      <form onSubmit={handleReservarLivro}>
        <label>
          ID do Livro:
          <input type="text" value={livroId} onChange={(e) => setLivroId(e.target.value)} />
        </label>
        <br />
        <label>
          ID do Usuário:
          <input type="text" value={usuarioId} onChange={(e) => setUsuarioId(e.target.value)} />
        </label>
        <br />
        <button type="submit">Reservar Livro</button>
      </form>
    </div>
  );
};

export default ReservarLivro;
