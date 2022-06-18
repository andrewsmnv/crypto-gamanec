import React from "react";
import classes from "./Header.module.scss";
import Row from "../Row/Row";
import UserNavigation from "../../UserNavigation/UserNavigation";
import { Link } from "react-router-dom";
import Notification from "../../Notification/Notification";
import { useSelector } from "react-redux";

const Header = () => {
  const notification = useSelector(
    (state: any) => state.notification.notification
  );
  const isDarkMode = useSelector((state: any) => state.ui.isDarkMode);

  let headerClasses: any;
  if (isDarkMode) {
    headerClasses = "header_dark";
  }

  return (
    <header className={`${classes.header} ${classes[headerClasses]}`}>
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
        />
      )}
      <Row>
        <div className={classes["header__wrapper"]}>
          <Link to="/" className={classes["header__logo"]}>
            crypto tracker
          </Link>
          <UserNavigation />
        </div>
      </Row>
    </header>
  );
};

export default Header;
