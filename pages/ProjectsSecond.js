import React from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectsInfos2 from '../infos/ProjectsInfos2';

import styles from '../styles/Projects2.module.css';

const ProjectsSecond = () => (
  <section className={ styles.Projects }>
    <h2>My Recent Work</h2>
    <p>
      Here are a few design projects
      i have worked on recently. Want to see more? Email me.
    </p>
    <div />
    <div className={ styles.SelectedProject }>
      <div className={ styles.SelectedTitle }>
        <h1>Recipes App</h1>
        <img alt="teste projeto" src="/ProjectLogos/cooking-green.png" width="50px" />
      </div>
      <div className={ styles.SelectedTags }>
        <p>tags do projeto</p>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupt</p>
    </div>
    <div className={ styles.ProjectDisplay2 }>
      { Object.keys(ProjectsInfos2).map((project, index) => {
        const currentProject = ProjectsInfos2[project];
        return (
          <ProjectCard
            description={ currentProject.description }
            hrefProject={ currentProject.href }
            srcImg={ currentProject.srcImg }
            tags={ currentProject.tags }
            key={ `${currentProject.name} ${index}` }
          />
        );
      }) }
    </div>
  </section>
);

export default ProjectsSecond;
