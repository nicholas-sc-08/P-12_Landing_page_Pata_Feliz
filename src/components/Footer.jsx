import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='container_footer'>
    
        <div className="container_titulo">

            <h1>Siga-nos no <Link>Instagram</Link></h1>
            <h2>Seu filhote pode virar destaque!</h2>
        
        </div>

        <div className="container_imgs_footer">

            <img src="Terrier+escocês+com+suéter+verde.png" alt="Imagem" className='ia'/>
            <img src="Coleira+Pepé+roxa,+laranja+e+verde.png" alt="Imagem" />
            <img src="Cão+cliente+usando+coleira+e+guia+verde.jpg" alt="Imagem" />
            <img src="Fundadora+da+Otis+Pets+com+o+galgo+de+estimação.png" alt="Imagem" />

        </div>

        <div className="container_texto_footer">

            <div className="coluna_a_footer">

                <img src="Pet_feliz.svg" alt="Logo" />
                
                <div className="container_midias_sociais_footer">

                    <img src="instagram.png" alt="Logo" />
                    <img src="facebook.png" alt="Logo" />

                </div>

                <p>Desenvolvido por <Link>Nicholas Serencovich Carvalho</Link></p>

            </div>

            <div className="coluna_b_footer">

                <Link>Início</Link>
                <Link>Sobre</Link>
                <Link>Produtos</Link>

            </div>

            <div className="coluna_c_footer">

                <p>Receba atualizações sobre novos produtos e descontos.</p>
                
                <form className='formulario'>

                <input type="email" placeholder='Endereço de e-mail'/>
                <button>Cadastre-se</button>
                </form>

            </div>

        </div>

    </div>
  )
}

export default Footer