import * as actions from "./actionTypes";

export const SEND_DATA = (obj) => ({
  type: actions.sendData,
  obj
});

export const DELETE_DATA = () => ({
  type: actions.deleteData,
});
