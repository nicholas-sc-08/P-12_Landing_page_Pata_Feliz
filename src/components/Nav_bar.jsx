import React, { useContext } from 'react';
import './Nav_bar.css';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

function Nav_bar() {
  
  const {inicio_ref} = useContext(GlobalContext);
  const {produtos_ref} = useContext(GlobalContext);
  const {sobre_ref} = useContext(GlobalContext);

  const ir_para_o_inicio = () => {

    inicio_ref.current.scrollIntoView({ behavior: 'smooth'});
  
  };

  const ir_para_sobre = () => {

    sobre_ref.current.scrollIntoView({ behavior: 'smooth'});
  
  };

  const ir_para_produtos = () => {

    produtos_ref.current.scrollIntoView({ behavior: 'smooth'});
  
  };
  
  return (
    <div className='contatiner_navbar'>

        <div className="container_img_navbar">

            <img src="Pet_feliz.svg" alt="Logo" />

        </div>

        <div className="container_hyperlinks_navbar">

            <Link to='#' onClick={ir_para_o_inicio}>Início</Link>
            <Link to='#' onClick={ir_para_sobre}>Sobre</Link>
            <Link to='#' onClick={ir_para_produtos}>Produtos</Link>

        </div>

        <div className="container_botao_nav_bar">

            <button>Entre em Contato</button>

        </div>

    </div>
  )
}

export default Nav_bar