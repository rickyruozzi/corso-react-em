import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function ButtonComp() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(()=>{document.title=`${count}`}, [count])   //Alt + 096 per i backstick

  /*useEffect ci consente di gestire i cosidetti side effects, aggiornandoli con la classica sintassi di JS 
  rimarremmo sempre indietro di un passo, con tale metodo possiamo aggiornare il titolo (compiendo l'effetto) al
  variare dello stato della variabile count*/

  /*Se noi non passassimo nell'array il valore / i valori da tenere d'occhio per l'aggiornamento, useEffect si 
  attiverebbe ad ogni rivautazione del componente, se invece passassimo un array vuoto si  aggiornerebbe solo
  la prima volta.
  Se nell'array ci sono più elementi il metodo verra eseguito nuovamente all'aggiornamento di uno qualsiasi 
  dei parametri indicati*/


  return (
    <button className='ButtonMargin' onClick={handleClick}>
      count {count}
    </button>
  );
}

ButtonComp.propTypes = {
  funzione: PropTypes.func.isRequired,
};