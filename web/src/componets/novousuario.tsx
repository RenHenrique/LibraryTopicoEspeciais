import React, { useState } from 'react';

const NovoUsuario: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastroUsuario = async () => {
    try {
      const response = await fetch('http://localhost:5292/usuario/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome,
          email,
          senha
        })
      });

      if (response.ok) {
        console.log('Usuário cadastrado com sucesso!');
        // Aqui você pode redirecionar o usuário para outra página ou atualizar o estado da aplicação
      } else {
        console.error('Erro ao cadastrar usuário:', await response.text());
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
    }
  };

  return (
    <div>
      <h2>Cadastrar Novo Usuário</h2>
      <form onSubmit={handleCadastroUsuario}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </label>
        <br />
        <button type="submit">Cadastrar Usuário</button>
      </form>
    </div>
  );
};

export default NovoUsuario;
