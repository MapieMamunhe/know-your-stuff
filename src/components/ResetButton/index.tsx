import { useAtom } from "jotai";
import React from "react";
import { gameOverAtom } from "../AnswerButton";
import { scoreAtom } from "../Footer";
import { timerAtom } from "../Timer";

// import { Container } from './styles';

const ResetButton: React.FC = () => {
  const [timer, setTimer] = useAtom(timerAtom);
  const [score, setScore] = useAtom(scoreAtom);
  const [gameOver, setGameOver] = useAtom(gameOverAtom);
  const handleReset = () => {
    setTimer(10);
    setScore(0);
    setGameOver(false);
  };
  if (timer <= 0) setGameOver(true);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "2em" }}
    >
      <button
        onClick={handleReset}
        className="bg-green-600 hover:bg-blue-600 rounded-md w-20 h-10 text-center text-white"
      >
        Resetar
      </button>
    </div>
  );
};

export default ResetButton;
