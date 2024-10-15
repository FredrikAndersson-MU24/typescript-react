import { useState } from "react";
import Button from "./Button";

const initialValue: number = 0;

const IncrementDecrement = () => {
  const [count, setCount] = useState<number>(initialValue);

  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "fit-content",
        border: "1px solid white",
      }}
    >
      <Button name="Increment" click={Increment} />
      <p>Current value: {count}</p>
      <Button name="Decrement" click={Decrement} />
    </div>
  );
};

export default IncrementDecrement;
