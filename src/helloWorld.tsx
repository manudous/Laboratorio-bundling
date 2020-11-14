import React from "react";
import ReactDOM from "react-dom";
import logoImg from './content/logo_2.png';

export const HelloWorld = () => {
  
  return (
    <div>
      <h1>Hello World from Component</h1>
      <img src={logoImg} />
    </div>
  );
};