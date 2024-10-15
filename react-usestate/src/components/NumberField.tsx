interface InputProps {
  type: string;
  id: string;
}

const NumberField = (props: InputProps) => {
  return <input type={props.type} id={props.id} />;
};

export default NumberField;
