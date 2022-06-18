import React from "react";
import classes from "./UserNavigation.module.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";
import { uiSliceActions } from "../../store/uiSlice";

const UserNavigation = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(
    (state: { auth: { isLogged: boolean } }) => state.auth.isLogged
  );

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  const loginHandler = () => {
    dispatch(authActions.login());
  };

  const switchModeHandler = () => {
    dispatch(uiSliceActions.switchMode());
  };

  return (
    <div className={classes["user-navigation"]}>
      {!isLogged && (
        <Link
          onClick={loginHandler}
          className={classes["user-navigation__link"]}
          to="/"
        >
          Login
        </Link>
      )}
      {isLogged && (
        <Link className={classes["user-navigation__link"]} to="/tracker">
          Tracker
        </Link>
      )}
      {isLogged && <button onClick={logoutHandler}>Logout</button>}
      <button onClick={switchModeHandler}>change mode</button>
    </div>
  );
};

export default UserNavigation;
