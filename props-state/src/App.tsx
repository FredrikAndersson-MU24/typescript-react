// Props och State:
// Skapa en komponent som tar emot props och använder state för att hantera en enkel räknare.
// Tips: Hur typar du props och state i TypeScript?

import Counter from "./Counter";

import "./App.css";

function App() {
  return (
    <>
      <Counter startValue={0} addValue={10} subValue={15} />
    </>
  );
}

export default App;
