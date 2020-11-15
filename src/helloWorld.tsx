import React from "react";
import ReactDOM from "react-dom";
const logoImg = require('./content/logo_2.png');

export const HelloWorld : React.FC = () => {

  return (
    <div>
      <h1>Hello World from Component</h1>
      <img src={logoImg} />
    </div>
  );
};

console.log(`Api base: ${process.env.API_BASE}`);