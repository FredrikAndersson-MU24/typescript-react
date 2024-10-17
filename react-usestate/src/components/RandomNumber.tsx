import { useState } from "react";
import Button from "./Button";

const RandomNumber = () => {
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const handleRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 10));
  };
  return (
    <>
      <Button click={handleRandomNumber} name="Generate random number" />
      <p>{randomNumber}</p>
    </>
  );
};

export default RandomNumber;
