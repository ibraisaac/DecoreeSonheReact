import React, { Component } from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';
import axios from 'axios';

class ClienteMostrar extends Component {
    
    constructor(props){
        
        super(props)

        this.state = {
            cliente: {
                Identificador: 0,
                Nome: "",
                Endereco: "",
                Bairro: "",
                Cidade: "",
                Cep: "",
                Estado: "",
                Telefone: ""
            }
        }

        this.onChange = this.onChange.bind(this);
    }    

    onChange = (e) => {
        let cliente = this.state.cliente;
        cliente[e.target.name] = e.target.value;
        this.setState({cliente: cliente});
    }

    componentDidMount(){
        let identificador = this.props.match.params.identificador
        if (identificador){
            axios.get(`https://localhost:44337/api/clientes/${identificador}`).then(response => {
                const cliente = response.data
                this.setState({ cliente });
            })
        }
    }

    salvar(cliente){
        if (cliente && cliente.Identificador && cliente.Identificador > 0){
            axios.put(`https://localhost:44337/api/clientes/${cliente.Identificador}`, cliente).then(response => {
                //window.location.href = "/clientes"
                this.props.history.push("/clientes")
            })
        }
        else{
            axios.post(`https://localhost:44337/api/clientes`, this.state.cliente).then(response => {
                this.props.history.push("/clientes")
            })
        }
    }
    
    salvarScopo = () => {
        if (this.state.cliente.Identificador > 0){
            axios.put(`https://localhost:44337/api/clientes/${this.state.cliente.Identificador}`, this.state.cliente).then(response => {
                //window.location.href = "/clientes"
                this.props.history.push("/clientes")
            })
        }
        else{
            axios.post(`https://localhost:44337/api/clientes`, this.state.cliente).then(response => {
                this.props.history.push("/clientes")
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
                                <h1 className="mb-3">Cliente</h1>
                                <hr/>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="nome">Nome</label>
                                        <input type="text" className="form-control" id="Nome" name="Nome" value={this.state.cliente.Nome} onChange={this.onChange} placeholder="Digite o nome" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="endereco">Endereço</label>
                                        <input type="text" className="form-control" id="Endereco" name="Endereco" value={this.state.cliente.Endereco} onChange={this.onChange} placeholder="Digite o endereço" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="bairro">Bairro</label>
                                        <input type="text" className="form-control" id="Bairro" name="Bairro" value={this.state.cliente.Bairro} onChange={this.onChange} placeholder="Digite o bairro" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cep">CEP</label>
                                        <input type="text" className="form-control" id="CEP" name="CEP" value={this.state.cliente.CEP} onChange={this.onChange} placeholder="Digite o cep" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cidade">Cidade</label>
                                        <input type="text" className="form-control" id="Cidade" name="Cidade" value={this.state.cliente.Cidade} onChange={this.onChange} placeholder="Digite a cidade" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="estado">Estado</label>
                                        <input type="text" className="form-control" id="Estado" name="Estado" value={this.state.cliente.Estado} onChange={this.onChange} placeholder="Digite o estado" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="telefone">Telefone</label>
                                        <input type="text" className="form-control" id="Telefone" name="Telefone" value={this.state.cliente.Telefone} onChange={this.onChange} placeholder="Digite o telefone" />
                                    </div>
                                    <button type="button" onClick={this.salvarScopo} className="btn btn-primary">Salvar</button>
                                </form>
                            </div>                            
                        </div>
                        <hr/>
                        <div className="col-md-12 order-md-1 text-center text-md-left pr-md-5">
                            <p className="text-muted mb-0">
                                Versão 0.0.1
                            </p>
                        </div>
                    </div>
                </main>
                <Footer></Footer>
            </div>
        )
    }
}

export default ClienteMostrar;
