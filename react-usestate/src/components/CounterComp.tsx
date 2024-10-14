import { useState } from "react";
import Button from "./Button";

const CounterComp = () => {
  const [count, setCount] = useState<number>(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Button click={handleCount} name="Counter" />
      <p>{count}</p>
    </>
  );
};

export default CounterComp;
