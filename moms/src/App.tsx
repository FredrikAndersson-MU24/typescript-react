import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [input, setInput] = useState<string>("");
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setTotal(Number(input) * 1.25);
  });

  return (
    <>
      <input type="number" onChange={(event) => setInput(event.target.value)} />
      <p>{total}</p>
    </>
  );
}

export default App;
