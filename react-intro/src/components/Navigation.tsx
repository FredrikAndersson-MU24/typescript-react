const Navigation = (props) => {
  return (
    <nav>
      <li>
        <a href="#">{props.navHome}</a>
      </li>
      <li>
        <a href="#about">{props.navAbout}</a>
      </li>
      <li>
        <a href="#contact">{props.navContact}</a>
      </li>
    </nav>
  );
};

export default Navigation;
