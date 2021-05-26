import { all } from "redux-saga/effects";
import { persistCombineReducers } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as message from "./ducks/message.duck";
import * as budget from "./ducks/budget.duck";
import * as date from "./ducks/date.duck";

const config = {
  key: "root",
  storage: AsyncStorage,
};

/**
 * Instead of persisting each reducer, we persist everything because its react native (app)
 */
export const rootReducer = persistCombineReducers(config, {
  budget: budget.reducer,
  message: message.reducer,
  date: date.reducer,
});

// Do a redux saga if available
export function* rootSaga() {
  yield all([]);
}
