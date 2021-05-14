import React from 'react';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';
import ProjectsInfos from '../infos/ProjectsInfos';

const Projects = () => (
  <section className={ styles.Projects }>
    <h2>My Recent Work</h2>
    <p>
      Here are a few design projects
      i have worked on recently. Want to see more? Email me.
    </p>
    <div className={ styles.ProjectDisplay }>
      { Object.keys(ProjectsInfos).map((project, index) => {
        const currentProject = ProjectsInfos[project];
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

export default Projects;
