import React from "react";
import Card from "../Card";

// import { Container } from './styles';

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
