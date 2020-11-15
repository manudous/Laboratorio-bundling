import React from "react";
import ReactDOM from "react-dom";
const logoImg = require('./content/logo_2.png');
const classes = require('./styles.scss').default;

export const HelloWorld : React.FC = () => {

  return (
    <div className= {classes.container}>
      <div className= {classes.redBackground}>
        <h1>Hello World from Component</h1>
      </div>       
      <img src={logoImg} />
    </div>
  );
};

console.log(`Api base: ${process.env.API_BASE}`);