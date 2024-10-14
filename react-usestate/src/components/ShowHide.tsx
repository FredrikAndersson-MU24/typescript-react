import { useState } from "react";
import Button from "./Button";
import "../App.css";
const ShowHide = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const [text, setText] = useState<string>("");
  const [buttonName, setButtonName] = useState<string>("Hide text");
  const Toggle = () => {
    if (toggle) {
      setToggle(false);
      setButtonName("Hide text");
      setText(
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid adipisci reprehenderit ex nisi repellat quisquam aut labore quasi, non sequi ullam provident porro consectetur ea totam fuga nostrum asperiores? "
      );
    } else {
      setToggle(true);
      setButtonName("Show text");
      setText("");
    }
  };

  return (
    <>
      <Button name={buttonName} click={Toggle} />
      <p id="text" className={class}>
        {text}
      </p>
    </>
  );
};

export default ShowHide;
