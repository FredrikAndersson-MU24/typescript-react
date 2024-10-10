const array: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 200, 500, 600];

const Button = document.querySelector(".button");

Button?.addEventListener("click", () => {
  console.log(sumArray(array));
});

const sumArray = (items: Array<number>) => {
  let sum: number = 0;
  for (let i = 0; i < items.length; i++) {
    sum += items[i];
  }
  return sum;
};
