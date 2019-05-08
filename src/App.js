import React, { Component } from 'react';
import './App.css';
import Radium from 'radium'

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Justin', age: 33 },
      { id: 2, name: 'Angela', age: 28 },
      { id: 3, name: 'Alex', age: 34 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({
      persons: persons
    })
  }

  nameChangeHandler = (event, id) => {
    // console.log('was clicked')
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render () {
    const style = {
      backgroundColor: 'green',
      font: 'ingerit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer',
      borderRadius: '2px',
      fontSize: '19px',
      color: 'white',
      ':hover' : {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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
            key={person.id}
            change={(event) => this.nameChangeHandler(event, person.id)}
            />
          })}
        </div>
      )
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }
    console.log(classes)

    return (
      <div className="App">
        <h1>Hi! I am a React App</h1>
        <p className={classes.join(' ')}>This is really working!!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Show persons</button>
        {persons}
      </div>
    );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello! I am a React App'))
  }
}

export default Radium(App);
