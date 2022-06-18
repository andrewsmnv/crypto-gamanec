import React, { useEffect, useState } from "react";
import classes from "./Main.module.scss";
import { Route, Routes } from "react-router-dom";
import CoinsList from "../../Coins/CoinsList/CoinsList";
import Row from "../Row/Row";
import { useDispatch, useSelector } from "react-redux";
import { adaptChangeValue, adaptPriceValue } from "../../../utils/utils";
import { coinsListActions } from "../../../store/coinsListSlice";

const testCoins = [
  {
    name: "coin",
    rank: 1,
    price: 2121.23,
    change_24: "15%",
    change_7: "12%",
    market_cap: "12212.23",
    volume: "122112",
    id: "1",
  },
  {
    name: "coin",
    rank: 2,
    price: 2121.23,
    change_24: "15%",
    change_7: "12%",
    market_cap: "12212.23",
    volume: "122112",
    id: "2",
  },
  {
    name: "coin",
    rank: 3,
    price: 2121.23,
    change_24: "15%",
    change_7: "12%",
    market_cap: "12212.23",
    volume: "122112",
    id: "3",
  },
];

const CRYPTO_DATA_URL =
  "https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
// const CRYPTO_DATA_URL =
//   "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
const CRYPTO_DATA_KEY = "0266d224-e767-442a-8485-a21993f2e2e3";

const Main = () => {
  const dispatch = useDispatch();
  const coinsList = useSelector((state: any) => state.coinsList.coinsList);
  const userCoinsList = useSelector(
    (state: any) => state.coinsList.userCoinsList
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(CRYPTO_DATA_URL, {
        headers: {
          "X-CMC_PRO_API_KEY": CRYPTO_DATA_KEY,
        },
      });
      const data = await response.json();

      const adaptedCoinsList = data.data.map((item: any, index: number) => {
        return {
          id: item.id,
          name: item.name,
          rank: item.cmc_rank,
          price: adaptPriceValue(item.quote.USD.price),
          initial_change_24: item.quote.USD.percent_change_24h,
          change_24: {
            value: adaptChangeValue(item.quote.USD.percent_change_24h),
            isPositive: item.quote.USD.percent_change_24h > 0 ? true : false,
          },
          initial_change_7: item.quote.USD.percent_change_7d,
          change_7: {
            value: adaptChangeValue(item.quote.USD.percent_change_7d),
            isPositive: item.quote.USD.percent_change_7d > 0 ? true : false,
          },
          market_cap: item.quote.USD.market_cap.toFixed(2),
          volume: item.quote.USD.volume_24h.toFixed(2),
          is_in_favorites: false,
        };
      });

      dispatch(
        coinsListActions.getCoinsList({
          coinsList: adaptedCoinsList,
        })
      );
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className={classes.main}>
      <Row>
        <Routes>
          <Route
            path="/"
            element={
              <CoinsList
                coins={coinsList}
                isUserList={false}
                loadingText="Loading..."
              />
            }
          ></Route>
          <Route
            path="/tracker"
            element={
              <CoinsList
                coins={userCoinsList}
                isUserList={true}
                loadingText="List is empty. Add some to your list"
              />
            }
          ></Route>
        </Routes>
      </Row>
    </div>
  );
};

export default Main;
