import React, { Component } from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';
import axios from 'axios';

class ProdutoMostrar extends Component {
  
    constructor(props){
        
        super(props)

        this.state = {
            produto: {
                Identificador: 0,
                Codigo: "",
                Preco: 0,
                Ativo: true,
                TipoProduto: {
                    Identificador: 0,
                    Codigo: 0,
                    Descricao: ""
                }
            }
        }

        this.onChange = this.onChange.bind(this);
    }  

    onChange = (e) => {
        let produto = this.state.produto;
        produto[e.target.name] = e.target.value;
        this.setState({produto: produto});
    }

    componentDidMount(){
        let identificador = this.props.match.params.identificador
        if (identificador){
            axios.get(`https://localhost:44337/api/produtos/${identificador}`).then(response => {
                const produto = response.data
                this.setState({ produto });
            })
        }
    }
    
    salvar = () => {
        if (this.state.produto.Identificador > 0){
            axios.put(`https://localhost:44337/api/produtos/${this.state.produto.Identificador}`, this.state.produto).then(response => {
                //window.location.href = "/produtos"
                this.props.history.push("/produtos")
            })
        }
        else{
            axios.post(`https://localhost:44337/api/produtos`, this.state.produto).then(response => {
                this.props.history.push("/produtos")
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
                                <h1 className="mb-3">Produto</h1>
                                <hr/>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="Codigo">Código</label>
                                        <input type="text" className="form-control" id="Codigo" name="Codigo" value={this.state.produto.Codigo} onChange={this.onChange} placeholder="Digite o código" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Descricao">Descrição</label>
                                        <input type="text" className="form-control" id="Descricao" name="Descricao" value={this.state.produto.Descricao} onChange={this.onChange} placeholder="Digite o descrição" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Preco">Preco</label>
                                        <input type="text" className="form-control" id="Preco" name="Preco" value={this.state.produto.Preco} onChange={this.onChange} placeholder="Digite o preço" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Ativo">Ativo</label>
                                        <input type="checkbox" className="form-control" id="Ativo" name="Ativo" value={this.state.produto.Ativo} onChange={this.onChange} placeholder="Digite o cep" />
                                    </div>
                                    <button type="button" onClick={this.salvar} className="btn btn-primary">Salvar</button>
                                </form>
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

export default ProdutoMostrar;
