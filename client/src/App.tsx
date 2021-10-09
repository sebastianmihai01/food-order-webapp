import ReactDOM from "react-dom";
import "./App.css";
import "./index.css";
import Home from "../src/components/Router/Home";
import Browse from "../src/components/Router/Browse";
import Contact from "../src/components/Router/Contact";
import Login from "../src/components/Router/Login";
import SortBar from "./components/Layout/SortBar";
import { Route, Switch, Redirect } from "react-router-dom";
import "../src/css/NavigationBar.module.css";
import "./App.css";
import Description from "../src/components/Items/Description";
import Display from "../src/components/UI/Display.js";
import Cart from "./components/Cart/Cart";
import CartProvider from "../src/store/CartProvider";
import Header from "./components/Layout/Header";
import React, { Fragment, useState } from "react";
import Items from "../src/components/Items/Items";
import FetchAPI from "./requests/FetchAPI";
import Tasks from "./requests/FetchedItems";
import AvailableMeals from "./components/Items/AvailableMeals";
import NavigationBar from "./components/Layout/NavigationBar";

const menuList = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
];

const App: React.FC = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      <NavigationBar />

      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler}></Header>
      </CartProvider>

      <Switch>
        <Route path="/Browse">
          <Browse />
          <SortBar />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="*">
          <Home />
          <main>
            <Description />
            <AvailableMeals></AvailableMeals>
          </main>
        </Route>
      </Switch>
    </>
  );
};

export default App;
