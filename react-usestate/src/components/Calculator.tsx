import { useEffect, useState } from "react";
import Button from "./Button";

const Calculator = () => {
  const [result, setResult] = useState<number | string>("Ready to compute...");
  const [op, setOp] = useState<string>("");
  const [firstValue, setFirstValue] = useState<string>("");
  const [secondValue, setSecondValue] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOp(event.target.value);
  };
  const isValidNumbers = (value: string) => {
    return /^\d+$/.test(value) && value !== "";
  };
  const Calculate = () => {
    const first: number = Number(firstValue);
    const second: number = Number(secondValue);
    if (!isValidNumbers(firstValue) || !isValidNumbers(secondValue)) {
      setResult("Enter valid numbers!");
      return;
    }
    switch (op) {
      case "empty":
        setResult("Choose a valid operation");
        console.log(result);
        break;
      case "add":
        setResult("Result: " + (first + second));
        console.log(result);
        break;
      case "sub":
        setResult("Result: " + (first - second));
        console.log(result);
        break;
      default:
        "Enter valid numbers!";
        break;
    }
  };

  useEffect(() => {}, [result]);
  return (
    <>
      <div style={{ display: "flex", height: "1.6rem", alignItems: "center" }}>
        <p style={{ marginTop: "0", marginBottom: "0", paddingRight: "1rem" }}>
          Operation:
        </p>
        <select name="operation" id="operation" onChange={handleChange}>
          <option value="empty"></option>
          <option value="add">ADD</option>
          <option value="sub">SUB</option>
        </select>
      </div>

      <input
        type="number"
        onChange={(event) => setFirstValue(event.target.value)}
      />
      <input
        type="number"
        onChange={(event) => setSecondValue(event.target.value)}
      />
      <Button click={() => Calculate()} name="Compute" />
      <p>{result.toString()}</p>
    </>
  );
};

export default Calculator;
