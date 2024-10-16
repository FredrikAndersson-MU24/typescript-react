import { useState } from "react";
import NumberField from "./NumberField";
import Button from "./Button";
const FirstNumber = document.getElementById("firstNumber") as HTMLInputElement;
const SecondNumber = document.getElementById(
  "secondNumber"
) as HTMLInputElement;
const Operation = document.getElementById("operation") as HTMLInputElement;
const Calculator = () => {
  let result: number | string;
  const num1 = Number(FirstNumber);
  const num2 = Number(SecondNumber);
  const [add, setAdd] = useState<number>(0);
  // const [sub, setSub] = useState<number>(0);
  // const [operation, setOperation] = useState<string>("");

  // const isValidNumbers = (value: string) => {
  //   return /^\d+$/.test(value) && value !== "";
  // };

  return (
    <>
      <NumberField type="number" id="firstNumber" />
      <NumberField type="text" id="operation" />
      <NumberField type="number" id="secondNumber" />
      <Button click={setAdd()} name="Calculate"></Button>
      <p>{add}</p>
    </>
  );
};
export default Calculator;
