import { Fragment } from "react";
import '../../css/NavigationBar.module.css'

const NavigationBar = () => {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Browse</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">LogIn</a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default NavigationBar;
