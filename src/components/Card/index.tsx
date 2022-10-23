import { useAtom } from "jotai";
import React from "react";
import { selectedCard } from "../CardSelection";

// import { Container } from './styles';
interface Props {
  radioName: string;
}
const Card: React.FC<Props> = ({ radioName }: Props) => {
  const [card, setCard] = useAtom(selectedCard);
  const updateCardSelection = (): void => {
    setCard(radioName);
  };
  return (
    <>
      <input type="radio" name="card" className="peer hidden" id={radioName} />
      <label
        htmlFor={radioName}
        className="flex flex-col mx-2 min-h-[180px] my-8
          min-w-[180px] text-center peer-checked:bg-blue-500
          justify-center rounded  shadow bg-gray-200 
          hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50"
        onClick={updateCardSelection}
      >
        <figure>Eu sou um card</figure>
      </label>
    </>
  );
};

export default Card;
