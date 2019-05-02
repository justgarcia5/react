import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Justin', age: 33 },
      { name: 'Angela', age: 28 },
      { name: 'Alex', age: 34 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons
    persons.splice(personIndex, 1)
    this.setState({
      persons: persons
    })
  }

  nameChangeHandler = (event) => {
    // console.log('was clicked')
    this.setState({
      persons: [
        { name: 'Michael', age: 34},
        { name: event.target.value, age: 28 },
        { name: 'Jesus', age: 34 }
      ],
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render () {
    const style = {
      backgroundColor: 'silver',
      font: 'ingerit',
      border: '2px solid black',
      padding: '8px',
      cursor: 'pointer',
      borderRadius: '7px',
    }

    let persons = true

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
            />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi! I am a React App</h1>
        <p>This is really working!!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello! I am a React App'))
  }
}

export default App;
