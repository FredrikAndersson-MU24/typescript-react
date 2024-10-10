import { useState } from "react";
import Button from "./Button";
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const decrement = () => {
    setCount((c) => c - 1);
  };

  return (
    <div>
      <h1>Räknare</h1>
      <p>Antal: {count}</p>
      <Button click={increment} text="Öka" />
      <Button click={decrement} text="Minska" />
    </div>
  );
};

export default Counter;
