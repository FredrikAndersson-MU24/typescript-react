import "./style.css";

const Header = (props) => {
  return (
    <header>
      <h1>{props.headerTitle}</h1>
      <small>{props.headerSmall}</small>
    </header>
  );
};

export default Header;
