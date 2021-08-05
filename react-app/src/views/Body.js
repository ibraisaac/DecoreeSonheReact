import React, {Component} from 'react';

class Body extends Component {
    render() {
        return <main className="bd-masthead" id="content" role="main">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-6 mx-auto col-md-6 order-md-2"></div>
                    <div className="col-md-6 order-md-1 text-center text-md-left pr-md-5">
                        <h1 className="mb-3 bd-text-purple-bright">Decore & Sonhe</h1>
                        <p className="lead">
                        <p className="lead">Produto/serviço</p>
                        <p className="lead">🛋️Almofadas decorativas I a partir de R$10,00</p>
                        <p className="lead">📌Itaúna, MG/ Enviamos para todo o Brasil</p>
                        <p className="lead">📦Varejo e Atacado</p>
                        </p>
                        <hr/>
                    </div>
                </div>
                <p className="text-muted mb-0">
                    Versão atual 0.0.1
                </p>
            </div>
        </main>
    }
}


export default Body;
