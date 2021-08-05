import React, { Component } from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Pedidos extends Component {

    state = {
        pedidos: []
    }

    componentDidMount(){
        this.lista()
    }

    lista = () =>{
        axios.get('https://localhost:44337/api/pedidos').then(response => {
            const pedidos = response.data
            this.setState({ pedidos });
        })
    }

    excluir = (pedido) => {
        if (window.confirm("Deseja realmente excluir?")){
            axios.delete(`https://localhost:44337/api/pedidos/${pedido.Identificador}`).then(response => {
                this.lista()
            })
        }
    }

    render(){
        return (
            <div>
                <Header></Header>
                <main className="bd-masthead" id="content" role="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-5 mx-auto col-md-4 order-md-2">
                            </div>
                            <div className="col-md-8 order-md-1 text-center text-md-left pr-md-5">
                                <h1 className="mb-3">Pedidos</h1>
                                <h4 className="mb-3">Quantidade - { this.state.pedidos.length }</h4>                                
                                <Link style={{marginBottom: "25px"}} className="btn btn-primary" to={`/pedido/novo`}>Novo</Link>
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Código</th>
                                        <th>Data Pedido</th>
                                        <th>Data Entrega</th>
                                        <th>Tipo Pagamento</th>
                                        <th>Tipo Entrega</th>
                                        <th>Canal Venda</th>
                                        <th>Status</th>
                                        <th>Cliente</th>
                                        <th>Observação</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.pedidos.map((pedidos, index) => (                                        
                                            <tr key={index}>                               
                                                <td>{pedidos.Codigo}</td>
                                                <td>{pedidos.DataPedido}</td>
                                                <td>{pedidos.DataEntrega}</td>
                                                <td>{pedidos.DataPagamento}</td>
                                                <td>{pedidos.TipoEntrega}</td>
                                                <td>{pedidos.CanalVenda}</td>
                                                <td>{pedidos.Status}</td>
                                                <td>{pedidos.IdCliente}</td>
                                                <td>{pedidos.Observacao}</td>
                                                <td><Link to={`/pedido/${pedidos.Identificador}`} className="btn btn-primary">Editar</Link></td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => {this.excluir(pedidos)}}>Excluir</button>
                                                </td>
                                            </tr>        
                                        ))
                                    }              
                                    </tbody>                          
                                </table>
                                <hr/>
                                <hr/>
                                <p className="text-muted mb-0">
                                    Versão 0.0.1
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer></Footer>
            </div>
        )
    }
}

export default Pedidos;
