import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

import meaning1 from '../assets/images/meaning1.jpg'
import meaning2 from '../assets/images/meaning2.jpg'
import meaning3 from '../assets/images/meaning3.jpg'

import about from '../assets/images/about.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Tech2S - Tecnologia a Serviço da Saúde.";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Porquê prezar pelo bom manuseio de equipamentos <br />
                                 hospitalares é tão importante?</h2>
                            </header>
                            <p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={about} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                {/*<li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style3 major fa-camera-retro"></span></li>
                                <li><span className="icon style4 major fa-cog"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-calendar"></span></li>
                                <li><img src={meaning1} /></li>
                                <li><img src={meaning2} /></li>*/}
                                <li><img src={meaning3} /></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Nossa Proposta</h2>
                            </header>
                            <p>A empresa Tech2S (Tecnologia a Serviço da Saúde) nasceu da idéia de um grupo de amigos durante o trabalho de conclusão do curso de Pós Graduação em Engenharia Clinica no Hospital Albert Einstein em São Paulo-2019, com a missão de diminuir essa dor dos EAS a nível nacional provendo soluções visando a comunicação e capacitação contínua de profissionais que usam tecnologias médicas.</p>
                            <p>Somos uma startup na área da saúde e oferecemos soluções inteligentes dedicadas a cada EAD, focadas na segurança do paciente, eficiência operacional e redução de custos através da melhoria da comunicação, consultoria e capacitação contínua de profissionais no uso de equipamentos médico-hospitalares.</p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Nosso Time</h2>
                            </header>
                            <p>Especialistas em 3 áreas diferentes e complementares.</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Bruno Dourado</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions large">
                                {/*<li><a href="#" className="button">More</a></li>*/}
                                <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                                <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Franklin Silva</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions large">
                                {/*<li><a href="#" className="button">More</a></li>*/}
                                <li><a href="#" className="icon alt fa-facebook large"><span className="label">Facebook</span></a></li>
                                <li><a href="#" className="icon alt fa-instagram large"><span className="label">Instagram</span></a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>Ramon ...</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions large">
                                {/*<li><a href="#" className="button">More</a></li>*/}
                                <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                                <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Ipsum feugiat consequat?</h2>
                        </header>
                        <p>Sed lacus nascetur ac ante amet sapien.</p>
                        <ul className="actions uniform">
                            <li><a href="#" className="button special">Sign Up</a></li>
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;