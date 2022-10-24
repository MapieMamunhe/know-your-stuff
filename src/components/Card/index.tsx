import { useAtom } from "jotai";
import React from "react";
import { useQuery } from "react-query";
import { PlayerInterface, selectedCard } from "../CardSelection";
import { Database } from "../../api/database";
import { starGameAtom } from "../Button";
// import { Container } from './styles';
interface Props {
  radioName: string;
  playersData: PlayerInterface;
}

const Card: React.FC<Props> = ({ radioName, playersData }: Props) => {
  const [card, setCard] = useAtom(selectedCard);
  const [startGame, setStartGame] = useAtom(starGameAtom);
  const updateCardSelection = (): void => {
    setCard(radioName);
  };
  const gamePlacement = () => {
    return (
      <>
        <img
          className="min-w-[180px]"
          src={playersData.imageURL}
          alt={playersData.name}
        />
        <figcaption className="text-center max-w-[180px]">
          {playersData.name}
        </figcaption>
      </>
    );
  };
  return (
    <>
      <input type="radio" name="card" className="peer hidden" id={radioName} />
      <label
        htmlFor={radioName}
        className="flex flex-col mx-2 min-h-[200px] my-8
          min-w-[180px] text-center peer-checked:bg-blue-500
          justify-center rounded  shadow bg-gray-200 
          hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50"
        onClick={updateCardSelection}
      >
        <figure>{startGame ? gamePlacement() : <>Aguardando</>}</figure>
      </label>
    </>
  );
};

export default Card;
