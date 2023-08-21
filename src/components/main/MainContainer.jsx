import Feature from "./Feature";
import feature1 from "../../../public/icons/icon-access-anywhere.svg";
import feature2 from "../../../public/icons/icon-security.svg";
import feature3 from "../../../public/icons/icon-collaboration.svg";
import feature4 from "../../../public/icons/icon-any-file.svg";
import Article from "./Article";

import "./mainContainer.css";
function MainContainer() {
  return (
    <main>
      <section>
        <Feature
          txt="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
          title="Access your files, anywhere"
          img={feature1}
        />
        <Feature
          txt="2-factor authentication and user-controlled encryption are just a couple of the secuurity features we allow to help secure your files."
          title="Security you can trust"
          img={feature2}
        />
        <Feature
          txt="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
          title="Real-time collaboration"
          img={feature3}
        />
        <Feature
          txt="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
          title="Store any type of file"
          img={feature4}
        />
      </section>
      <section>
        <Article />
      </section>
    </main>
  );
}
export default MainContainer;
