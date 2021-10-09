import classes from "../../css/Card.module.css";
const BrowseCard = (props) => {
  return <div className={classes.browseCard}>{props.children}</div>;
};

export default BrowseCard;
