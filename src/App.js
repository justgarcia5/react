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
    otherState: 'some other value'
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

  render () {
    const style = {
      backgroundColor: 'silver',
      font: 'ingerit',
      border: '2px solid black',
      padding: '8px',
      cursor: 'pointer'
    }
    if(this.state.showPersons) {
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
    );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello! I am a React App'))
  }
}

export default App;
