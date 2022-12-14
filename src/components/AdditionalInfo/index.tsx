import { useAtom } from "jotai";
import React, { useState } from "react";
import { gameOverAtom, infoNumberAtom } from "../Button";
import EndGameMessageComponent from "../EndGameMessageComponent";

import Rules from "../Rules";
import Timer from "../Timer";

// import { Container } from './styles';

const AdditionalInfo: React.FC = () => {
  const [infoNumber] = useAtom(infoNumberAtom);

  let componentToRender = <Rules />;
  if (infoNumber >= 5) {
    componentToRender = <Timer />;
  }
  return <div className="sm:h-20">{componentToRender}</div>;
};

export default AdditionalInfo;
