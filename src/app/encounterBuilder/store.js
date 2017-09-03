export const NAME = "encounters";

/* Action types */
export const CREATE = "party/create";
export const DELETE = "party/delete";
export const UPDATE = "party/update";

/* Action creator */
export function createEncounter(encounter) {
  return { type: CREATE, encounter };
}

export function deleteEncounter(id) {
  return { type: DELETE, id };
}

export function updateEncounter(id, encounter) {
  return { type: UPDATE, id, encounter };
}

/* Reducer */

const initialState = {
  encounters: [],
};

function create(encounters, action) {
  return [...encounters, action.encounter];
}

function remove(encounters, action) {
  return encounters.filter(x => x.id !== action.id);
}

function update(encounters, action) {
  return encounters.map(x => {
    if (x.id === action.id) {
      return action.encounter;
    } else {
      return x;
    }
  });
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      return { encounters: create(state.encounters, action) };

    case DELETE:
      return { encounters: remove(state.encounters, action) };

    case UPDATE:
      return { encounters: update(state.encounters, action) };

    default:
      return state;
  }
}
