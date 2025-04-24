import React from 'react'

const Greeting = () => {

const name='Arman';
const date=new Date().toLocaleDateString();

  return (
    <div>
        <h1>Element that dynamically displays greetings message</h1>
        <h1>Hello--{name}</h1>
        <p>element that dynamically displays current date</p>
        <p>{date}</p>
    </div>
  )
}

export default Greeting