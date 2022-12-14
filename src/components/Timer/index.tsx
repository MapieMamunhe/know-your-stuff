import { atom, useAtom } from "jotai";
import React, { useState } from "react";
import { gameOverAtom } from "../AnswerButton";
// import { Container } from './styles';

const Timer: React.FC = () => {
  const [timer, setTimer] = useAtom(timerAtom);
  const [gameOver, setGameOver] = useAtom(gameOverAtom);
  const timerFunction = setTimeout(() => {
    setTimer(timer - 1);
    return () => clearTimeout(timerFunction);
  }, 1000);
  if (timer <= 0) {
    clearTimeout(timerFunction);
  }
  return <p className="text-center font-semibold text-2xl">{timer}</p>;
};
const timer = atom(10);
export const timerAtom = atom(
  (get) => get(timer),
  (get, set, timerUpdate: number) => {
    set(timer, timerUpdate);
  }
);
export default Timer;
