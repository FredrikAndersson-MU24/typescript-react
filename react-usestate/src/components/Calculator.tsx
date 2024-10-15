import { useState } from "react";
import NumberField from "./NumberField";
const FirstNumber = document.getElementById("firstNumber") as HTMLInputElement;
const SecondNumber = document.getElementById(
  "secondNumber"
) as HTMLInputElement;
const Operation = document.getElementById("operation") as HTMLSelectElement;
const Calculator = () => {
  const [add, setAdd] = useState<number>(0);

  const Calculate = () => {
    let result: number;
    if (Operation.options == "add") {
      if (F) result = setAdd(FirstNumber + SecondNumber);
      return add;
    } else {
    }
  };

  return (
    <>
      <NumberField type="number" id="firstNumber" />
      <select name="" id="operation">
        <option value="add">Add</option>
        <option value="">Subtract</option>
      </select>
      <NumberField type="number" id="secondNumber" />
      <p>{add}</p>
    </>
  );
};
