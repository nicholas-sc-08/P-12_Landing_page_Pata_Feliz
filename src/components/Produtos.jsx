import React from 'react';
import './Produtos.css';

function Produtos() {
  return (
    <div className='container_produtos'>
    
        <div className="container_dos_produtos">

            <div className="produto_a">

                <img src="harness-set.jpg" alt="Coleira" />

                <h4>Coleira Irís</h4>
                <p>R$39,99</p>

                <button>Confira as coleiras</button>
            </div>

            <div className="produto_b">

                <img src="orange+leash.jpg" alt="Coleira" />

                <h4>Coleira Campi</h4>
                <p>R$34,99</p>

                <button>Confira as guias</button>
            </div>

            <div className="produto_c">

                <img src="bowl-1+copy.jpg" alt="Coleira" />

                <h4>Coleira Irís</h4>
                <p>R$17,99</p>

                <button>Confira as tigelas</button>
            </div>

        </div>

    </div>
  )
}

export default Produtos