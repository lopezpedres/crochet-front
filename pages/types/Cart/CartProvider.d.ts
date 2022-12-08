import type { TypeCartLinesAdd } from "../Products/TypeCartLinesAdd";
import type {
  addItem,
  removeItem,
  setItem,
} from "../../../store/cart/actions/types";
enum ActionTypes {
  addItem = "ADD_ITEM",
  removeItem = "REMOVE_ITEM",
  setItem = "SET_ITEM",
  quantityItem = "QUANTITY_ITEM"
}
export type State = TypeCartLinesAdd;
//Aqui me falta definir el type de los payloads
export type Action = {
  type: ActionTypes;
  payload?: any;
};

export enum PayloadTypes {
  addPayload,
  removePayload,
  setPayload,
}

export default ActionTypes;
