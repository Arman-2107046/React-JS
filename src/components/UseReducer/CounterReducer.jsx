import React, { useReducer, useState } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };

    case "increase-amount":
      return { ...state, count: state.count + action.amount};
    case "decrease-amount":
      return { ...state, count: state.count + action.amount};

    default:
      return state;
  }
}

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [amount, setAmount] = useState();

  return (
    <div>
      <h1>Count: {state.count}</h1>

      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>

      <h1>Update Using Direct Value</h1>
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value===""? 0 :Number(e.target.value));

        }}
      />

      <button onClick={()=>{
        dispatch({type:"increase-amount",amount:amount});
        setTimeout(setAmount(""), 700);
      }}>Increase</button>
      
      
      <button onClick={()=>{
        dispatch({type:"decrease-amount",amount:amount});
        setTimeout(setAmount(""), 700);
      }}>Decrease</button>
    </div>
  );
};

export default CounterReducer;

// import React, { useState } from "react";
// import { useReducer } from "react";

// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { ...state, count: state.count + 1 };
//     case "decrement":
//       return { ...state, count: state.count - 1 };
//     case "reset":
//       return { ...state, count: 0 };
//     case "increase-amount":
//       return { ...state, count: state.count + Number(action.amount) };
//     case "decrease-amount":
//       return { ...state, count: state.count - Number(action.amount) };
//     default:
//       return state;
//   }
// }

// const CounterReducer = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const [amount, setAmount] = useState();

//   return (
//     <div>
//       <h1>Count: {state.count}</h1>

//       <button
//         onClick={() => {
//           dispatch({ type: "increment" });
//         }}
//       >
//         Increment
//       </button>
//       <button
//         onClick={() => {
//           dispatch({ type: "decrement" });
//         }}
//       >
//         Decrement
//       </button>
//       <button
//         onClick={() => {
//           dispatch({ type: "reset" });
//         }}
//       >
//         Reset
//       </button>

//       <h1>Update Using Specific Value</h1>
//       <input
//         type="number"
//         placeholder="Enter Amount"
//         value={amount}
//         onChange={(e) => {
//           setAmount(e.target.value === "" ? 0 : Number(e.target.value));
//         }}
//       />

//       <button
//         onClick={() => {
//           dispatch({ type: "increase-amount", amount: amount });
//           setTimeout(() => {
//             setAmount("");
//           }, 1000);
//         }}
//       >
//         Plus
//       </button>
//       <button
//         onClick={() => {
//           dispatch({ type: "decrease-amount", amount: amount });
//           setAmount("");
//         }}
//       >
//         Minus
//       </button>
//     </div>
//   );
// };

// export default CounterReducer;
