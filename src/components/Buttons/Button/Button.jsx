import React from 'react';

import styles from './button.module.scss';

export default function GrowButton({ msg, type }) {
	return (
  	<button 
			type={ type }
			className={ `${styles.button} ${styles.grow}` }
		>
			{ msg } 
		</button>
	);
};