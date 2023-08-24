import { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
import "./testimonialSection.css";
export default function () {
  const [testimonialList, setTestimonialList] = useState([]);
  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        setTestimonialList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="testimonial-container">
      {testimonialList.map((n, i) => {
        return (
          <Testimonial
            key={i}
            name={n.name}
            title={n.title}
            quote={n.quote}
            image={n.image}
          />
        );
      })}
    </section>
  );
}
