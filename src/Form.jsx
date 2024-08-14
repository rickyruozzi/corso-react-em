// import PropTypes from 'prop-types';
function handleChange(e){
    console.log(e.target.value);
  }
  
  function handleSubmit(e){
    e.preventDefault();
    console.log(e);
  }
    
export default function Form() {
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type='text' name='testo' onChange={handleChange} className='input-margin'></input>
            <button type='submit'>Invia</button>
        </form>
    </> 
  );
}
