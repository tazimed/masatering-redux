import * as type from "./typeActions";

export const buycake = (number) => {
  return {
    type: type.BUY_CAKE,
    payload: number,
  };
};
