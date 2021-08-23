import React from 'react';

import img from "../../assets/mono.gif";

import style from "./error.module.scss";

export default function About() {
  return (
    <div className={ style.cont }>
      <h3> Esta página no existe... </h3>
      <img src={ img } alt="monito" />
    </div>
  );
};