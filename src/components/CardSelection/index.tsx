import React, { useEffect, useCallback } from "react";
import Card from "../Card";
import { atom } from "jotai";
import { useQuery } from "react-query";
import { Database } from "../../api/database";
// import { Container } from './styles';
export const selectedCard = atom("card1");
export interface PlayerInterface {
  name: string;
  imageURL: string;
  playerID: number;
}
function getRandomNumber(maxValue: number, minValue: number): number {
  const randomNumber = Math.random() * (maxValue - minValue) + minValue;
  return Math.round(randomNumber);
}

function parsedDataPlayersAPI(data: any): {
  name: string;
  imageURL: string;
  playerID: number;
} {
  const MAX_PAGES_IN_API = 14;
  const MAX_PLAYERS_IN_API = 19;
  const randomPageNumber = getRandomNumber(MAX_PAGES_IN_API, 0);
  const randomPlayerNumber = getRandomNumber(MAX_PLAYERS_IN_API, 0);

  if (!data) {
    return { name: "", imageURL: "", playerID: 1 };
  }

  const playerList = [...data[randomPageNumber]];

  const {
    name: name,
    photo: imageURL,
    id: playerID,
  } = playerList[randomPlayerNumber].player;

  return { name, imageURL, playerID };
}
function getTwoSetsOfPlayers(data: any): PlayerInterface[] {
  let [futebolPlayer1, futebolPlayer2] = [
    parsedDataPlayersAPI(data),
    parsedDataPlayersAPI(data),
  ];
  //The while function gives an error for some reason, this is just in case
  if (futebolPlayer1.playerID === futebolPlayer2.playerID) {
    futebolPlayer2 = parsedDataPlayersAPI(data);
  }
  /*  while (futebolPlayer1.playerID === futebolPlayer2.playerID) {
    futebolPlayer2 = parsedDataPlayersAPI(data);
  } */

  return [futebolPlayer1, futebolPlayer2];
}
const CardSelection: React.FC = () => {
  const { data, isLoading, isError } = useQuery("playersSet", () => Database);
  if (isLoading) {
    return <>Loading</>;
  }
  let players = getTwoSetsOfPlayers(data);

  return (
    <main className="flex justify-around flex-wrap">
      <div>
        <Card radioName={"card1"} playersData={players[0]} />
      </div>
      <div>
        <Card radioName={"card2"} playersData={players[1]} />
      </div>
    </main>
  );
};

export default CardSelection;
