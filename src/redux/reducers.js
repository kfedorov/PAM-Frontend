import { combineReducers } from "redux";
const defaultMonsters = require("../data/monsters.json");

const ADD_MONSTERS = "ADD_MONSTERS";

export function addMonster(monster) {
  return {
    type: ADD_MONSTERS,
    monster,
  };
}

function monstersReducer(state = defaultMonsters, action) {
  switch (action.type) {
    case ADD_MONSTERS:
      return [...state, action.monster];

    default:
      return state;
  }
}

const pamApp = combineReducers({
  monsters: monstersReducer,
});

export default pamApp;
