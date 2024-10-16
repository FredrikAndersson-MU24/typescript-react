import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [input, setInput] = useState<string>("");
  const [percentage, setPercentage] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setTotal((Number(input) * (Number(percentage) + 100)) / 100);
  }, [percentage]);

  return (
    <>
      <input
        type="number"
        onChange={(event) => setInput(event.target.value)}
        placeholder="Nettopris"
      />
      <input
        type="number"
        onChange={(event) => setPercentage(Number(event.target.value))}
        placeholder="Moms i %"
      />
      <p>Bruttopris: {total} kr</p>
    </>
  );
}

export default App;
