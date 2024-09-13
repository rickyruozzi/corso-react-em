import { useEffect, useState, useReducer } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Component from './Component'
import Form from './Form'
import ButtonComp from './ButtonComp'
import CountButton from './CountButton'

function App() {
  const [oggetto, setOggetto] = useState({default : 'Default'});

  function formReducer(state,action){  //vera e propria funzione che verrà richiamata per gestire le varie operazioni
    switch(action.type){
      case 'CHANGE_CAMPO':
        return {...state, [action.campo] : action.valore} ;
      case 'RESET':
        return {nome:'Riccardo', campo:''}
    }
  }
  const [myObject, dispatchMyObect] = useReducer(formReducer, {nome : 'Riccardo'});
  const handleCampoChange= (campo , valore)=>{
    dispatchMyObect({type:'CHANGE_CAMPO', campo, valore }) /*la funzione dispatch chimerà formReducer passandoli i tre 
    parametri. */
  }

  /*Con un reducer possiamo inizializzare un oggetto con un determinato stato, e dichiarare una funzione di dispatch che si occuperà del
  cambio di stato. 
  Successivamente alla chiamata di dispatch, la funzione stessa richiede il valore di ritorno da impostare a FormReducer
  specificando il tipo di operazione e altri parametri all'interno di un oggetto.*/

  const HandleResetForm= ()=>{
    dispatchMyObect({type:'RESET', })
  }
  /*Usando il Reducer possiamo gestire lo stato in maniera più completa, implementando diversi tipi di azioni relative ad esso  */

  useEffect(() => {
    console.log(myObject);
  }, [myObject]);
  useEffect(()=>{console.log(oggetto)}, [oggetto])
  // const [count, setCount] = useState(0);
  const [items, setItems] = useState([1,2,3]);
  const addItems= ()=>{
    setItems([...items,items[items.length-1] + 1]); //sintassi per concatenare in jsx i due elementi
  }

  const people = [
  {
    name: "John",
    age: 25,
    occupation: "Software Engineer"
  },
  {
    name: "Jane",
    age: 30,
    occupation: "Marketing Manager"
  },
  {
    name: "Bob",
    age: 35,
    occupation: "Sales Representative"
  },
  {
    name: "Alice",
    age: 20,
    occupation: "Student"
  },
  {
    name: "Mike",
    age: 40,
    occupation: "CEO"
  }
];

  const activeAlert= ()=>{alert('Alert attivato')}

  const HandleFetch= ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      if(!response.ok){
        throw new Error('Errore durante la richiesta'); //questa sintassi permette la creazione di un apposito errore
      }
      return response.json()})
    .then(data => {setOggetto(data);})
    .catch(error => {console.error(error)})
  }

  /*esempio di utilizzo dell'API Fetch */

  /*fetch('/api/endpoint', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    age: 30
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));*/

  return (
    <>
      <Component numero={56} colore='red'>Riccardo</Component>

      <br></br>

      <br></br>

      <Navbar flag={true}/>

      <br></br>

      <Form/>

     <CountButton/>

      {/* <button className='ButtonMargin' onClick={()=> setCount((count)=> count+1)}>count {count}</button>  */}
      {/*L'utilizzo dello stato permette di aggiornare la variabile count, essendo uno stato l'aggiornamento
      avviene tramite sovrascrittura e non modifica.
      Il metodo useState permette di restutuire la variabile in questione inizializzata con il valore specificato
      come argomento, insieme ad un metodo per sovrascrivere la variabile stessa con una nuova identica ma da valore 
      nuovo specificato.
      Cliccando il bottone si attiva la arrow function specificata, la quale permette di richiamare correttamente 
      il metodo setCount.*/}
      <br></br>
      <button className='ButtonMargin' onClick={()=> {addItems(); console.log(items)}}>aggiorna Items (Controlla nei log)</button> 
      <br></br>

      <button className='ButtonMargin' onClick={()=>{people.map((person)=> console.log(person));
        console.log(' ');
        people.filter((person)=> person.occupation=='Software Engineer').map((person)=> console.log(person));
      }}>
          Succede un macello nei log
        </button>

        <ButtonComp funzione={activeAlert}/>

        <button onClick={HandleFetch}>Clicca qui !</button>
        <br></br>
        <br></br>
        <form>
          <label htmlFor='campo'>valore campo: </label>
          <input
            type="text"
            name="campo"
            value={myObject.campo}
            onChange={(e) => {
              handleCampoChange(e.target.name, e.target.value);
            }}
          />
          <input type="submit" />
          <input type="reset" onClick={HandleResetForm} />
        </form>
    </>
  )
}

export default App

{/* <div>
<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
  <img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank" rel="noreferrer">
  <img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div> */}

{/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}