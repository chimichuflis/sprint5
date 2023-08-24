import { useState } from "react";
import "./earlyAccess.css";
export default function () {
  const [emailOk, setEmailOk] = useState(true);
  function checkValidEmail(e) {
    setEmailOk(!e.target.validity.typeMismatch);
  }
  /*
  formNoValidate: false
  validity
  required
  */
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
          <div className="email-container">
            <input
              required
              type="email"
              placeholder="email@example.com"
              onInput={checkValidEmail}
            />
            {!emailOk && <p className="invalid-email">invalid email</p>}
          </div>

          <input type="submit" value="Get Started For Free" />
        </div>
      </form>
    </section>
  );
}
