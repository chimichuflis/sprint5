import "./earlyAccess.css";
export default function () {
  return (
    <section className="early-access">
      <form>
        <h3>Get early access today</h3>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div>
          <input type="email" placeholder="email@example.com" />
          <input type="submit" value="Get Started For Free" />
        </div>
      </form>
    </section>
  );
}
