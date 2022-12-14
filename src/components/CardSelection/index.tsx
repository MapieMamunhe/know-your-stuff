import React, { memo, useEffect, useMemo, useState } from "react";
import Card from "../Card";
import { atom, useAtom } from "jotai";
import { useQuery } from "react-query";
import { Database } from "../../api/database";
import { renderNewPlayerAtom, startGameAtom } from "../Button";
import { scoreAtom } from "../Footer";
// import { Container } from './styles';
const selectCard = atom<number>(-1);
export const selectedCardAtom = atom(
  (get) => get(selectCard),
  (get, set, update: number) => {
    set(selectCard, update);
  }
);
const rightAnswer = atom(1);
export const rightAnswerAtom = atom(
  (get) => get(rightAnswer),
  (get, set, newAnswer: number) => {
    set(rightAnswer, newAnswer);
  }
);
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

  if (typeof data === "undefined") {
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
  const [isToRenderNewPlayer, setIsToRenderNewPlayer] =
    useAtom(renderNewPlayerAtom);
  const [startGame] = useAtom(startGameAtom);
  const [correctPlayerID, setCorrectPlayerID] = useAtom(rightAnswerAtom);
  const [players, setPlayers] = useState(getTwoSetsOfPlayers(data));

  let jsxToRender: JSX.Element = <>Loading</>;
  useEffect(() => {
    //Dont bother run code bellow if its not to start the game
    if (!startGame) return;
    if (!isToRenderNewPlayer) return;
    let newPlayers = getTwoSetsOfPlayers(data);
    setCorrectPlayerID(newPlayers[1].playerID);
    newPlayers =
      getRandomNumber(1, 0) === 1
        ? [
            newPlayers[1],
            {
              name: newPlayers[1].name,
              imageURL: newPlayers[0].imageURL,
              playerID: newPlayers[0].playerID,
            },
          ]
        : [
            {
              name: newPlayers[1].name,
              imageURL: newPlayers[0].imageURL,
              playerID: newPlayers[0].playerID,
            },
            newPlayers[1],
          ];
    setPlayers(() => newPlayers);
    setIsToRenderNewPlayer(false);
  }, [startGame, isToRenderNewPlayer]);
  if (!isLoading) {
    jsxToRender = (
      <main className="flex justify-around flex-wrap">
        <div className="flex flex-wrap">
          <Card radioName={"card1"} playersData={players[0]} />
        </div>
        <div className="flex flex-wrap">
          <Card radioName={"card2"} playersData={players[1]} />
        </div>
      </main>
    );
  }
  return jsxToRender;
};

export default CardSelection;
