import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [array, setArray] = useState<Array<number>>([0, 1]);
  const two: number = array[array.length - 2];
  const one: number = array[array.length - 1];
  const [newNumber, setNewNumber] = useState<number>(array[array.length - 1]);

  useEffect(() => {
    setArray((a) => [...a, newNumber]);
  }, [newNumber]);

  useEffect(() => {
    window.localStorage.setItem("number", array.toString());
  }, [array]);

  return (
    <>
      <button onClick={() => setNewNumber(one + two)}>klicka</button>
      <p>{array[array.length - 1]}</p>
    </>
  );
}

export default App;

const calculateFibonacci = (n: number): number => {
  if (n <= 1) return n;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
};
