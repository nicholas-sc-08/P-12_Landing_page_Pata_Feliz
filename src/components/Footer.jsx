import React, { useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function Footer() {
 
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

    const [email, set_email] = useState(``);

    const lidar_com_formulario = e => {

        e.preventDefault();

        set_email(``);
    };
 
    return (
    
    <div className='container_footer'>
    
        <div className="container_titulo">

            <h1>Siga-nos no <Link>Instagram</Link></h1>
            <h2>Seu filhote pode virar destaque!</h2>
        
        </div>

        <div className="container_imgs_footer">

            <img src="foto_footer_um.png" alt="Imagem"/>
            <img src="foto_footer_dois.png" alt="Imagem" />
            <img src="foto_footer_tres.jpg" alt="Imagem" />
            <img src="foto_footer_quatro.png" alt="Imagem" />

        </div>

        <div className="container_texto_footer">

            <div className="coluna_a_footer">

                <img src="Pet_feliz.svg" alt="Logo" />
                
                <div className="container_midias_sociais_footer">

                    <img src="instagram.png" alt="Logo" />
                    <img src="facebook.png" alt="Logo" />

                </div>

                <p>Desenvolvido por <Link target='_blank' to={`https://github.com/nicholas-sc-08`}>Nicholas Serencovich Carvalho</Link></p>

            </div>

            <div className="coluna_b_footer">

                <Link to={`#`} onClick={ir_para_o_inicio}>Início</Link>
                <Link to={`#`} onClick={ir_para_sobre}>Sobre</Link>
                <Link to={`#`} onClick={ir_para_produtos}>Produtos</Link>

            </div>

            <div className="coluna_c_footer">

                <p>Receba atualizações sobre novos produtos e descontos.</p>
                
                <form className='formulario' onSubmit={lidar_com_formulario}>

                <input type="email" placeholder='Endereço de e-mail' value={email} onChange={e => set_email(e.target.value)}/>
                <button type='submit'>Cadastre-se</button>
                </form>

            </div>

        </div>

    </div>
  )
}

export default Footer