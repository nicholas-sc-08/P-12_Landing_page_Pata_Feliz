import React, { useContext } from 'react';
import './Banner.css';
import Nav_bar from './Nav_bar';
import { GlobalContext } from '../context/GlobalContext';

function Banner() {
  
  const {inicio_ref} = useContext(GlobalContext);
  
  return (
    <div className='container_banner' ref={inicio_ref}>

        <div className="alinhamento_navbar">

            <Nav_bar/>
        
        </div>

        <div className="container_texto_banner">

          <h1>Amor e Cuidado para Seu Melhor Amigo!</h1>
          <p>Descubra tudo que seu pet merece em um só lugar! No nosso petshop, você encontra uma variedade incrível de produtos de qualidade, desde ração premium até acessórios estilosos. Oferecemos também serviços de banho e tosa, consultas veterinárias e muito mais.</p>
          <button>Consulte já</button>

        </div>

    </div>
  )
}

export default Banner