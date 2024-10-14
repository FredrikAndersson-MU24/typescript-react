import { useEffect, useState } from "react";
const list = document.querySelector("list") as HTMLUListElement;

const MyName = () => {
  const [name, setName] = useState<Array<string>>([""]);
  const [add, setAdd] = useState<string>("");

  const clickadd = () => {
    setName((name) => [...name, add]);
    name.map((list) => {
      <li>{list}</li>;
    });
  };
  useEffect(() => {});
  return (
    <section>
      <button onClick={clickadd}>add</button>
      <input
        type="search"
        placeholder="Enter name"
        onChange={(event) => {
          if (typeof add === "string") {
            setAdd(event.target.value);
          }
        }}
      />
      <ul id="list"></ul>
    </section>
  );
};

export default MyName;
