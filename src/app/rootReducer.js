import { combineReducers } from "redux";

// Module reducers
import monsters from "./monsters";
import spells from "./spells";
import master from "./master";

export default combineReducers({
  [monsters.constants.NAME]: monsters.reducer,
  [spells.constants.NAME]: spells.reducer,
  [master.constants.NAME]: master.reducer,
});
