import React, {useEffect} from 'react'
import './style/menu-banner-bloco1.css'

export default function Bloco1() {

  return (
    <section className="bloco1">
        <header className='menu-principal'>
            <h1 className='gradient'>N I N T E R K</h1>
            <ul>
                <li><a>INÍCIO</a></li>
                <li><a>SERVIÇOS</a></li>
                <li><a>PORTFÓLIO</a></li>
                <li><a>QUEM SOMOS</a></li>
                <li><button>ENTRE EM CONTATO</button></li>
            </ul>
        </header>
        <div className='cont-principal'>
            <h1>AGÊNCIA DE DESENVOLVIMENTO DE SITES E SISTEMAS <br></br>WEB.</h1>
            <p>WEB-SITES, E-COMMERCE, SITES INSTITUCIONAIS, SISTEMAS WEB...</p>
            <button>SAIBA MAIS</button>
        </div>
        <div className='style'></div>
    </section>
  );
}

