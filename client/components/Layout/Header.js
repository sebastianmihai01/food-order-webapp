import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import NavigationBar from "./NavigationBar";
import mealsImage from "../../components/assets/meals.jpg";
import mealsImage2 from "../../components/assets/meals2.jpg";
import mealsImage3 from "../../components/assets/meals3.jpg";
import mealsImage4 from "../../components/assets/meals4.jpg";

import classes from "../../css/Header.module.css";
import { isClassExpression } from "typescript";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <p>ReactEats</p>
        <NavigationBar />
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes.image}>
        <div>
          <img src={mealsImage} alt="A table full of delicious food!" />
        </div>
        <div>
          <img src={mealsImage2} alt="A table full of delicious food!" />
        </div>
        <div>
          <img src={mealsImage3} alt="A table full of delicious food!" />
        </div>
        <div>
          <img src={mealsImage4} alt="A table full of delicious food!" />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
