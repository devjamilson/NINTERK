import React from 'react'
import './style/bloco7.css'

export default function Bloco7() {
  return (
    <section className="bloco7">
        <h1>ESTÁ COM <br></br>ALGUMA DÚVIDA?</h1>
        <h2>DEIXE SEU CONTATO QUE EM BREVE UM CONSULTOR ENTRARÁ EM CONTATO.</h2>
        <form>
            <span>
                <input type='text' placeholder=''></input>
                <input type='tel'></input>
            </span>
            <textarea></textarea>
        </form>
        <input type='submit'></input>
    </section>
  );
}