import { atom, useAtom } from "jotai";
import React, { useState } from "react";
import { rightAnswerAtom, selectedCardAtom } from "../CardSelection";
import { scoreAtom } from "../Footer";
import {
  openNotificationInfo,
  openNotificationSucess,
  openNotificationFail,
} from "../Notification";

// import { Container } from './styles';
const POINTS_FOR_ANSWER = 10;
const AnswerButton: React.FC = () => {
  const [infoNumber, setInfoNumber] = useAtom(infoNumberAtom);
  const [isToStartGame, setIsToStartGame] = useAtom(startGameAtom);
  const [rightAnswer] = useAtom(rightAnswerAtom);
  const [selectedCard, setSelectedCard] = useAtom(selectedCardAtom);
  const [isToRenderNewPlayer, setIsToRenderNewPlayer] =
    useAtom(renderNewPlayerAtom);
  const [gameOver, setGameOver] = useAtom(gameOverAtom);
  const [score, setScore] = useAtom(scoreAtom);
  const handleInfo = (): void => {
    //Call functions bellow only if condition is meet to save state update time
    if (infoNumber <= 4) {
      handleInfoNumber();
      handleTextButton();
    }
  };
  const handleAnswer = (): void => {
    //TODO: Tratar selected card caso nao esteja selecionado
    if (selectedCard === -1) {
      openNotificationInfo("bottomRight", "Escolha uma das opções!");
      return;
    }
    if (rightAnswer === selectedCard) {
      setScore(POINTS_FOR_ANSWER + score);
      openNotificationSucess("topRight", "Respota correcta +10 pontos");
      if (score === 100) {
        setGameOver(true);
      }
    } else {
      openNotificationFail("topRight", "Errou..");
    }
    setIsToRenderNewPlayer(true);
    setSelectedCard(-1);
  };
  const handleInfoNumber = (): void => setInfoNumber(infoNumber + 1);
  const [textButton, setTextButton] = useState("Continuar");
  const handleTextButton = (): void => {
    if (infoNumber > 3) {
      setTextButton(() => "Confirmar");
      setIsToStartGame(true);
      setIsToRenderNewPlayer(true);
    }
    if (infoNumber === 3) {
      setTextButton(() => "Começar");
    }
  };
  const verifyCard = (): boolean => {
    return false;
  };
  const handleStart = () => {
    console.log(gameOver, " Acabou o jogo");
    if (gameOver) {
      setIsToStartGame(true);

      setIsToRenderNewPlayer(true);

      return;
    }
    if (isToStartGame) {
      handleAnswer();
      return;
    } else {
      handleInfo();
    }
  };
  return (
    <div className="flex justify-center my-4">
      <button
        onClick={handleStart}
        className="bg-green-600 hover:bg-blue-600 rounded-md w-20 h-10 text-center text-white"
      >
        {textButton}
      </button>
    </div>
  );
};
const isToStart = atom(false);
export const startGameAtom = atom(
  (get) => get(isToStart),
  (get, set, updateStartGame: boolean) => {
    set(isToStart, updateStartGame);
  }
);

const infoNumber = atom(0);
export const infoNumberAtom = atom(
  (get) => get(infoNumber),
  (get, set, updaInforNumber: number) => {
    set(infoNumber, updaInforNumber);
  }
);
const renderNewPlayer = atom(false);
export const renderNewPlayerAtom = atom(
  (get) => get(renderNewPlayer),
  (get, set, newPlayerUpdate: boolean) => {
    set(renderNewPlayer, newPlayerUpdate);
  }
);
const gameOver = atom(false);
export const gameOverAtom = atom(
  (get) => get(gameOver),
  (get, set, gameOverUpdate: boolean) => {
    set(gameOver, gameOverUpdate);
  }
);
export default AnswerButton;
