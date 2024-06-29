import React from 'react';
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
          <Route path="/livro/buscar">
            <BuscaLivro />
          </Route>
          <Route path="/livro/cadastrar">
            <NovoLivro />
          </Route>
          <Route path="/emprestimo/cadastrar">
            <NovoEmprestimo />
          </Route>
          <Route path="/emprestimo/devolver">
            <DevolucaoLivro />
          </Route>
          <Route path="/livro/deletar">
            <RemocaoLivro />
          </Route>
          <Route path="/livro/alterar">
            <AlteracaoLivro />
          </Route>
          <Route path="/livro/reservar">
            <ReservarLivro />
          </Route>
          <Route path="/livro/estatisticas">
            <EstatisticasLivro livroId={2} /> {/* Exemplo de passagem de prop livroId */}
          </Route>
          <Route path="/relatorio/estatisticas">
            <RelatorioEstatisticas />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
