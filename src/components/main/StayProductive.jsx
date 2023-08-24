import "./stayProductive.css";
import accessImg from "/images/illustration-stay-productive.png";
import iconArrow from "/icons/icon-arrow.svg";
export default function () {
  return (
    <section className="stay-productive">
      <img src={accessImg} />
      <article>
        <h3>Stay productive, wherever you are</h3>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your life storege needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a href="#">
          See how Fylo works
          <img src={iconArrow} alt="" />
        </a>
      </article>
    </section>
  );
}
