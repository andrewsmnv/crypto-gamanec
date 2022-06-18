import { createSlice, isFulfilled } from "@reduxjs/toolkit";

type coinsListState = {
  coinsList: {}[];
  userCoinsList: {}[];
  isSortedByRank: boolean;
  isSortedByName: boolean;
  isSortedByPrice: boolean;
  isSortedBy24hChange: boolean;
  isSortedBy7dChange: boolean;
  isSortedByMarketCap: boolean;
  isSortedByVolume: boolean;
};
const coinsListInitialState: coinsListState = {
  coinsList: [],
  userCoinsList: [],
  isSortedByRank: true,
  isSortedByName: false,
  isSortedByPrice: false,
  isSortedBy24hChange: false,
  isSortedBy7dChange: false,
  isSortedByMarketCap: false,
  isSortedByVolume: false,
};
const coinsListSlice = createSlice({
  name: "coinsList",
  initialState: coinsListInitialState,
  reducers: {
    getCoinsList(state, action) {
      state.coinsList = action.payload.coinsList;
    },

    addItemToUserList(state, action) {
      const existingItem = state.userCoinsList.find(
        (item: any) => item.id === action.payload.item.id
      );

      if (!existingItem) {
        const updatedItem = {
          ...action.payload.item,
          is_in_favorites: true,
        };
        state.userCoinsList.push(updatedItem);
        state.userCoinsList.sort((a: any, b: any) => a.rank - b.rank);
      }
    },

    removeItemFromUserList(state, action) {
      state.userCoinsList = state.userCoinsList.filter(
        (item: any) => item.id !== action.payload.id
      );
    },

    sortByRank(state, action) {
      if (state.isSortedByRank) {
        if (action.payload.isUserList) {
          state.userCoinsList.sort((a: any, b: any) => b.rank - a.rank);
        } else {
          state.coinsList.sort((a: any, b: any) => b.rank - a.rank);
        }
        state.isSortedByRank = !state.isSortedByRank;
      } else {
        if (action.payload.isUserList) {
          state.userCoinsList.sort((a: any, b: any) => a.rank - b.rank);
        } else {
          state.coinsList.sort((a: any, b: any) => a.rank - b.rank);
        }
        state.isSortedByRank = !state.isSortedByRank;
      }
    },

    sortByPrice(state, action) {
      if (state.isSortedByPrice) {
        if (action.payload.isUserList) {
          state.userCoinsList.sort((a: any, b: any) => b.price - a.price);
        } else {
          state.coinsList.sort((a: any, b: any) => b.price - a.price);
        }
        state.isSortedByPrice = !state.isSortedByPrice;
      } else {
        if (action.payload.isUserList) {
          state.userCoinsList.sort((a: any, b: any) => a.price - b.price);
        } else {
          state.coinsList.sort((a: any, b: any) => a.price - b.price);
        }
        state.isSortedByPrice = !state.isSortedByPrice;
      }
    },

    sortByMarketCap(state, action) {
      if (state.isSortedByMarketCap) {
        if (action.payload.isUserList) {
          state.userCoinsList.sort(
            (a: any, b: any) => b.market_cap - a.market_cap
          );
        } else {
          state.coinsList.sort((a: any, b: any) => b.market_cap - a.market_cap);
        }
        state.isSortedByMarketCap = !state.isSortedByMarketCap;
      } else {
        if (action.payload.isUserList) {
          state.userCoinsList.sort(
            (a: any, b: any) => a.market_cap - b.market_cap
          );
        } else {
          state.coinsList.sort((a: any, b: any) => a.market_cap - b.market_cap);
        }
        state.isSortedByMarketCap = !state.isSortedByMarketCap;
      }
    },

    sortByVolume(state, action) {
      if (state.isSortedByVolume) {
        if (action.payload.isUserList) {
          state.userCoinsList.sort((a: any, b: any) => b.volume - a.volume);
        } else {
          state.coinsList.sort((a: any, b: any) => b.volume - a.volume);
        }
        state.isSortedByVolume = !state.isSortedByVolume;
      } else {
        if (action.payload.isUserList) {
          state.userCoinsList.sort((a: any, b: any) => a.volume - b.volume);
        } else {
          state.coinsList.sort((a: any, b: any) => a.volume - b.volume);
        }
        state.isSortedByVolume = !state.isSortedByVolume;
      }
    },

    sortBy24hChange(state, action) {
      if (state.isSortedBy24hChange) {
        if (action.payload.isUserList) {
          state.userCoinsList.sort(
            (a: any, b: any): any => b.initial_change_24 - a.initial_change_24
          );
        } else {
          state.coinsList.sort(
            (a: any, b: any): any => b.initial_change_24 - a.initial_change_24
          );
        }
        state.isSortedBy24hChange = !state.isSortedBy24hChange;
      } else {
        if (action.payload.isUserList) {
          state.userCoinsList.sort(
            (a: any, b: any): any => a.initial_change_24 - b.initial_change_24
          );
        } else {
          state.coinsList.sort(
            (a: any, b: any): any => a.initial_change_24 - b.initial_change_24
          );
        }
        state.isSortedBy24hChange = !state.isSortedBy24hChange;
      }
    },

    sortBy7dChange(state, action) {
      if (state.isSortedBy7dChange) {
        if (action.payload.isUserList) {
          state.userCoinsList.sort(
            (a: any, b: any): any =>
              b.initial_change_7 - a.initial_change_7.toFixed(0)
          );
        } else {
          state.coinsList.sort(
            (a: any, b: any): any => b.initial_change_7 - a.initial_change_7
          );
        }
        state.isSortedBy7dChange = !state.isSortedBy7dChange;
      } else {
        if (action.payload.isUserList) {
          state.userCoinsList.sort(
            (a: any, b: any): any => a.initial_change_7 - b.initial_change_7
          );
        } else {
          state.coinsList.sort(
            (a: any, b: any): any => a.initial_change_7 - b.initial_change_7
          );
        }
        state.isSortedBy7dChange = !state.isSortedBy7dChange;
      }
    },

    sortByName(state, action) {
      if (state.isSortedByName) {
        if (action.payload.isUserList) {
          state.userCoinsList.sort((a: any, b: any): any => {
            if (a.name.toUpperCase() < b.name.toUpperCase()) {
              return -1;
            }
            if (b.name.toUpperCase() < a.name.toUpperCase()) {
              return 1;
            }
            return 0;
          });
        } else {
          state.coinsList.sort((a: any, b: any): any => {
            if (a.name.toUpperCase() < b.name.toUpperCase()) {
              return -1;
            }
            if (b.name.toUpperCase() < a.name.toUpperCase()) {
              return 1;
            }
            return 0;
          });
        }
        state.isSortedByName = !state.isSortedByName;
      } else {
        if (action.payload.isUserList) {
          state.userCoinsList.sort((a: any, b: any): any => {
            if (a.name.toUpperCase() > b.name.toUpperCase()) {
              return -1;
            }
            if (b.name.toUpperCase() > a.name.toUpperCase()) {
              return 1;
            }
            return 0;
          });
        } else {
          state.coinsList.sort((a: any, b: any): any => {
            if (a.name.toUpperCase() > b.name.toUpperCase()) {
              return -1;
            }
            if (b.name.toUpperCase() > a.name.toUpperCase()) {
              return 1;
            }
            return 0;
          });
        }
        state.isSortedByName = !state.isSortedByName;
      }
    },
  },
});

export const coinsListActions = coinsListSlice.actions;

export default coinsListSlice.reducer;
