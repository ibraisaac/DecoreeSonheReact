import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return <footer className="bd-footer text-muted">
            <div className="container-fluid p-3 p-md-5">
                <ul className="bd-footer-links">
                    <li>
                        <a href="https://www.instagram.com/decoreesonhe">Instagram</a>
                    </li>
                    <li>
                        <a href="/docs/4.1/about/overview/">Sobre</a>
                    </li>
                </ul>
                <p>Projetado e contruido por Isaac Rodrigues</p>
            </div>
        </footer>
    }
}


export default Footer;
