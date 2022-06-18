import React from "react";
import classes from "./CoinItem.module.scss";
import { useDispatch } from "react-redux";
import { notificationActions } from "../../../store/notificationSlice";
import { coinsListActions } from "../../../store/coinsListSlice";

const CoinItem = (props: any) => {
  let coin = props.coin;
  const isFavorite = coin.is_in_favorites;
  const dispatch = useDispatch();

  const onAddToFavorites = () => {
    dispatch(coinsListActions.addItemToUserList({ item: coin }));
    dispatch(
      notificationActions.showNotification({
        status: "success",
        message: "Coin added to your watchlist!",
      })
    );

    setTimeout(() => {
      dispatch(notificationActions.hideNotification());
    }, 1500);
  };

  const onRemoveFromFavorites = () => {
    dispatch(coinsListActions.removeItemFromUserList({ id: coin.id }));
    dispatch(
      notificationActions.showNotification({
        status: "removed",
        message: "Coin removed from your watchlist.",
      })
    );

    setTimeout(() => {
      dispatch(notificationActions.hideNotification());
    }, 1500);
  };

  const priceChangeHandler = (value: boolean): any => {
    if (value) {
      return "coin-item__price_green";
    } else {
      return "coin-item__price_red";
    }
  };

  return (
    <div className={classes["coin-item"]}>
      {!isFavorite && (
        <button
          className={classes["coin-item__favorite-button"]}
          onClick={onAddToFavorites}
        ></button>
      )}
      {isFavorite && (
        <button
          className={classes["coin-item__delete-button"]}
          onClick={onRemoveFromFavorites}
        ></button>
      )}
      <p>{coin.rank}</p>
      <p>
        <img
          className={classes["coin-item__logo"]}
          src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
          alt=""
          loading="lazy"
        />
        {coin.name}
      </p>
      <p>${coin.price}</p>
      <p
        className={`${classes["coin-item__price"]} ${
          classes[priceChangeHandler(coin.change_24.isPositive)]
        }`}
      >
        {coin.change_24.value}%
      </p>
      <p
        className={`${classes["coin-item__price"]} ${
          classes[priceChangeHandler(coin.change_7.isPositive)]
        }`}
      >
        {coin.change_7.value}%
      </p>
      <p>{coin.market_cap}</p>
      <p>{coin.volume}</p>
    </div>
  );
};

export default CoinItem;
