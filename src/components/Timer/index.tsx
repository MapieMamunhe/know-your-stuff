import React, { useState } from "react";

// import { Container } from './styles';

const Timer: React.FC = () => {
  const [timer, setTimer] = useState(60);
  const timerFunction = setTimeout(() => {
    setTimer(() => (timer <= 0 ? 60 : timer - 1));
    return () => clearTimeout(timerFunction);
  }, 1000);
  return <p className="text-center font-semibold text-2xl">{timer}</p>;
};

export default Timer;
