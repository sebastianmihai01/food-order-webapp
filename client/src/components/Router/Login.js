import { Fragment } from "react";
import classes from "../../css/Login.module.css";

const Login = () => {
  return (
    <Fragment>
      <title>Sign in</title>

      <h1 className={classes.h1}>
      <div className={classes.main}>
        <p className={classes.sign} align="center">
          Sign in
        </p>
        <form className={classes.form}>
          <input
            className={classes.un}
            type="text"
            align="center"
            placeholder="Username"
          />
          <input
            className={classes.pass}
            type="password"
            align="center"
            placeholder="Password"
          />
          <a className={classes.submit} align="center">
            Sign in
          </a>
          <p className={classes.forgot} align="center">
            <a href="#" />
            Forgot Password?
          </p>
        </form>
      </div>
      </h1>
    </Fragment>
  );
};

export default Login;
