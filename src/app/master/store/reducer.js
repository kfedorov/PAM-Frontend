import * as t from "./actionTypes";

const initialState = {
  parties: [],
  encounters: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.CREATE_PARTY:
      return {
        ...state,
        parties: [
          ...state.parties,
          { name: action.name, players: action.players },
        ],
      };

    case t.CREATE_ENCOUNTER:
      return {
        ...state,
        encounters: [
          ...state.encounters,
          { name: action.name, monsters: action.monsters },
        ],
      };

    default:
      return state;
  }
};
