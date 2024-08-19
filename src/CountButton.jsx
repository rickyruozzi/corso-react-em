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

  return (
    <button className='ButtonMargin' onClick={handleClick}>
      count {count}
    </button>
  );
}

ButtonComp.propTypes = {
  funzione: PropTypes.func.isRequired,
};