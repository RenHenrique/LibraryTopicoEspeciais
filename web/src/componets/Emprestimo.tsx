import React, { useState } from 'react';

const NovoEmprestimo: React.FC = () => {
  const [usuarioId, setUsuarioId] = useState('');
  const [livroId, setLivroId] = useState('');

  const handleCadastroEmprestimo = async () => {
    try {
      const response = await fetch('http://localhost:5292/emprestimo/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          usuarioId: parseInt(usuarioId),
          livroId: parseInt(livroId)
        })
      });

      if (response.ok) {
        console.log('Empréstimo registrado com sucesso!');
        // Aqui você pode redirecionar o usuário para outra página ou atualizar o estado da aplicação
      } else {
        console.error('Erro ao registrar empréstimo:', await response.text());
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
    }
  };

  return (
    <div>
      <h2>Registrar Novo Empréstimo</h2>
      <form onSubmit={handleCadastroEmprestimo}>
        <label>
          ID do Usuário:
          <input type="text" value={usuarioId} onChange={(e) => setUsuarioId(e.target.value)} />
        </label>
        <br />
        <label>
          ID do Livro:
          <input type="text" value={livroId} onChange={(e) => setLivroId(e.target.value)} />
        </label>
        <br />
        <button type="submit">Registrar Empréstimo</button>
      </form>
    </div>
  );
};

export default NovoEmprestimo;
