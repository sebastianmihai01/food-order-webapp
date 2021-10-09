import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  //const price = `$${props.price.toFixed(2)}`;
  const price = props.price;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  var itemsArray = [];
  // var propsValues = []
  // itemsArray = Object.values(props.list)
  // for (const item in itemsArray){
  //   console.log(itemsArray[item])
  //   for (const item2 in itemsArray[item])
  //   propsValues.push(itemsArray[item][item2])
  // }
  console.log(props);

  return (
    <li className={classes.meal}>
      <div>
        <h1> {props.name} </h1>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
