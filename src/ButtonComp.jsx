import PropTypes from 'prop-types';

export default function ButtonComp({ funzione }) {
  return <button onClick={() => {
    if (typeof funzione === 'function') {
      funzione();
    } else {
      console.error('funzione prop must be a function');
    }
  }}>Attiva alert</button>;
}

ButtonComp.propTypes = {
  funzione: PropTypes.func.isRequired,
};
/*Abbiamo scalato un props al livello inferiore passandogli una funzione del componente padre,
la quale viene attivata nel momento in cui si attiva l'evento onClick */