import "./style.css";

const Card = (props) => {
  return (
    <div className="card" id="about">
      <section>
        <figure>
          <img
            src="https://static.simpsonswiki.com/images/b/bd/Homer_Simpson.png"
            alt=""
          />
          <figcaption>{props.myName}</figcaption>
        </figure>
        <p>
          {props.cardName} {props.myName}
        </p>
        <p>{props.cardOccupationCur}</p>
        <p>{props.cardOccupationFor}</p>
      </section>
    </div>
  );
};

export default Card;
