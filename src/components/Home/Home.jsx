import React from 'react';

import Todos from '../Todos/Todos';

import styles from "./home.module.scss"

export default function Home() {
  return (
    <div className={ styles.container }>
      <div className={ styles.todos }>
        <Todos status='Todo' />
      </div>
      <div className={ styles.todos }>
        <Todos status='InProgress' />
      </div>
      <div className= { styles.todos }>
        <Todos status='Done' />
      </div>
    </div>  
  )
};