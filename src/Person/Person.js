import React from 'react'
import './Person.css'
// import Radium from 'radium'

const person = props => {
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px'
  //   }
  // }
  return (
    <div className='Person'>
      <p>I am {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>
      <button onClick={props.click}>Delete</button>
      <br/>
      <input type='text' onChange={props.change}  value={props.name} />
    </div>
  )
}

export default person
