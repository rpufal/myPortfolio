import React from 'react';
import styles from '../styles/Skills.module.css';

const frontendTools = ['Javascript', 'React', 'Redux',
  'React Hooks', 'HTML', 'CSS', 'Bash', 'Git', 'Github'];

const Skills = () => (
  <section className={ styles.sectionSkills }>
    <div className={ styles.divSkills }>
      <img src="" alt="programming-logo" />
      <h2>Front-end Developer</h2>
      <p>
        I like to code things from scratch, and enjoy
        bringing ideas to life in the browser.
      </p>
      <h3>Languages, frameworks and tools</h3>
      <div>{frontendTools.map((tool) => <p key={ tool }>{tool}</p>)}</div>
    </div>
    {/* <div>Soft Skills</div>
    <div>Miscellaneous</div> */}
  </section>
);

export default Skills;
