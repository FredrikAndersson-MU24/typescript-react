interface ButtonProps {
  click: any;
  name: string;
}

const Button = (props: ButtonProps) => {
  return (
    <>
      <button onClick={props.click}>{props.name}</button>
    </>
  );
};
export default Button;
