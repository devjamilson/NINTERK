import React from 'react'
import './style/processo-de-dev.css'
import Alcance from './imgs/rede.png'
import Foguete from './imgs/foguete.png'
import Grupo from './imgs/grupo.png'

export default function Bloco2(){


    

  return (
    <section className="bloco2">
        <h1 id='anime'>PRINCÍPIOS DO<br></br> DESENVOLVIMENTO</h1>
        <p>FUNDAMENTAM A NOSSA DINÂMICA DE PRODUÇÃO </p>
        <div className='cont-card-info'>
            <div className='cards'>
                <img src={Alcance}/>
                <h2>ALCANCE</h2>
                <p>ELEMENTOS ESSÊNCIAS PARA UM MAIOR ALCANCE SÃO PAUTADOS NA EXPERIÊNCIA DO USUÁRIO, PORTABILIDADE DOS SERVIÇOS E COMUNICAÇÃO.</p>
            </div>
            <div className='cards'>
                <img src={Foguete}/>
                <h2>PERFORMANCE</h2>
                <p>O DESENVOLVIMENTO DE PROJETOS COM O QUE HÁ DE MAIS MODERNO E TECNOLÓGICO NO MERCADO, CONTRIBUI PARA UMA MELHOR PERFORMANCE DA APLICAÇÃO WEB, TORNANDO-A MAIS OTIMIZADA.</p>
            </div>
            <div className='cards'>
                <img src={Grupo}/>
                <h2>ACESSIBILIDADE</h2>
                <p>A MULTIPLICIDADE DOS USUÁRIOS PRESENTES NA REDE, DEVE SER CONSIDERADA, E PORTANTO A ACESSIBILIDADE É PARTE DE SUMA IMPORTÂNCIA PARA A INTEGAÇÃO DA SUA EMPRESA NO AMBIENTE VIRTUAL.</p>
            </div>
        </div>
    </section>
  );
}