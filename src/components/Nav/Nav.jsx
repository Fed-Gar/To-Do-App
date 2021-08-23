import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./nav.module.scss";
import { FaHome } from 'react-icons/fa';

export default function Nav() {
  return (
    <header className={ styles.navBar }>
      <nav>
        <div>
          <Link to="/" > <FaHome className={ styles.home }/> </Link>
        </div>
        <div>
          <Link to="/add" className={ styles.add } > Add Todo </Link>
        </div>
      </nav>
    </header>
  );
};