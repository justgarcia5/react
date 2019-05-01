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

  nameSwitchHandler = () => {
    // console.log('was clicked')
    this.setState({
      persons: [
        { name: 'Michael', age: 34},
        { name: 'Angela', age: 28 },
        { name: 'Jesus', age: 34 }
      ],
      otherState: 'this is a new value'
    })
    console.log(this.state.otherState)

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
      cursor: 'pointer'
    }


    let persons = true

    if(this.state.showPersons) {
      persons =
      <div >
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          // click={nameHandler}
          change={this.nameChangeHandler} >Hobbies: Hiking
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
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
