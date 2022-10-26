import { useAtom } from "jotai";
import React from "react";
import { infoNumberAtom } from "../Button";

import Rules from "../Rules";
import Timer from "../Timer";

// import { Container } from './styles';

const AdditionalInfo: React.FC = () => {
  const [infoNumber] = useAtom(infoNumberAtom);
  return <div className="h-20">{infoNumber < 5 ? <Rules /> : <Timer />}</div>;
};

export default AdditionalInfo;
