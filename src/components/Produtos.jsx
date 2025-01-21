import React from 'react';
import './Produtos.css';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function Produtos() {
  
    const {produtos_ref} = useContext(GlobalContext);
  
    return (
    <div className='container_produtos' ref={produtos_ref}>
    
        <div className="container_dos_produtos">

            <div className="produto_a">

                <img src="foto_produto_um.jpg" alt="Coleira" />

                <h4>Coleira Irís</h4>
                <p>R$39,99</p>

                <button>Confira as coleiras</button>
            </div>

            <div className="produto_b">

                <img src="foto_produto_dois.jpg" alt="Coleira" />

                <h4>Coleira Campi</h4>
                <p>R$34,99</p>

                <button>Confira as guias</button>
            </div>

            <div className="produto_c">

                <img src="foto_produto_tres.jpg" alt="Coleira" />

                <h4>Coleira Irís</h4>
                <p>R$17,99</p>

                <button>Confira as tigelas</button>
            </div>

        </div>

    </div>
  )
}

export default Produtos