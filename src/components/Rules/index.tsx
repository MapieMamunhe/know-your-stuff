import { useAtom } from "jotai";
import React, { useState } from "react";
import { inforNumberAtom } from "../Button";

// import { Container } from './styles';

const Rules: React.FC = () => {
  const [infoNumber] = useAtom(inforNumberAtom);
  const [rules, setRules] = useState([
    "Bem vindo",
    "Terá 60 segundos para adivinhar qual é a imagem certa",
    "Escolha uma imagem e clique no botão verde abaixo",
    "A pontuação está no rodapé",
    "Se estiver preparado, clique em COMEÇAR!",
  ]);
  return (
    <p className="animate-bounce text-center font-semibold text-2xl px-20">
      {rules[infoNumber]}
    </p>
  );
};

export default Rules;
