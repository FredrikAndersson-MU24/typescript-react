import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [array, setArray] = useState<Array<number>>([]);

  useEffect(() => {
    const JSONfromLS = window.localStorage.getItem("number");
    if (JSONfromLS) {
      if (JSONfromLS != null) {
        const tempArray: Array<number> = JSON.parse(JSONfromLS);
        if (tempArray.length > 0 && array.length === 0) {
          setArray(tempArray);
        }
      }
    } else {
      setArray([0, 1]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("number", JSON.stringify(array));
  }, [array]);

  return (
    <>
      <button
        onClick={() =>
          setArray((a) => [...a, a[a.length - 1] + a[a.length - 2]])
        }
      >
        Clicks: {array.length - 2}
      </button>
      <p>
        {array[array.length - 3]} + {array[array.length - 2]} ={" "}
        {array[array.length - 1]}
      </p>
      <button
        onClick={() => {
          setArray([0, 1]);
          window.localStorage.clear();
        }}
      >
        CLEAR
      </button>
    </>
  );
}

export default App;
