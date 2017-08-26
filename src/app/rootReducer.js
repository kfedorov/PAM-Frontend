import { combineReducers } from "redux";

// Module reducers
import monsters from "./monsters";
import spells from "./spells";

export default combineReducers({
  [monsters.constants.NAME]: monsters.reducer,
  [spells.constants.NAME]: spells.reducer,
});
