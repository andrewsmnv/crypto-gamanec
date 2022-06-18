import { useDispatch, useSelector } from "react-redux";
import classes from "./CoinsListNavigation.module.scss";
import { coinsListActions } from "../../../store/coinsListSlice";

const CoinsListNavigation = (props: any) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: any) => state.ui.isDarkMode);
  const isUserList = props.isUserList;

  let coinListNavigationClasses: any;
  if (isDarkMode) {
    coinListNavigationClasses = "coin-list-navigation_dark";
  }

  const handlerSortByRank = () => {
    dispatch(coinsListActions.sortByRank({ isUserList }));
  };

  const handlerSortByPrice = () => {
    dispatch(coinsListActions.sortByPrice({ isUserList }));
  };

  const handlerSortBy24hChange = () => {
    dispatch(coinsListActions.sortBy24hChange({ isUserList }));
  };

  const handlerSortBy7dChange = () => {
    dispatch(coinsListActions.sortBy7dChange({ isUserList }));
  };

  const handlerSortByName = () => {
    dispatch(coinsListActions.sortByName({ isUserList }));
  };

  const handlerSortByMarketCap = () => {
    dispatch(coinsListActions.sortByMarketCap({ isUserList }));
  };

  const handlerSortByVolume = () => {
    dispatch(coinsListActions.sortByVolume({ isUserList }));
  };

  return (
    <div
      className={`${classes["coins-list-navigation"]} ${classes[coinListNavigationClasses]}`}
    >
      <div className={classes["coins-list-navigation__inner-wrapper"]}>
        <button
          className={classes["coins-list-navigation__button"]}
          type="button"
          onClick={handlerSortByRank}
        >
          #
        </button>
        <button
          className={classes["coins-list-navigation__button"]}
          type="button"
          onClick={handlerSortByName}
        >
          Name
        </button>
        <button
          className={classes["coins-list-navigation__button"]}
          type="button"
          onClick={handlerSortByPrice}
        >
          Price
        </button>
        <button
          className={classes["coins-list-navigation__button"]}
          type="button"
          onClick={handlerSortBy24hChange}
        >
          24h %
        </button>
        <button
          className={classes["coins-list-navigation__button"]}
          type="button"
          onClick={handlerSortBy7dChange}
        >
          7d %
        </button>
        <button
          className={classes["coins-list-navigation__button"]}
          type="button"
          onClick={handlerSortByMarketCap}
        >
          Market Cap
        </button>
        <button
          className={classes["coins-list-navigation__button"]}
          type="button"
          onClick={handlerSortByVolume}
        >
          Value
        </button>
      </div>
    </div>
  );
};

export default CoinsListNavigation;
