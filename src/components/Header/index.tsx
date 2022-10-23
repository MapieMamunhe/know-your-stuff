import React from "react";

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <>
      <nav>
        <ul className="flex justify-evenly text-center align-middle h-12 my-4 mx-2 shadow-lg">
          <li>Categoria</li>
          <li>
            <a
              className="text-blue-600 font-semibold w-2"
              href="http://linkedin.com/in/Mamunhe"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Sobre o Autor
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
