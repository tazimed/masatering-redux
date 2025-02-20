import * as type from "./typeactions";

export const buyicecream = (nombre) => {
  return {
    type: type.BUY_ICECREAM,
    payload: nombre,
  };
};
