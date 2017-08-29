export const NAME = "party";

/* Action type */
export const CREATE = "party/create";

/* Action creator */
export function createParty(party) {
  return { type: CREATE, party };
}

/* Reducer */

const initialState = {
  groups: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      return {
        groups: [
          ...state.groups,
          {
            id: action.party.id,
            name: action.party.name,
            players: action.party.players,
          },
        ],
      };

    default:
      return state;
  }
}
