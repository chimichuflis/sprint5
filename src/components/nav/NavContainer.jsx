import "./navContainer.css";
import logo from "/icons/logo.svg";
function NavContainer() {
  return (
    <nav>
      <img src={logo} alt="Logo" />
      <ul>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">Sign In</a>
        </li>
      </ul>
    </nav>
  );
}
export default NavContainer;
