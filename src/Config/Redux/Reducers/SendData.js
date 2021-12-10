import * as actions from "../Actions/actionTypes";

const INITIAL_STATE = {
  count: 0,
};

const setTheData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.sendData:
      return { ...action };
    case actions.deleteData:
      return {};

    default:
      return state;
  }
};
export default setTheData;
