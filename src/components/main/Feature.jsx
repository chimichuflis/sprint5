import "./feature.css";
function Feature(props) {
  return (
    <article className="feature">
      <img src={props.img} />
      <h3>{props.title}</h3>
      <p>{props.txt}</p>
    </article>
  );
}
export default Feature;
