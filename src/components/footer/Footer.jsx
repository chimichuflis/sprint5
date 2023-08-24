import InfoCard from "./InfoCard";
import LinkList from "./LinkList";
import Socials from "./Socials";
import "./footer.css";
import logo from "/icons/logo.svg";
function Footer() {
  return (
    <footer>
      <img className="logo" src={logo} />
      <div className="footer-info">
        <InfoCard />
        <LinkList />
        <Socials />
      </div>
    </footer>
  );
}
export default Footer;
