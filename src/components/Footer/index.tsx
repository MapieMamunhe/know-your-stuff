import React from "react";
import { atom, useAtom } from "jotai";
// import { Container } from './styles';
const score = atom(0);
export const scoreAtom = atom(
  (get) => get(score),
  (get, set, updateScore: number) => {
    set(score, updateScore);
  }
);

const Footer: React.FC = () => {
  const [score, setScore] = useAtom(scoreAtom);
  return (
    <div className="fixed bottom-0 w-screen max-h-[10vh] h-10 bg-black">
      <p
        className={"bg-blue-700 text-white h-[100%] text-center"}
        style={{ width: `${score}%` }}
      >
        <span
          style={{
            textAlign: "center",
            position: "absolute",
          }}
        >
          Progresso {score}%
        </span>
      </p>
    </div>
  );
};

export default Footer;
