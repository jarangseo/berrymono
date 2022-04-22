import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import str from "@berrymono/commons";

function App() {
  const [count, setCount] = useState(0);

  return <div className="App">{str}</div>;
}

export default App;
