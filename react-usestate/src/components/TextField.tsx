import { useState } from "react";

const TextField = () => {
  const [text, setText] = useState<string>("");

  return (
    <>
      <input type="text" onChange={(event) => setText(event.target.value)} />
      <p>{text}</p>
    </>
  );
};

export default TextField;
