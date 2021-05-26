import React from "react";
import * as _ from "lodash";
import dayjs from "dayjs";

export const actionTypes = {
  CHANGE_DATE: "[CHANGE DATE]",
};

const initialDateState = {
  selectedDate: dayjs().format("YYYY-MM-DD"),
};

export const reducer = (state = initialDateState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DATE: {
      return {
        ...state,
        selectedDate: action.payload,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  changeDate: (payload) => ({
    type: actionTypes.CHANGE_DATE,
    payload,
  }),
};
