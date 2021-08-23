import React from 'react';

import styles from './growButton.module.scss';

export default function GrowButton({ msg, func, id }) {
	return (
  	<button 
			className={ `${styles.button} ${styles.grow}` }
			onClick={ () => func(id) }
			>
			{ msg } 
		</button>
	);
};