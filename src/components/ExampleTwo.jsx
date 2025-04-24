import React, { useState } from 'react'

const ExampleTwo = () => {

    const [randomNumber, setRandomNumber]=useState(
        Math.floor(Math.random()*100)
    );


    function generateRandom()
    {
        const newRandomNumber=Math.floor(Math.random()*100);

        setRandomNumber(newRandomNumber);
    }

  return (
    <div>
        <h1>Random Number: {randomNumber}</h1>

        <button onClick={generateRandom}>Generate Random Number</button>
    </div>
  )
}

export default ExampleTwo