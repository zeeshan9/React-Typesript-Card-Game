export const ApiEndpoint = {
    getPlayerData: "https://mocki.io/v1/4d6aae16-ce4c-4957-abaa-724f51a560eb"
}

export type Action = {
    type: string;
    payload: any;
}
  
export interface PlayersState {
    playerList: Player[];
}

export interface Player {
    first_name: string;
    player_name: string;
    asset: string;
}

export enum ConstantTypes {
    PLAYERLIST = "PLAYER-LIST",
    ASC = "ASCENDING",
    DESC = "DESCENDING",
    Default = "DEFAULT",
};