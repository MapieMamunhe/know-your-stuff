import { atom, useAtom } from "jotai";
import React, { useState } from "react";
import { rightAnswerAtom, selectedCardAtom } from "../CardSelection";

// import { Container } from './styles';

const Button: React.FC = () => {
  const [infoNumber, setInfoNumber] = useAtom(infoNumberAtom);
  const [startGame, setStartGame] = useAtom(startGameAtom);
  const [rightAnswer] = useAtom(rightAnswerAtom);
  const [selectedCard] = useAtom(selectedCardAtom);
  const handleInfo = (): void => {
    //Call functions bellow only if condition is meet to save state update time
    if (infoNumber <= 4) {
      handleInfoNumber();
      handleTextButton();
    }
  };
  const handleAnswer = (): boolean => {
    console.log("HandleAnswer", rightAnswer, selectedCard);
    if (rightAnswer === selectedCard) {
      console.log("Acertou");
    }
    return false;
  };
  const handleInfoNumber = (): void => setInfoNumber(infoNumber + 1);
  const [textButton, setTextButton] = useState("Continuar");
  const handleTextButton = (): void => {
    if (infoNumber > 3) {
      setTextButton(() => "Confirmar");
      setStartGame(true);
    }
    if (infoNumber === 3) {
      setTextButton(() => "Começar");
    }
  };
  const verifyCard = (): boolean => {
    return false;
  };
  return (
    <div className="flex justify-center my-4">
      <button
        onClick={startGame ? handleAnswer : handleInfo}
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

export default Button;
