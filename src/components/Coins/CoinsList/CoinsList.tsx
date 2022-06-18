import React from "react";
import CoinsListNavigation from "../CoinsListNavigation/CoinsListNavigation";
import CoinItem from "../CoinItem/CoinItem";
import classes from "./CoinsList.module.scss";

const CoinsList = (props: any) => {
  const listIsEmpty = !props.coins.length;

  return (
    <div className={classes["coins-list"]}>
      <CoinsListNavigation isUserList={props.isUserList} />
      {listIsEmpty && (
        <p className={classes["coins-list__empty-text"]}>{props.loadingText}</p>
      )}
      {props.coins.map((item: any) => {
        return <CoinItem key={item.id} coin={item} />;
      })}
    </div>
  );
};

export default CoinsList;
