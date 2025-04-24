import React from 'react'
import { useReducer } from 'react'

const initialState={count:0};

function reducer(state,action)
{

    switch (action.type)
    {

        case "increment":
            return {...state, count:state.count+1};
        case "decrement":
            return {...state, count:state.count-1};
        case "reset":
            return {...state,count:0};

        default:
            return state;
    }
}

const IntroUseR = () => {

    const [state, dispatch]= useReducer(reducer,initialState);

  return (
    <div>
        
        <h1>Count: {state.count}</h1>

        <button onClick={()=>{dispatch("increment")}}>Increment</button>
        <button onClick={()=>{dispatch("decrement")}}>Decrement</button>
        <button onClick={()=>{dispatch("reset")}}>Reset</button>
    </div>
  )
}

export default IntroUseR