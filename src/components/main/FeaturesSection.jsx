import { useState, useEffect } from "react";
import "./featureSection.css";
import Feature from "./Feature";

export default function () {
  const [featureList, setFeatureList] = useState([]);
  useEffect(() => {
    fetch("/features.json")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        setFeatureList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="feature-list">
      {featureList.map((n, i) => {
        return (
          <Feature key={i} txt={n.description} img={n.image} title={n.title} />
        );
      })}
    </section>
  );
}
