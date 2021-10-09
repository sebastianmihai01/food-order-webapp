/*
Sending HTTP requests without using a custom hook
(see FetchAPI.js for the custom hook method)
*/

import { useEffect, useState, useRef, useCallback } from "react";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import classes from "../../css/AvailableMeals.module.css";
import { type } from "os";
import { listenerCount } from "process";

const AvailableMeals = () => {
  const [meals, setMeals] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  var prevItems = usePrevious(meals);
 
   useEffect(async () => {
    await fetch("http://localhost:8080/items", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      //   //add something
      // }),
    })
      .then((res) => {
        if (res.status != 200) {
          alert("Error when fetching all items");
          //throw new Error("Error when fetching all items");
        }
        setIsLoading(true);
        return res.json();
      })
      .then((itemList) => {
        //alert(itemList);

        var loadedMeals = [];

        for (const key in itemList) {
          loadedMeals.push({
            id: key,
            name: itemList[key].name,
            description: itemList[key].height,
            price: itemList[key].mass,
          });
        }
        console.log("meals " + meals + ", prevItems", prevItems);
        if (
          prevItems === undefined ||
          JSON.stringify(meals) !== JSON.stringify(prevItems)
        ) {
          setMeals(loadedMeals);
        }
        setIsLoading(false);
        //alert("Sucessfully fetched meals");
      });
  }, [meals, setMeals]);

  useEffect(() => {
    if (isLoading) {
      return (
        <section className={classes.MealsLoading}>
          <p>Loading...</p>
        </section>
      );
    }
  }, [isLoading]);


  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  }

  var mealList = [];
  if (meals !== undefined) {
    mealList = Object.keys(meals).map((key) => [key, meals[key]]);
  }

  var itemsArray = [];
  var propsValues = [];
  itemsArray = Object.values(mealList);
  for (const item in itemsArray) {
    for (const item2 in itemsArray[item])
      propsValues.push(itemsArray[item][item2]);
  }
  propsValues = propsValues.filter((el) => typeof el === 'object')

  return (
    <section className={classes.meals}>
      <ul>
        <Card>
          {propsValues && propsValues.map(el => 
            <MealItem name = {el.name} description = {el.description} price = {el.price}/>)}
        </Card>
      </ul>
    </section>
  );
};

export default AvailableMeals;
