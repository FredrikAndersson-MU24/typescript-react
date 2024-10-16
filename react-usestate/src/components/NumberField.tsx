interface InputProps {
  type: string;
  id: string;
  onchange: any;
}

const NumberField = (props: InputProps) => {
  return <input type={props.type} id={props.id} onChange={props.onchange} />;
};

export default NumberField;
