import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Component from './Component'
import Form from './Form'

function App() {
  const [count, setCount] = useState(0);
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

  return (
    <>
      <Component numero={56} colore='red'>Riccardo</Component>

      <br></br>

      <br></br>

      <Navbar flag={true}/>

      <br></br>

      <Form/>

      <button className='ButtonMargin' onClick={()=> setCount((count)=> count+1)}>count {count}</button> 
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