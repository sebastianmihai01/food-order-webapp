import { createRequire } from "module";
import classes from "../../css/Description.module.css";
import logoGmail from "../assets/gmail.png";
import logoGithub from "../assets/github.png";
import logoLinkedin from "../assets/linkedin.png";

const Contact = () => {
  return (
    <section className={classes.contact}>
      <h1> Thank you for viewing my project :) </h1>
      <p>
        <a> Take a look at my other projects</a>
        <p>
        <a href="google.com"></a>
        <img src={logoGithub} height="40px" width="40px" alt="My github!" />
        </p>
      </p>
      <p>
        <a> Contact me </a>
        <a href="google.com">
          <p>
          <img src={logoGmail} height="25px" width="40px" alt="My github!" />
          <a> or </a>
          <img src={logoLinkedin} height="40px" width="40px" alt="My linedkin!" />
          </p>
        </a>
      </p>
    </section>
  );
};

export default Contact;
