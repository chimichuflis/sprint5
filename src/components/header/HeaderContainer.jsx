import "./headerContainer.css";
import headerImg from "/images/illustration-intro.png";
function HeaderContainer() {
  return (
    <header>
      <div className="img-wrapper">
        <img src={headerImg} alt="intro illustration" />
        <h1>All your files in one secure location, accessible anywhere.</h1>
      </div>

      <p>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <button>Get Started</button>
    </header>
  );
}
export default HeaderContainer;
