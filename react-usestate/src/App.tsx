import CounterComp from "./components/CounterComp";
import TextField from "./components/TextField";
import ShowHide from "./components/ShowHide";
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
    </div>
  );
}

export default App;
