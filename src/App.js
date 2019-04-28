import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Justin', age: 33 },
      { name: 'Angela', age: 28 },
      { name: 'Alex', age: 34 }
    ],
  })

  const [otherState, setOtherState] = useState("some other value")
  console.log(personsState, otherState)

  const nameHandler = (newName) => {
    // console.log('was clicked')
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Jordan', age: 28 },
        { name: 'Jesus', age: 34 }
        { name: 'Jesus', age: 34 }

      ],
    })
    setOtherState("this is a new value!")
  }


  return (
    <div className="App">
      <h1>Hi! I am a React App</h1>
      <p>This is really working!!</p>
      <button onClick={nameHandler.bind(this, "Justin!!!")}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={nameHandler.bind(this, "JJJ")} >Hobbies: Hiking</Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello! I am a React App'))
  }

export default App;
