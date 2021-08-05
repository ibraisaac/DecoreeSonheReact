import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

class Header extends Component {
    render() {
        return <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
            <link href="https://getbootstrap.com.br/docs/4.1/dist/css/bootstrap.css" rel="stylesheet"></link>
            <link href="https://getbootstrap.com.br/docs/4.1/assets/css/docs.min.css" rel="stylesheet"></link>
            <div className="navbar-nav-scroll">
                <ul className="navbar-nav bd-navbar-nav flex-row">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" exact to="/clientes">Clientes</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" exact to="/produtos">Produtos</NavLink>
                    </li>  
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" exact to="/pedidos">Pedidos</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    }
}

export default Header;
