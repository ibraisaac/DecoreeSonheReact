import React, { Component } from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Produtos extends Component {

    state = {
        produtos: []
    }

    componentDidMount(){
        this.lista()
    }

    lista = () =>{
        axios.get('https://localhost:44337/api/produtos').then(response => {
            const produtos = response.data
            this.setState({ produtos });
        })
    }

    excluir = (produto) => {
        if (window.confirm("Deseja realmente excluir?")){
            axios.delete(`https://localhost:44337/api/produtos/${produto.Identificador}`).then(response => {
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
                            <div className="col-md-3 order-md-1 text-center text-md-left pr-md-5">
                                <h1 className="mb-3">Produtos</h1>
                                <h4 className="mb-3">Quantidade - { this.state.produtos.length }</h4>
                                <Link style={{marginBottom: "25px"}} className="btn btn-primary" to={`/produto/novo`}>Novo</Link>
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Código</th>
                                        <th>Descrição</th>
                                        <th>Preço</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.produtos.map((produtos, index) => (                                        
                                            <tr key={index}>                               
                                                <td>{produtos.Codigo}</td>
                                                <td>{produtos.Descricao}</td>
                                                <td>{produtos.Preco}</td>
                                                <td><Link to={`/produto/${produtos.Identificador}`} className="btn btn-primary">Editar</Link></td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => {this.excluir(produtos)}}>Excluir</button>
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

export default Produtos;
