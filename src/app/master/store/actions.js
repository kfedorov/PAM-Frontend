import * as t from "./actionTypes";

export function createParty(name, players) {
  return {
    type: t.CREATE_PARTY,
    name,
    players,
  };
}

export function createEncounter(name, monsters) {
  return {
    type: t.CREATE_ENCOUNTER,
    name,
    monsters,
  };
}
