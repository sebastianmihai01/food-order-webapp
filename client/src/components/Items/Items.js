import { Fragment } from "react";
import Description from "./Description";
import '../../App.css'
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
        <Description></Description>
        <AvailableMeals></AvailableMeals>
    </Fragment>
  );
};

export default Meals;
