import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Component({ children, numero, colore }) {
  const StileCipolla = {
    color: colore,
    fontFamily: 'Arial',
    fontWeight: '700'
  };

  const classeNonHovered = {
    border: '3px solid red',
    padding: '10px',
    borderRadius: '15px'
  };

  const hoverStile = {
    backgroundColor: 'yellow'
  };

  const [isHovered, setIsHovered] = useState(false); //crea una variabile settata su False e un metodo di setting 

  const handleMouseOver = () => { //alla chiamata del metodo che avviene quando il focus del mouse è sull'elemento
    setIsHovered(true); //imposto la flag ishovered su True
  };

  const handleMouseOut = () => {  //come prima, ma quando il focus è altrove la flag ishovered diviene False
    setIsHovered(false);
  };

  return (
    <div 
      style={isHovered ? { ...classeNonHovered, ...hoverStile } : classeNonHovered} /*se la flag isHovered 
      è vera viene restituita una combinazione delle due classi, altrimenti viene restituitra la classe nonHovered */
      onMouseOver={handleMouseOver} //specifica i metodi da richiamare nelle due condizioni
      onMouseOut={handleMouseOut}
    >
      <h3 style={StileCipolla}>Ciao {children}!</h3>
      <h3 style={StileCipolla}>Il tuo numero è {numero}!</h3>
    </div>
  );
}

Component.propTypes = {
  children: PropTypes.string.isRequired,
  numero: PropTypes.number.isRequired, // Changed from string to number
  colore: PropTypes.string.isRequired
};