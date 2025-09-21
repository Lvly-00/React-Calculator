import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Button from "./components/Button";
import ButtonPanel from "./components/ButtonPanel";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Display />
        <ButtonPanel />
      </div>
    </>
  );
}

export default App;
