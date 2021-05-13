import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Skills.module.css';

const SkillCard = ({ imgSrc, imgAlt, skillTitle, skillDescription, toolsList }) => (
  <div className={ styles.divSkills }>
    <img src={ imgSrc } width="25%" alt={ imgAlt } />
    <div className={ styles.skillTitle }>
      <h2>{skillTitle}</h2>
      <p>
        {skillDescription}
      </p>
    </div>
    <div className={ styles.skillList }>
      <h3>Languages, frameworks and tools</h3>
      <div>{toolsList.map((tool) => <p key={ tool }>{tool}</p>)}</div>
    </div>
  </div>
);

export default SkillCard;

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  skillTitle: PropTypes.string.isRequired,
  skillDescription: PropTypes.string.isRequired,
  toolsList: PropTypes.shape([]).isRequired,
};
