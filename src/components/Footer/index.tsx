import React from "react";
import { atom, useAtom } from "jotai";
// import { Container } from './styles';
export const scoreAtom = atom(0);

const Footer: React.FC = () => {
  const [score, setScore] = useAtom(scoreAtom);
  return (
    <div className="fixed bottom-0 w-screen max-h-[10vh] h-10 bg-black">
      <p className={"bg-blue-700 text-white"} style={{ width: `${score}%` }}>
        Progresso
      </p>
    </div>
  );
};

export default Footer;
