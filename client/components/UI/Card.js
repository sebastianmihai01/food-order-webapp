import classes from "../../css/Card.module.css";
const Card = (props) => {
  // let itemList = [];
  // props.list.map((meal) =>
  //   itemList.push({
  //     key: meal.id,
  //     id: meal.id,
  //     name: meal.name,
  //     description: meal.description,
  //     price: meal.price,
  //   })
  // );

  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
