import React, { Component } from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';
import axios from 'axios'

class PedidoMostrar extends Component {
  
    constructor(props){
        
        super(props)

        this.state = {
            pedido: {
                Identificador: 0,
                Codigo: "",
                DataPedido: "",
                DataPagamento: "",
                TipoPagamento: "",
                CanalVenda: "",
                Status: "",
                IdCliente: "",
                Observacao: ""                
            }
        }

        this.onChange = this.onChange.bind(this);
    }  

    onChange = (e) => {
        let pedido = this.state.pedido;
        pedido[e.target.name] = e.target.value;
        this.setState({pedido: pedido});
    }

    componentDidMount(){
        let identificador = this.props.match.params.identificador
        if (identificador){
            axios.get(`https://localhost:44337/api/pedidos/${identificador}`).then(response => {
                const pedido = response.data
                this.setState({ pedido });
            })
        }
    }
    
    salvar = () => {
        debugger
        if (this.state.pedido.Identificador > 0){
            axios.put(`https://localhost:44337/api/pedido/${this.state.pedido.Identificador}`, this.state.pedido).then(response => {
                //window.location.href = "/pedidos"
                this.props.history.push("/pedidos")
            })
        }
        else{
            axios.post(`https://localhost:44337/api/pedidos`, this.state.pedido).then(response => {
                this.props.history.push("/pedidos")
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
                                <h1 className="mb-3">Mostrando Pedido</h1>
                                <hr/>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="Codigo">Código</label>
                                        <input type="text" className="form-control" id="Codigo" name="Codigo" value={this.state.pedido.Codigo} onChange={this.onChange} placeholder="Digite o código" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Descricao">Data Pedido</label>
                                        <input type="text" className="form-control" id="Descricao" name="Descricao" value={this.state.pedido.Descricao} onChange={this.onChange} placeholder="Digite o descrição" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="DataEntrega">Data Entrega</label>
                                        <input type="date" className="form-control" id="DataEntrega" name="DataEntrega" value={this.state.pedido.DataEntrega} onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="DataPagamento">Data Pagamento</label>
                                        <input type="date" className="form-control" id="DataPagamento" name="DataPagamento" value={this.state.pedido.DataPagamento} onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="TipoPagamento">Tipo Pagamento</label>
                                        <input type="text" className="form-control" id="TipoPagamento" name="TipoPagamento" value={this.state.pedido.TipoPagamento} onChange={this.onChange} placeholder="Digite o tipo de pagamento" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="TipoEntrega">Tipo Entrega</label>
                                        <input type="text" className="form-control" id="TipoEntrega" name="TipoEntrega" value={this.state.pedido.TipoEntrega} onChange={this.onChange} placeholder="Digite tipo de entrega" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="CanalVenda">Canal Venda</label>
                                        <input type="text" className="form-control" id="CanalVenda" name="CanalVenda" value={this.state.pedido.CanalVenda} onChange={this.onChange} placeholder="Digite o canal de venda" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Status">Status</label>
                                        <input type="checkbox" className="form-control" id="Status" name="Status" value={this.state.pedido.Status} onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="IdCliente">Cliente</label>
                                        <input type="text" className="form-control" id="IdCliente" name="IdCliente" value={this.state.pedido.IdCliente} onChange={this.onChange} placeholder="Digite o cliente" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Observacao">Observação</label>
                                        <input type="text" className="form-control" id="Observacao" name="Observacao" value={this.state.pedido.Observacao} onChange={this.onChange} placeholder="Digite a observação" />
                                    </div>
                                    <button type="button" onClick={this.salvar} className="btn btn-primary">Salvar</button>
                                </form>
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

export default PedidoMostrar;
