import { useAtom } from "jotai";
import React from "react";
import { inforNumberAtom } from "../Button";

import Rules from "../Rules";
import Timer from "../Timer";

// import { Container } from './styles';

const AdditionalInfo: React.FC = () => {
  const [infoNumber] = useAtom(inforNumberAtom);
  return <>{infoNumber < 5 ? <Rules /> : <Timer />}</>;
};

export default AdditionalInfo;
