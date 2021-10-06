import "./App.css";
import Description from "../src/components/Items/Description";
import Display from "../src/components/UI/Display.js";
import Cart from "./components/Cart/Cart";
import CartProvider from "../src/store/CartProvider";
import Header from "./components/Layout/Header";
import { Fragment, useState } from "react";
import Items from "../src/components/Items/Items";
import FetchAPI from "./requests/FetchAPI";
import Tasks from "./requests/FetchedItems";
import AvailableMeals from "./components/Items/AvailableMeals";

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

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Description />
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <AvailableMeals></AvailableMeals>
      </main>
    </CartProvider>
  );
}

export default App;
