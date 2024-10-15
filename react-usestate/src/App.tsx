import CounterComp from "./components/CounterComp";
import TextField from "./components/TextField";
import ShowHide from "./components/ShowHide";
import IncrementDecrement from "./components/IncrementDecrement";
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
    </div>
  );
}

export default App;
