import React from 'react';
import './Nav_bar.css';
import { Link } from 'react-router-dom';

function Nav_bar() {
  return (
    <div className='contatiner_navbar'>

        <div className="container_img_navbar">

            <img src="Pet_feliz.svg" alt="Logo" />

        </div>

        <div className="container_hyperlinks_navbar">

            <Link to='#' >Início</Link>
            <Link to='#' >Sobre</Link>
            <Link to='#' >Produtos</Link>

        </div>

        <div className="container_botao_nav_bar">

            <button>Entre em Contato</button>

        </div>

    </div>
  )
}

export default Nav_bar