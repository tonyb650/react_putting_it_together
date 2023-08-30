import { useState } from 'react'
import './App.css'
import PersonCard from './components/PersonCard.jsx'

function App() {
  return (
    <>
    <div className='person-card-list'>
      <PersonCard 
        firstName = {"Jane"}
        lastName = {"Doe"}
        age = {45}
        hairColor = {"Black"}
      />
      <PersonCard 
        firstName = {"John"}
        lastName = {"Smith"}
        age = {88}
        hairColor = {"Brown"}
      />
      <PersonCard 
        firstName = {"Millard"}
        lastName = {"Fillmore"}
        age = {50}
        hairColor = {"Brown"}
      />
      <PersonCard 
        firstName = {"Maria"}
        lastName = {"Smith"}
        age = {62}
        hairColor = {"Brown"}        
      />
    </div>
    <button onClick={ () => alert("This button has been clicked!")}>
      Click Me For an Alert!
    </button>
    </>
  );
}

export default App
