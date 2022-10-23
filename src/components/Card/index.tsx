import React from "react";

// import { Container } from './styles';
interface Props {
  radioName: string;
}
const Card: React.FC<Props> = ({ radioName }: Props) => {
  return (
    <>
      <input type="radio" name="card" className="peer hidden" id={radioName} />
      <label
        htmlFor={radioName}
        className="flex flex-col mx-2 min-h-[180px] my-8
          min-w-[180px] text-center peer-checked:bg-blue-500
          justify-center rounded  shadow bg-gray-200 
          hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50"
      >
        <figure>Eu sou um card</figure>
      </label>
    </>
  );
};

export default Card;
