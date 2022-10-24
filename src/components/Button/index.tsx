import { atom, useAtom } from "jotai";
import React, { useState } from "react";

// import { Container } from './styles';
const Button: React.FC = () => {
  const [infoNumber, setInfoNumber] = useAtom(inforNumberAtom);
  const [starGame, setStartGame] = useAtom(starGameAtom);
  const handleInfo = () => {
    //Call functions bellow only if condition is meet to save state update time
    if (infoNumber <= 4) {
      handleInfoNumber();
      handleTextButton();
    }
  };
  const handleInfoNumber = (): void => setInfoNumber(infoNumber + 1);
  const [textButton, setTextButton] = useState("Continuar");
  const handleTextButton = (): void => {
    if (infoNumber > 3) {
      setTextButton(() => "Confirmar");
      setStartGame(() => true);
    }
    if (infoNumber === 3) {
      setTextButton(() => "Começar");
    }
  };
  return (
    <div className="flex justify-center my-4">
      <button
        onClick={handleInfo}
        className="bg-green-600 hover:bg-blue-600 rounded-md w-20 h-10 text-center text-white"
      >
        {textButton}
      </button>
    </div>
  );
};
export const starGameAtom = atom(false);

export default Button;
export const inforNumberAtom = atom<number>(0);
