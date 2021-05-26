import React from "react";
import * as _ from "lodash";

export const actionTypes = {
  showMessage: "[SHOW MESSAGE]",
  hideMessage: "[HIDE MESSAGE]",
};

const initialMessageState = {
  open: false,
  message: "",
};

export const reducer = (state = initialMessageState, action) => {
  switch (action.type) {
    case actionTypes.showMessage: {
      return {
        ...state,
        open: true,
        message: action.payload.message,
      };
    }
    case actionTypes.hideMessage: {
      return {
        ...state,
        open: false,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  showMessage: (payload) => ({
    type: actionTypes.showMessage,
    payload,
  }),
  hideMessage: () => ({
    type: actionTypes.hideMessage,
  }),
};
