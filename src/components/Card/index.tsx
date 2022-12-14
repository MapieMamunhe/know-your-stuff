import { useAtom } from "jotai";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { PlayerInterface, selectedCardAtom } from "../CardSelection";
import { Database } from "../../api/database";
import { startGameAtom } from "../AnswerButton";
// import { Container } from './styles';
interface Props {
  radioName: string;
  playersData: PlayerInterface;
}

const Card: React.FC<Props> = ({ radioName, playersData }: Props) => {
  const [card, setCard] = useAtom(selectedCardAtom);
  const [isChecked, setChecked] = useState(false);
  const [startGame, setStartGame] = useAtom(startGameAtom);
  const specialClass = "bg-green-400";
  const isRadioSelected = (value: number) => card === value;
  /* const handleCheck = () => {
    console.log(card + " Esse e o card");
    //If its the current card then..
  }; */
  const gamePlacement = () => {
    return (
      <>
        <img
          className="min-w-full"
          src={playersData.imageURL}
          alt={playersData.name}
          loading="lazy"
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
        checked={isRadioSelected(playersData.playerID)}
        value={playersData.playerID}
        onChange={(e) => {
          console.log(e.currentTarget.value);
          setCard(Number(e.currentTarget.value));
        }}
      />
      <label
        htmlFor={radioName}
        className={`flex flex-col flex-wrap mx-2 w-[120px] min-h-[220px] my-12
          sm:min-w-[180px] text-center peer-checked:bg-blue-500
          justify-center rounded  shadow bg-gray-200 drop-shadow-lg
          hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50 ring ring-offset-4 ring-green-400`}
      >
        <figure>{startGame ? gamePlacement() : <>Aguardando</>}</figure>
      </label>
    </>
  );
};

export default Card;
