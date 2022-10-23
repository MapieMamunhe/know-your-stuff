import React from "react";
import Card from "../Card";
import { atom } from "jotai";
// import { Container } from './styles';
export const selectedCard = atom("card1");
const CardSelection: React.FC = () => {
  return (
    <main className="flex justify-around flex-wrap">
      <div>
        <Card radioName={"card1"} />
      </div>
      <div>
        <Card radioName={"card2"} />
      </div>
    </main>
  );
};

export default CardSelection;
