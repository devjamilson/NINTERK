import React from 'react'
import './style/bloco8.css'
import NK from './imgs/N K.png'
import Inst from './imgs/instagram (7) 3.png'
import Lkin from './imgs/linkedin (6) 3.png'
import Yt from './imgs/youtube (2) 3.png'

export default function Bloco8() {
  return (

    <> 
    <section className="bloco8">
        <span>
            <img src={NK} />
        </span>
        <span>
            <h1>SOBRE NÓS</h1>
            <p>ELEMENTOS ESSÊNCIAS PARA UM MAIOR ALCANCE SÃO PAUTADOS NA EXPERIÊNCIA DO USUÁRIO, PORTABILIDADE DOS SERVIÇOS E COMUNICAÇÃO.</p>
            <button>ENTRE EM CONTATO</button>
        </span>
        <span>
            <h1>SERVIÇOS</h1>
            <p>ELEMENTOS ESSÊNCIAS PARA UM MAIOR ALCANCE SÃO PAUTADOS NA EXPERIÊNCIA DO USUÁRIO, PORTABILIDADE DOS SERVIÇOS E COMUNICAÇÃO.</p>
        </span>
        <span>
            <h1>TAGS</h1>
            <p>ELEMENTOS ESSÊNCIAS PARA UM MAIOR ALCANCE SÃO PAUTADOS NA EXPERIÊNCIA DO USUÁRIO, PORTABILIDADE DOS SERVIÇOS E COMUNICAÇÃO.</p>
            <div>
                <img src={Inst}/>
                <img src={Lkin}/>
                <img src={Yt}/>
            </div>
        </span>
       
    </section> 
    <div className='rodape'>
        <h1>www.ninterkdev.com</h1>
        <span>
            <h1>Copyright © 2022 – Todos os direitos reservados à Ninterk</h1>
        </span>
        
    </div>
    </>
   
  );
}