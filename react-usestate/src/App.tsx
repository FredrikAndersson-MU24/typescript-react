import CounterComp from "./components/CounterComp";
import TextField from "./components/TextField";
import ShowHide from "./components/ShowHide";
import RandomNumber from "./components/RandomNumber";
import IncrementDecrement from "./components/IncrementDecrement";
import Calculator from "./components/Calculator";
import "./App.css";

function App() {
  return (
    <div id="wrapper">
      <CounterComp />
      <hr />
      <TextField />
      <hr />
      <ShowHide />
      <hr />
      <IncrementDecrement />
      <hr />
      <RandomNumber />
      <hr />
      <Calculator />
    </div>
  );
}

export default App;
