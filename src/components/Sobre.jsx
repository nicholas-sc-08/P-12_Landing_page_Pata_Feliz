import React from 'react';
import './Sobre.css';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function Sobre() {
  
  const {sobre_ref} = useContext(GlobalContext);

  return (
    <div className='container_sobre' ref={sobre_ref}>

      <div className="container_img_sobre">

        <img src="foto_sobre.jpg" alt="Imagem de Cachorro" />

      </div>

        <div className="container_texto_sobre">

        <div className>

        <h2>Boas-vindas a matilha da Pet Feliz!</h2>
        
        </div>

        <p>A história da Pet Feliz começa em 9 de maio de 2012, quando foi fundada em Florianópolis, SC, por Guedes Campos Martins e Silvio Andre Ribeiro de Oliveira. Desde o início, a missão da empresa foi clara: proporcionar amor e cuidado aos animais de estimação, oferecendo um ambiente acolhedor e produtos de alta qualidade para pets.</p>

        <p>Nos primeiros anos, a Pet Feliz se destacou pela variedade de produtos e serviços, incluindo ração premium, acessórios modernos e serviços de banho e tosa. A equipe sempre se dedicou a criar um espaço onde os pets pudessem se sentir confortáveis e felizes. Com o passar do tempo, a empresa expandiu suas operações, atraindo uma base fiel de clientes que valorizava não apenas os produtos, mas também o atendimento personalizado.</p>

        <p>Tudo começa com uma ideia. Talvez você queira abrir um negócio. Talvez você queira transformar um passatempo em algo mais sério. Ou talvez você tenha um projeto criativo para compartilhar com o mundo.</p>


        </div>


    </div>
  )
}

export default Sobre