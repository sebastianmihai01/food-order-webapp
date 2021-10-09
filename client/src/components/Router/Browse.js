import { Fragment } from "react";
import classes from "../../css/BrowseItems.module.css";
import MealItem from "../Items/MealItem/MealItem";
import BrowseCard from "../UI/BrowseCard";
import SortBar from "../Layout/SortBar";

const Browse = () => {
  const items = [
    { id: "" },
    { id: "" },
    { id: "" },
    { id: "" },
    { id: "" },
    { id: "" },
    { id: "" },
    { id: "" },
    { id: "" },
    { id: "" },
    { id: "" },
    { id: "" },
  ];
  return (
    <>
    <SortBar/>
    <section className={classes.meals}>
        <BrowseCard>
          {items &&
            items.map((el) => <MealItem name="a" description="b" price="c" />)}
        </BrowseCard>
    </section>
    </>
  );
};

export default Browse;
