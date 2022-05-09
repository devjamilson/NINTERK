import React, {useState} from 'react'
import './style/bloco3.css'
import Ecommerce from './imgs/icon-bloco3/carrinho-gradient.png'
import EcommerceBranco from './imgs/icon-bloco3/carrinho-branco.png'
import AnaliseWeb from './imgs/icon-bloco3/analise-da-web-gradient.png'
import AnaliseWebBranco from './imgs/icon-bloco3/analise-da-web-branco.png'
import Globo from './imgs/icon-bloco3/globo-gradient.png'
import GloboBranco from './imgs/icon-bloco3/globo-branco.png'
import Lampada from './imgs/icon-bloco3/lampada-eletrica-gradient.png'
import LampadaBranca from './imgs/icon-bloco3/lampada-eletrica-branca.png'
import Design from './imgs/icon-bloco3/vetor-gradient.png'
import DesignBranco from './imgs/icon-bloco3/vetor-branco.png'
import Marketing from './imgs/icon-bloco3/marketing-digital-gradient.png'
import MarketingBranco from './imgs/icon-bloco3/marketing-digital-branco.png'


class Bloco3 extends React.Component {

    state = {
        showBox: true,
        showBox2: false,
        showBox3: true,
        showBox4: false,
        showBox5: true,
        showBox6: false,
        showBox7: true,
        showBox8: false,
        showBox9: true,
        showBox10: false,
        showBox11: true,
        showBox12: false,
    };

    handleBoxToggle1 = () => this.setState({ showBox: !this.state.showBox });
    handleBoxToggle2 = () => this.setState({ showBox: this.state.showBox2 });

    handleBoxToggle3 = () => this.setState({ showBox: !this.state.showBox3 });
    handleBoxToggle4 = () => this.setState({ showBox: this.state.showBox4 });

    handleBoxToggle5 = () => this.setState({ showBox: !this.state.showBox });
    handleBoxToggle6 = () => this.setState({ showBox: this.state.showBox2 });
    
    handleBoxToggle7 = () => this.setState({ showBox: !this.state.showBox });
    handleBoxToggle8 = () => this.setState({ showBox: this.state.showBox2 });
    
    handleBoxToggle9 = () => this.setState({ showBox: !this.state.showBox });
    handleBoxToggle10 = () => this.setState({ showBox: this.state.showBox2 });
    
    handleBoxToggle11 = () => this.setState({ showBox: !this.state.showBox });
    handleBoxToggle12 = () => this.setState({ showBox: this.state.showBox2 });


    render(){
        return(
        <section className="bloco3">
            <h1>CONFIRA OS <br></br>
                NOSSOS SERVIÇOS</h1>
            <p>SAIBA COMO PODEMOS CONTRIBUIR PARA A SUA EMPRESA </p>
            <div className='cont-serv-info'>
                <div className='cards' id='card' onMouseEnter={this.handleBoxToggle1} onMouseOut={this.handleBoxToggle2} >  
                    <img src={Ecommerce} className={`ecommerce-g${this.state.showBox ? " " : "show"}`}id='img-card-g'/> 
                    <img src={EcommerceBranco} className={`ecommerce-g${this.state.showBox ? "show " : ""}`}id='img-card-g'/> 
                    <h2>E-COMMERCER</h2>
                    <p>ELEMENTOS ESSÊNCIAS PARA UM MAIOR ALCANCE SÃO PAUTADOS NA EXPERIÊNCIA DO USUÁRIO, PORTABILIDADE DOS SERVIÇOS E COMUNICAÇÃO.</p>
                </div>
                <div className='cards' onMouseEnter={this.handleBoxToggle3} onMouseOut={this.handleBoxToggle3} >
                    <img src={AnaliseWeb} className={`ecommerce-g${this.state.showBox ? "" : "show "}`} id='card-img-2'/>
                    <img src={AnaliseWebBranco} className={`ecommerce-g${this.state.showBox ? "show " : ""}`} id='card-img-2'/>
                    <h2>SISTEMAS-WEB</h2>
                    <p>O DESENVOLVIMENTO DE PROJETOS COM O QUE HÁ DE MAIS MODERNO E TECNOLÓGICO NO MERCADO, CONTRIBUI PARA UMA MELHOR PERFORMANCE DA APLICAÇÃO WEB, TORNANDO-A MAIS OTIMIZADA.</p>
                </div>
                <div className='cards' onMouseEnter={this.handleBoxToggle5} onMouseOut={this.handleBoxToggle6} >
                    <img src={Globo} className={`ecommerce-g${this.state.showBox ? "" : "show "}`} id='card-img-3'/>
                    <img src={GloboBranco} className={`ecommerce-g${this.state.showBox ? "show " : ""}`} id='card-img-3'/>
                    <h2>SITES INSTITUCIONAIS</h2>
                    <p>A MULTIPLICIDADE DOS USUÁRIOS PRESENTES NA REDE, DEVE SER CONSIDERADA, E PORTANTO A ACESSIBILIDADE É PARTE DE SUMA IMPORTÂNCIA PARA A INTEGAÇÃO DA SUA EMPRESA NO AMBIENTE VIRTUAL.</p>
                </div>
                <div className='cards' onMouseEnter={this.handleBoxToggle7} onMouseOut={this.handleBoxToggle8} >
                    <img src={Lampada} className={`ecommerce-g${this.state.showBox ? "" : "show "}`} id='card-img-4'/>
                    <img src={LampadaBranca} className={`ecommerce-g${this.state.showBox ? "show " : ""}`} id='card-img-4'/>
                    <h2>ATUALIZAÇÃO</h2>
                    <p>ELEMENTOS ESSÊNCIAS PARA UM MAIOR ALCANCE SÃO PAUTADOS NA EXPERIÊNCIA DO USUÁRIO, PORTABILIDADE DOS SERVIÇOS E COMUNICAÇÃO.</p>
                </div>
                <div className='cards' onMouseEnter={this.handleBoxToggle9} onMouseOut={this.handleBoxToggle10} >
                    <img src={Design} className={`ecommerce-g${this.state.showBox ? "" : "show "}`} id='card-img-5'/>
                    <img src={DesignBranco} className={`ecommerce-g${this.state.showBox ? "show " : ""}`} id='card-img-5'/>
                    <h2>DESIGNE UI/UX</h2>
                    <p>O DESENVOLVIMENTO DE PROJETOS COM O QUE HÁ DE MAIS MODERNO E TECNOLÓGICO NO MERCADO, CONTRIBUI PARA UMA MELHOR PERFORMANCE DA APLICAÇÃO WEB, TORNANDO-A MAIS OTIMIZADA.</p>
                </div>
                <div className='cards' onMouseEnter={this.handleBoxToggle11} onMouseOut={this.handleBoxToggle12} >
                    <img src={Marketing} className={`ecommerce-g${this.state.showBox ? "" : "show "}`} id='card-img-6'/>
                    <img src={MarketingBranco} className={`ecommerce-g${this.state.showBox ? "show " : ""}`} id='card-img-6'/>
                    <h2>MARKETING-WEB</h2>
                    <p>A MULTIPLICIDADE DOS USUÁRIOS PRESENTES NA REDE, DEVE SER CONSIDERADA, E PORTANTO A ACESSIBILIDADE É PARTE DE SUMA IMPORTÂNCIA PARA A INTEGAÇÃO DA SUA EMPRESA NO AMBIENTE VIRTUAL.</p>
                </div>
            </div>
        </section>
    )};
}

export default Bloco3;