import React from "react";

// import { Container } from './styles';

const Footer: React.FC = () => {
  let percentage = 90;
  return (
    <div className="fixed bottom-0 w-screen bg-black">
      <p
        className={"bg-blue-700 text-white"}
        style={{ width: `${percentage}%` }}
      >
        Progresso
      </p>
    </div>
  );
};

export default Footer;
