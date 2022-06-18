export const adaptChangeValue = (value: any) => {
  if (value.toString()[0] === "-") {
    return value.toFixed(2).toString().substring(1);
  } else {
    return value.toFixed(2);
  }
};

export const adaptPriceValue = (price: any) => {
  if (price > 1) {
    return price.toFixed(2);
  } else if (price < 0.0000009) {
    return price.toFixed(10);
  } else if (price < 0.000009) {
    return price.toFixed(9);
  } else if (price < 0.00009) {
    return price.toFixed(8);
  } else if (price < 0.0009) {
    return price.toFixed(7);
  } else if (price < 0.009) {
    return price.toFixed(6);
  } else if (price < 0.09) {
    return price.toFixed(5);
  } else if (price < 1) {
    return price.toFixed(4);
  }
};
