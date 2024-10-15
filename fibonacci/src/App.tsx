import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [array, setArray] = useState<Array<number>>([0, 1]);

  useEffect(() => {
    window.localStorage.setItem("number", array.toString());
  }, [array]);

  return (
    <>
      <button
        onClick={() =>
          setArray((a) => [
            ...a,
            array[array.length - 1] + array[array.length - 2],
          ])
        }
      >
        Clicks: {array.length - 2}
      </button>
      <p>
        {array[array.length - 3]} + {array[array.length - 2]} ={" "}
        {array[array.length - 1]}
      </p>
    </>
  );
}

export default App;
