import React, { useState } from 'react';

const DevolucaoLivro: React.FC = () => {
  const [emprestimoId, setEmprestimoId] = useState('');

  const handleDevolucaoLivro = async () => {
    try {
      const response = await fetch('http://localhost:5292/emprestimo/devolver', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emprestimoId: parseInt(emprestimoId)
        })
      });

      if (response.ok) {
        console.log('Devolução registrada com sucesso!');
        // Aqui você pode redirecionar o usuário para outra página ou atualizar o estado da aplicação
      } else {
        console.error('Erro ao registrar devolução:', await response.text());
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
    }
  };

  return (
    <div>
      <h2>Registrar Devolução de Livro</h2>
      <form onSubmit={handleDevolucaoLivro}>
        <label>
          ID do Empréstimo:
          <input type="text" value={emprestimoId} onChange={(e) => setEmprestimoId(e.target.value)} />
        </label>
        <br />
        <button type="submit">Registrar Devolução</button>
      </form>
    </div>
  );
};

export default DevolucaoLivro;
