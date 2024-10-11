const Button = document.querySelector(".button");
const firstNumber = document.querySelector("#first-number") as HTMLInputElement;
const secondNumber = document.querySelector(
  "#second-number"
) as HTMLInputElement;
const operationSelect = document.querySelector(
  ".operation"
) as HTMLSelectElement;
const Result = document.querySelector(".result") as HTMLElement;

interface Calc {
  (a: number, b: number): number | string;
}
const add: Calc = (a, b) => a + b;
const sub: Calc = (a, b) => a - b;
const multi: Calc = (a, b) => a * b;
const div: Calc = (a, b) => {
  if (b === 0) {
    return "You can not divide by 0";
  } else {
    return a / b;
  }
};

const isValidNumbers = (value: string) => {
  return /^\d+$/.test(value) && value !== "";
};

Button?.addEventListener("click", () => {
  let result: number | string;
  const operation = operationSelect.value;
  const firstValue = firstNumber.value;
  const secondValue = secondNumber.value;
  const first = Number(firstValue);
  const second = Number(secondValue);
  console.log(typeof first);
  if (!isValidNumbers(firstValue) || !isValidNumbers(secondValue)) {
    Result.innerText = "Enter valid numbers!";
    return;
  }
  switch (operation) {
    case "add":
      result = add(first, second);
      break;
    case "sub":
      result = sub(first, second);
      break;
    case "div":
      result = div(first, second);
      break;
    case "multi":
      result = multi(first, second);
      break;
    default:
      result = "Invalid operation";
  }
  Result.innerText = result.toString();
});
