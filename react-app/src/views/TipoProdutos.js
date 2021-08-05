import React, { Component } from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TipotipoProdutos extends Component {

    state = {
        tipoProdutos: []
    }

    componentDidMount(){
        this.lista()
    }

    lista = () =>{
        axios.get('https://localhost:44337/api/tipoProdutos').then(response => {
            const tipoProdutos = response.data
            this.setState({ tipoProdutos });
        })
    }

    excluir = (tipoProdutos) => {
        if (window.confirm("Deseja realmente excluir?")){
            axios.delete(`https://localhost:44337/api/tipoProdutos/${tipoProdutos.Identificador}`).then(response => {
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
                            <div className="col-md-6 order-md-1 text-center text-md-left pr-md-5">
                                <h1 className="mb-3">Tipo de Produto</h1>
                                <h4 className="mb-3">Quantidade - { this.state.tipoProdutos.length }</h4>
                                <Link style={{marginBottom: "25px"}} className="btn btn-primary" to={`/tipoProdutos/novo`}>Novo</Link>
                                <table className="table">
                                    <tr>
                                        <th>Código</th>
                                        <th>Descrição</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    {
                                        this.state.tipoProdutos.map(tipoProdutos => (                                        
                                            <tr>                               
                                                <td>{tipoProdutos.Codigo}</td>
                                                <td>{tipoProdutos.Descricao}</td>
                                                <td><Link to={`/tipoProdutos/${tipoProdutos.Identificador}`} className="btn btn-primary">Editar</Link></td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => {this.excluir(tipoProdutos)}}>Excluir</button>
                                                </td>
                                            </tr>        
                                        ))
                                    }                                    
                                </table>
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

export default TipotipoProdutos;
