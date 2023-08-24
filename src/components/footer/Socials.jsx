import fbIcon from "/icons/fb.png";
import igIcon from "/icons/ig.png";
import xIcon from "/icons/x.png";
import "./socials.css";
export default function () {
  return (
    <ul className="social-icons">
      <li>
        <img src={fbIcon} alt="" />
      </li>

      <li>
        <img src={xIcon} alt="" />
      </li>
      <li>
        <img src={igIcon} alt="" />
      </li>
    </ul>
  );
}
