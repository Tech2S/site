import React from 'react'
import pp from '../assets/images/pp.jpg'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    {/*<span className="icon major fa-cloud"></span>*/}
                    <img src={pp} className="logo-header" />
                    <h1><strong>Tecnologia</strong> a serviço da <strong>saúde</strong><br/>
                     dentro do ambiente hospitalar.</h1>
                    <p>Disseminando boas práticas de utilização, manuseio, <br/>limpeza e armazenamento de tecnologias médicas.</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Conheça</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
