import React from "react";

const Display = () => {
  return (
    <React.Fragment>
      <img
        className="Menu"
        src="menu.png"
        width="40"
        height="40"
        alt="menu"
        onClick=""
      />
      <nav className="navbar">
        <div className="card">
          <ul className="primary-nav">
            <li>
              <a href="#" className="main">
                YOOOOOOOOO
              </a>
            </li>
            <li>
              <a href="#"> Browse </a>
            </li>
            <li>
              <a href="#"> Profile </a>
            </li>
            <li>
              <a href="#"> Logout </a>
            </li>
          </ul>
          <ul className="secondary-nav">
            <li>
              <a href="#"> Main </a>
            </li>
            <li>
              <a href="#"> Browse </a>
            </li>
            <li>
              <a href="#"> Profile </a>
            </li>
            <li>
              <a href="#"> Logout </a>
            </li>
          </ul>
        </div>
      </nav>
      <section>
        <div className="container">
          <div className="left-col">
            <p className="left-col-text"> Click here to order</p>
            <h1> Almost as good as UberEats! </h1>
            <a href="#" className="l-b1">
              {" "}
              Button1 left side{" "}
            </a>
            <a href="#" className="l-b2">
              {" "}
              <img
                className="Menu"
                src="menu.png"
                width="40"
                height="80"
                alt="menu"
                onClick=""
              />
              Click here to browse the items
            </a>
          </div>
          
        </div>
      </section>
    </React.Fragment>
  );
};

export default Display;
