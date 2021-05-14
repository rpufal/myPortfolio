import React from 'react';
import styles from '../styles/Title.module.css';

const Title = () => (
  <div className={ styles.ShortDescription }>
    <h1>Front-end Developer</h1>
    <h4>In love with programming</h4>
    <img src="/ProfilePic/profile.png" alt="It's me" width="300px" />
  </div>
);

export default Title;
