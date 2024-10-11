import "./style.css";

const buttonAdd = document.getElementById("add");
const buttonClear = document.querySelector(".clear");
const inputName = document.getElementById("name") as HTMLInputElement;
const inputColor = document.getElementById("color") as HTMLInputElement;
const inputWeight = document.getElementById("weight") as HTMLInputElement;
const list = document.getElementById("list") as HTMLUListElement;

interface Fruits {
  name: string;
  color: string;
  weight: number;
}

let fruits: Fruits[] = [];
const addListElement = (name: string, color: string, weight: number) => {
  const li = document.createElement("li");
  const span1 = document.createElement("p");
  const span2 = document.createElement("p");
  const span3 = document.createElement("p");
  li.setAttribute("class", "listItem");
  li.append(span1, " ", span2, " ", span3);
  span1.innerText = name;
  span2.innerText = color;
  span3.innerText = weight.toString();
  list.prepend(li);
};

for (let i = 0; i < fruits.length; i++) {
  addListElement(fruits[i].name, fruits[i].color, fruits[i].weight);
}

buttonAdd?.addEventListener("click", () => {
  const addName = inputName.value;
  const addColor = inputColor.value;
  const addWeight = Number(inputWeight.value);

  fruits.push({
    name: addName,
    color: addColor,
    weight: addWeight,
  });
  addListElement(addName, addColor, addWeight);
  console.log(fruits);
});

buttonClear?.addEventListener("click", () => {
  fruits = [];
  list.innerHTML = "";
  console.log(fruits);
});
