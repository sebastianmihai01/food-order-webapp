import "../../css/NavigationBar.module.css";
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const HeaderButton: React.FC<{ name: string; onRemove: () => void }> = (
  props
) => {
  const clickHandler = (event: React.FormEvent) => {
    fetch("http://localhost:8080/post/2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //   body: JSON.stringify({
      //     text: "text",
      //   }),
    })
      .then((res) => {
        alert(res);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Fragment>
      <li>
      <NavLink to={props.name}> {props.name} </NavLink>
      </li>
    </Fragment>
  );
};
export default HeaderButton;
