import React from "react";
import Card from "../Card";

// import { Container } from './styles';

const CardSelection: React.FC = () => {
  return (
    <main className="flex justify-around">
      <Card />
      <Card />
    </main>
  );
};

export default CardSelection;
