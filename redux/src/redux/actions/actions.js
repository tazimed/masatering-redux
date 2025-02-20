import * as type from "./typeActions";

export function ajouterNote(information) {
  return {
    type: type.AJOUTER_NOTE,
    payload: information,
  };
}
