import "./App.css";
import { useState } from "react";
import MyName from "./components/MyName";

function App() {
  // let counter: number = 0;
  const [counter, setCounter] = useState<number>(0); // Här använder vi array destructuring för att plocka ut variabeln och funktionen. Inom parenteserna anges startvärdet. '' för string, []för array osv.

  return (
    <div>
      <h1>Räknare </h1>
      <button
        onClick={() => {
          setCounter(counter + 1), console.log(counter);
        }}
      >
        count is {counter}
      </button>
      <MyName />
    </div>
  );
}

export default App;
