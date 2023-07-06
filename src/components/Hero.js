import "./Hero.css";
function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="Heroimg" src={require("./2.png")} />

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <p>{props.text1}</p>
          {/* <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a> */}
        </div>
      </div>
    </>
  );
}
export default Hero;
