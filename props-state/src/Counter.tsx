import { useState } from "react";
interface CounterProps {
  startValue: number;
  addValue: number;
  subValue: number;
}
const Counter = ({ startValue, addValue, subValue }: CounterProps) => {
  const [count, setCount] = useState<number>(startValue);
  const increment = () => {
    setCount((c) => c + addValue);
  };
  const decrement = () => {
    setCount((c) => c - subValue);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>Öka</button>
      <button onClick={decrement}>Minska</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Counter;
