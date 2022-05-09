import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";
import './style/bloco6.css'

export default function Bloco6() {
  return (
    <section className="bloco6">
        <h1>ORÇAMENTO</h1>
        <h2>SITE PROFISSIONAL PARA A SUA EMPRESA</h2>
        <div className='cont-orcamento'>
            <div>
                <header className="head-orc">
                  <h4>FEITO COM MODELO DE SITE</h4>
                  <h3 className='titulo-h1-orc'>SITE RÁPIDO</h3>
                </header>
                <ul className='
                list-cont-orc'>
                   <li className='titulo-text'>À PARTIR DE <span>R$585</span></li>
                   <li><AiOutlineCheck className='chack'/> Criação de site profissional </li>
                   <li><AiOutlineCheck className='chack'/> personalizado baseado em modelos</li>
                   <li><AiOutlineCheck className='chack'/> Design responsivo (desktop, tablet, celular)</li>
                   <li><AiOutlineCheck className='chack'/> Personalização total do site com cores, imagens e texto</li>
                   <li><AiOutlineCheck className='chack'/> Entregue com até 5 páginas*</li>
                   <li><AiOutlineCheck className='chack'/> Editor visual Arrasta e solta</li>
                   <li><AiOutlineCheck className='chack'/> Formulários e botões de para gerar leads</li>
                   <li><AiOutlineCheck className='chack'/> Integração com redes sociais
                     Google friendly</li>
                   <li><AiOutlineCheck className='chack'/> Treinamento para uso do site​
                     Até 3 usuários administradores no painel</li>
                   <li><AiOutlineCheck className='chack'/> Conformidade com a LGPD</li>
                </ul>
                <button className='btn1'>FAÇA ORÇAMENTO</button>
            </div>
            <div>
                <header className="head-orc">
                  <h4>FEITO DE FORMA ARTESANAL</h4>
                  <h3 className='titulo-h1-orc'>SITE PERSONALIZADO</h3>
                </header>
                <ul className='
                list-cont-orc'>
                   <li className='titulo-text'> Sob orçamento</li>
                   <li><AiOutlineCheck className='chack'/> Criação de site profissional exclusivo de forma artesanal</li>
                   <li><AiOutlineCheck className='chack'/> Layout exclusivo sob medida</li>
                   <li><AiOutlineCheck className='chack'/> Design Responsivo (desktop, tablet, celular)</li>
                   <li><AiOutlineCheck className='chack'/> Desenvolvimento artesanal</li>
                   <li><AiOutlineCheck className='chack'/> One Page, Multipage ou E-commerce</li>
                   <li><AiOutlineCheck className='chack'/> Integrações customizadas</li>
                   <li><AiOutlineCheck className='chack'/> Otimização SEO para Buscas no Google​</li>
                   <li><AiOutlineCheck className='chack'/> Formulários e botões de para gerar leads​</li>
                   <li><AiOutlineCheck className='chack'/>Integração com redes sociais​</li>
                   <li><AiOutlineCheck className='chack'/>Treinamento para uso do site​</li>
                   <li><AiOutlineCheck className='chack'/>Usuários administradores ilimitados</li> 
                   <li><AiOutlineCheck className='chack'/>Conformidade com a LGPD</li>
                </ul>
                <button className='btn2'>FAÇA ORÇAMENTO</button>
            </div>
        </div>
    </section>
  );
}