import styles from "./SkillsStyles.module.css";
import SkillsList from "../../common/SkillsList";
import cpp from "../../assets/c-plus.png";
import java from "../../assets/kotlin.svg";
import kotlin from "../../assets/java.svg";
import javaScript from "../../assets/javascript.svg";
import nodeJs from "../../assets/nodejs.svg";
import html from "../../assets/html-dark.svg";
import css from "../../assets/css-light.svg";
import typeScript from "../../assets/typescript.svg";
import react from "../../assets/react-js.svg";
import vite from "../../assets/vite.svg";
import vue from "../../assets/vue-js.svg";
import tailwindCss from "../../assets/tailwind-css.svg";
import redux from "../../assets/redux.svg";
import git from "../../assets/git.svg";

const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">My Skills</h1>
      <div className={styles.skillsList}>
        <div className={styles.skillsSection}>
          <SkillsList src={cpp} alt="cpp" />
          <SkillsList src={java} alt="java" />
          <SkillsList src={kotlin} alt="kotlin" />
          <SkillsList src={nodeJs} alt="nodeJs" />
        </div>
        <hr />
        <div className={styles.skillsSection}>
          <SkillsList src={html} alt="html" />
          <SkillsList src={css} alt="css" />
          <SkillsList src={javaScript} alt="javaScript" />
          <SkillsList src={typeScript} alt="typeScript" />
        </div>
        <hr />
        <div className={styles.skillsSection}>
          <SkillsList src={react} alt="react" />
          <SkillsList src={vite} alt="vite" />
          <SkillsList src={vue} alt="vue" />
          <SkillsList src={tailwindCss} alt="tailwindCss" />
        </div>
        <hr />
        <div className={styles.skillsSection}>
          <SkillsList src={redux} alt="redux" />
          <SkillsList src={git} alt="git" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
