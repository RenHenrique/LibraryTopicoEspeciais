import React from 'react';
import './index.css'; // Importa o arquivo CSS
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BuscaLivro from './componets/buscar';
import NovoLivro from './componets/novolivro';
import NovoEmprestimo from './componets/Emprestimo';
import DevolucaoLivro from './componets/devolucao';
import RemocaoLivro from './componets/remocao';
import AlteracaoLivro from './componets/alteracao';
import ReservarLivro from './componets/reserva';
import EstatisticasLivro from './componets/estatistica';
import RelatorioEstatisticas from './componets/relatorio';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/livro/buscar">Buscar Livro por ID</Link>
            </li>
            <li>
              <Link to="/livro/cadastrar">Cadastrar Novo Livro</Link>
            </li>
            <li>
              <Link to="/emprestimo/cadastrar">Registrar Novo Empréstimo</Link>
            </li>
            <li>
              <Link to="/emprestimo/devolver">Registrar Devolução</Link>
            </li>
            <li>
              <Link to="/livro/deletar">Remoção de Livro</Link>
            </li>
            <li>
              <Link to="/livro/alterar">Alteração de Livro</Link>
            </li>
            <li>
              <Link to="/livro/reservar">Reservar Livro</Link>
            </li>
            <li>
              <Link to="/livro/estatisticas">Estatísticas de Uso do Livro</Link>
            </li>
            <li>
              <Link to="/relatorio/estatisticas">Relatório de Estatísticas de Uso e Reservas de Livros</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/livro/buscar" element={<BuscaLivro />} />
          <Route path="/livro/cadastrar" element={<NovoLivro />} />
          <Route path="/emprestimo/cadastrar" element={<NovoEmprestimo />} />
          <Route path="/emprestimo/devolver" element={<DevolucaoLivro />} />
          <Route path="/livro/deletar" element={<RemocaoLivro />} />
          <Route path="/livro/alterar" element={<AlteracaoLivro />} />
          <Route path="/livro/reservar" element={<ReservarLivro />} />
          <Route path="/livro/estatisticas" element={<EstatisticasLivro livroId={2} />} />
          <Route path="/relatorio/estatisticas" element={<RelatorioEstatisticas />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
