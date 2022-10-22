import { ConstantTypes } from './../utils/constant';
import { Action, Player, PlayersState } from "utils/constant";

export const initialState: PlayersState = {
    playerList: []
}

export const reducer = (state: PlayersState, action: Action) => {
  const { type, payload } = action;
  // if(state.playerList.length <= 0) return state;
  switch (type) {
    case ConstantTypes.ASC:
      return {
        ...state,
        playerList: state?.playerList?.sort((a: Player, b: Player) => compareFnForAsc(a, b))
      }
    case ConstantTypes.DESC:
      return {
        ...state,
        playerList: state?.playerList?.sort((a: Player, b: Player) => compareFnForDesc(a,b))
      };
    case ConstantTypes.Default:
      return {
        ...state,
        playerList: payload?.playerList
      };
    default:
      return state;
  }
}

const compareFnForAsc = (a: Player, b: Player) => {
  if (a.first_name.toUpperCase() < b.first_name.toUpperCase()) {
    return -1;
  }
  if (a.first_name.toUpperCase() > b.first_name.toUpperCase()) {
    return 1;
  }
  return 0;
}


const compareFnForDesc = (a: Player, b: Player) => {
  if (a.first_name.toUpperCase() > b.first_name.toUpperCase()) {
    return -1;
  }
  if (a.first_name.toUpperCase() < b.first_name.toUpperCase()) {
    return 1;
  }
  return 0;
}