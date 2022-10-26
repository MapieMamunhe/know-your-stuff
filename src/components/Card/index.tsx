import { useAtom } from "jotai";
import React from "react";
import { useQuery } from "react-query";
import { PlayerInterface, selectedCardAtom } from "../CardSelection";
import { Database } from "../../api/database";
import { startGameAtom } from "../Button";
// import { Container } from './styles';
interface Props {
  radioName: string;
  playersData: PlayerInterface;
}

const Card: React.FC<Props> = ({ radioName, playersData }: Props) => {
  const [card, setCard] = useAtom(selectedCardAtom);
  const [startGame, setStartGame] = useAtom(startGameAtom);
  const updateCardSelection = (): void => {
    console.log("Selected Card", playersData.playerID);
    setCard(playersData.playerID);
  };
  const gamePlacement = () => {
    return (
      <>
        <img
          className="min-w-[180px]"
          src={playersData.imageURL}
          alt={playersData.name}
        />
        <figcaption className="text-center max-w-[180px] h-[48px] block align-middle justify-center">
          {playersData.name}
        </figcaption>
      </>
    );
  };
  return (
    <>
      <input
        type="radio"
        name="card"
        className="peer hidden"
        id={radioName}
        value={playersData.playerID}
        onChange={updateCardSelection}
      />
      <label
        htmlFor={radioName}
        className="flex flex-col mx-2 min-h-[220px] my-12
          min-w-[180px] text-center peer-checked:bg-blue-500
          justify-center rounded  shadow bg-gray-200 
          hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50"
      >
        <figure>{startGame ? gamePlacement() : <>Aguardando</>}</figure>
      </label>
    </>
  );
};

export default Card;
