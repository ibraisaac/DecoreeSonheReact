import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import Clientes from './views/Clientes';
import Produtos from './views/Produtos';
import Pagina404 from './views/Pagina404';
import ClienteMostrar from './views/ClienteMostrar';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProdutoMostrar from './views/ProdutoMostrar';
import TipoProdutos from './views/TipoProdutos';
import TipoProdutoMostrar from './views/TipoProdutoMostrar';
import PedidoMostrar from './views/PedidoMostrar';
import Pedidos from './views/Pedidos';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/clientes" component={Clientes} />
        <Route path="/clientes/novo" component={ClienteMostrar} />
        <Route path="/cliente/:identificador" component={ClienteMostrar} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/produto/novo" component={ProdutoMostrar} />
        <Route path="/produto/:identificador" component={ProdutoMostrar} />
        <Route path="/tipoProdutos" component={TipoProdutos} />
        <Route path="/tipoProdutos/novo" component={TipoProdutoMostrar} />
        <Route path="/tipoProdutos/:identificador" component={TipoProdutoMostrar} />
        <Route path="/pedidos" component={Pedidos} />
        <Route path="/pedido/novo" component={PedidoMostrar} />
        <Route path="/pedido/:identificador" component={PedidoMostrar} />
        <Route path="*" component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
