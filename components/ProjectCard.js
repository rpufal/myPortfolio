import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ srcImg, hrefProject, description, tags }) => (
  <div className={ styles.ProjectCard }>
    <img src={ srcImg } alt="Recipe Card" />
    <div className={ styles.TitleCard }>
      <h3>{description}</h3>
      <a href={ hrefProject }>
        <button className={ styles.CardButton } type="button">Visit Website!</button>
      </a>
      <div>
        { tags.map((tag) => <span key={ tag } className={ styles.tag }>{tag}</span>)}
      </div>
    </div>
  </div>
);

ProjectCard.propTypes = {
  srcImg: PropTypes.string.isRequired,
  hrefProject: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.shape([]).isRequired,
};

export default ProjectCard;
