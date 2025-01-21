import React, { useCallback, useContext } from 'react';
import './Pagina_inicial.css';
import { GlobalContext } from '../context/GlobalContext';
import Banner from '../components/Banner';
import Sobre from '../components/Sobre';

function Pagina_inicial() {
  
  return (
    <div>

      <Banner/>
      <Sobre/>

    </div>
  )
}

export default Pagina_inicial