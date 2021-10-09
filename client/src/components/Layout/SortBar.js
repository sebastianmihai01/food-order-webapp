import { Fragment } from "react";
import classes from "../../css/SortBar.module.css";

const SortBar = () => {
  return (
    <h3>
      <nav>
        <ul>
          <a className={classes.names}>
              <a className = {classes.namesa}>
                Popularity
              </a>
              <a className = {classes.namesa}>
                  Price
              </a>
              <a className = {classes.namesa}>
                  Recent
              </a>
              
          </a>
            <div className={classes.selectcat}>
              <select name="Popularity" id="Popularity">
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
              </select>
              <select name="Price" id="Price">
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
              </select>
              <select name="Recent" id="Recent">
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
              </select>
            </div>
        </ul>
      </nav>
    </h3>
  );
};

export default SortBar;
