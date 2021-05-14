import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={ styles.header }>
    <h1>RLP</h1>
    <div className={ styles.indexDisplay }>
      <h3>About</h3>
      <h3>Skills</h3>
      <h3>Projects</h3>
      <h3>Contact</h3>
    </div>
  </header>
);

export default Header;
