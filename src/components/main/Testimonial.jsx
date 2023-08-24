import "./testimonial.css";
export default function (prop) {
  return (
    <article className="testimonial">
      <p>{prop.quote}</p>
      <div className="testimonial-user">
        <img src={prop.image} />
        <div>
          <h4>{prop.name}</h4>
          <h5>{prop.title}</h5>
        </div>
      </div>
    </article>
  );
}
