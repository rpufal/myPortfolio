import React from 'react';
import styles from '../styles/Skills.module.css';
import SkillsInfos from '../infos/SkillsInfos';
import SkillCard from '../components/SkillCard';

const Skills = () => (
  <div className={ styles.Background }>
    <section className={ styles.sectionSkills }>
      { Object.keys(SkillsInfos).map((skill) => {
        const currentSkill = SkillsInfos[skill];
        return (
          <SkillCard
            key={ skill }
            imgSrc={ currentSkill.imgSrc }
            imgAlt={ currentSkill.imgAlt }
            skillTitle={ currentSkill.skillTitle }
            skillDescription={ currentSkill.skillDescription }
            toolsList={ currentSkill.toolsList }
          />
        );
      })}
    </section>
  </div>
);

export default Skills;
