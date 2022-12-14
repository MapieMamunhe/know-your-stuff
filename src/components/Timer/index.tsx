import { useAtom } from "jotai";
import React, { useState } from "react";
import { gameOverAtom } from "../Button";
// import { Container } from './styles';

const Timer: React.FC = () => {
  const [timer, setTimer] = useState(10);
  const [gameOver, setGameOver] = useAtom(gameOverAtom);
  const timerFunction = setTimeout(() => {
    setTimer(() => timer - 1);
    return () => clearTimeout(timerFunction);
  }, 1000);
  if (timer <= 0) {
    clearTimeout(timerFunction);
    setGameOver(true);
  }
  return <p className="text-center font-semibold text-2xl">{timer}</p>;
};

export default Timer;
