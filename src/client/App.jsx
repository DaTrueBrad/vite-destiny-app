import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [destiny, setDestiny] = useState("Your Destiny will appear here.");

  const clickHandler = () => {
    axios.get('/api/getDestiny')
    .then((res) => {
      console.log(res)
      setDestiny(res.data)
    })
    .catch((err) => {
      console.error(err)
      setDestiny("Your destiny could not be read...")
    })
  }

  return (
    <div className="App">
      <h1>
        Click the button,{" "}
        <span className="colored-text">Receive your Destiny.</span>
      </h1>
      <h2 className="colored-text">{destiny}</h2>
      <button onClick={clickHandler}>Click me</button>
    </div>
  );
}

export default App;
