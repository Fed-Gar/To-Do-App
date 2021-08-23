import React from 'react';

import styles from "./todo.module.scss";

export default function Todo({ title }) {
  return (
    <div className={ styles.container }>
      <span> { title } </span> 
    </div>
  );
};