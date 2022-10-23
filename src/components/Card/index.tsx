import { useAtom } from "jotai";
import React from "react";
import { useQuery } from "react-query";
import { selectedCard } from "../CardSelection";
import { Database } from "../../api/database";
// import { Container } from './styles';
interface Props {
  radioName: string;
}
interface Player {
  name: string;
  imageURL: string;
}
function getRandomNumber(maxValue: number, minValue: number): number {
  const randomNumber = Math.random() * (maxValue - minValue) + minValue;
  return Math.round(randomNumber);
}

function parsedDataPlayersAPI(): void {
  const MAX_PAGES_IN_API = 14;
  const MAX_PLAYERS_IN_API = 19;
  const randomPageNumber = getRandomNumber(MAX_PAGES_IN_API, 0);
  const randomPlayerNumber = getRandomNumber(MAX_PLAYERS_IN_API, 0);
}

const Card: React.FC<Props> = ({ radioName }: Props) => {
  const [card, setCard] = useAtom(selectedCard);
  const updateCardSelection = (): void => {
    console.log(data);
    setCard(radioName);
  };
  const { data, isLoading, isError } = useQuery("players", () => Database);

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
        <figure>Ola</figure>
      </label>
    </>
  );
};

export default Card;
