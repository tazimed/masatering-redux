import * as type from "./typeActions";

export function buycake(nombre) {
  return {
    type: type.BUY_CAKE,
    payload: nombre,
  };
}
