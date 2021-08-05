import React, { Component } from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Clientes extends Component {

    state = {
        clientes: []
    }

    componentDidMount(){
        this.lista()
    }

    lista = () =>{
        axios.get('https://localhost:44337/api/clientes').then(response => {
            const clientes = response.data
            this.setState({ clientes });
        })
    }

    excluir = (cliente) => {
        if (window.confirm("Deseja realmente excluir?")){
            axios.delete(`https://localhost:44337/api/clientes/${cliente.Identificador}`).then(response => {
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
                            <div className="col-12 mx-auto col-md-8">
                            </div>
                            <div className="col-md-7 order-md-1 text-center text-md-left pr-md-5">
                                <h1 className="mb-3">Clientes</h1>
                                <h4 className="mb-3"> Quantidade - { this.state.clientes.length }</h4>
                                <Link style={{marginBottom: "25px"}} className="btn btn-primary" to={`/cliente/novo`}>Novo</Link>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Endereço</th>
                                            <th>Bairro</th>
                                            <th>CEP</th>
                                            <th>Cidade</th>
                                            <th>Estado</th>
                                            <th>Telefone</th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.clientes.map((cliente, index) => (                                        
                                            <tr key={index}>                               
                                                <td>{cliente.Nome}</td>
                                                <td>{cliente.Endereco}</td>
                                                <td>{cliente.Bairro}</td>
                                                <td>{cliente.CEP}</td>
                                                <td>{cliente.Cidade}</td>
                                                <td>{cliente.Estado}</td>
                                                <td>{cliente.Telefone}</td>
                                                <td><Link to={`/cliente/${cliente.Identificador}`} className="btn btn-primary">Editar</Link></td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => {this.excluir(cliente)}}>Excluir</button>
                                                </td>
                                            </tr>        
                                        ))
                                    }          
                                    </tbody>                          
                                </table>
                                <hr/>
                                <p style={{marginTop: "50px"}} className="text-muted mb-0">
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

export default Clientes;
