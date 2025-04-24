import React from 'react'

const Greeting2 = ({timeOfDay}) => {

    // let greetingMessage=timeOfDay==="morning";
  return (
    <div>
        {timeOfDay==="morning"? <h1>Good Morning</h1>:<h1>Good Afternoon</h1>}
    </div>
  )
}

export default Greeting2;