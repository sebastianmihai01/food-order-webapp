import { Fragment } from "react";
import "../../css/NavigationBar.module.css";
import Header from "./Header";
import HeaderButton from "./HeaderButton";

const NavigationBar = () => {

  return (
    <Fragment>
      <nav>
        <ul>
          <a>
            <HeaderButton name={"Home"}/>
          </a>
          <a>
            <HeaderButton name={"Browse"} />
          </a>
          <a>
            <HeaderButton name={"Contact"} />
          </a>
          <a>
            <HeaderButton name={"Login"} />
          </a>
        </ul>
      </nav>
    </Fragment>
  );
};

export default NavigationBar;
