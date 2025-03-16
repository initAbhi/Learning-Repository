import { useContext, useEffect, useReducer, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeContext } from "../store/store";
import Button from "./compnents/Button";


function App() {
  const inputRef = useRef();



  const reducer = (state, action) => {
    if (action == "increment") {
      console.log(state);
      return ++state;
    }
    // if(action.type == "decrement") state--
  };
  const [count, dispatch] = useReducer(reducer, 0);

  const Theme = useContext(ThemeContext);
  console.log(Theme);


  return (
    <>
      {/* <form action="POST">
        <input ref={inputRef} onChange={(e) => {}} type="text" />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(inputRef.current.value);
          }}
        >
          log
        </button>
      </form> */}
      <Button>
       <h1>Hello</h1>
      </Button>
      <h1>{count}</h1>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>increment</button>
    </>
  );
}

export default App;
