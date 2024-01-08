import classes from "./Skills.module.scss";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaVuejs,
  FaNode,
  FaNpm,
  FaFigma,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiNextdotjs,
  SiTypescript,
  SiNuxtdotjs,
  SiFirebase,
  SiJira,
} from "react-icons/si";

type size = string;

const sizeIcon: size = "3.5rem";

function Skills() {
  return (
    <section className={classes.skills}>
      <h2 className={classes.title}>SKILLS</h2>
      <div className={classes.icon_wrapper}>
        {" "}
        <figure>
          <FaReact size={sizeIcon} className="icon" color={"#61dafb"} />
          <figcaption>React.js</figcaption>
        </figure>
        <figure>
          <IoLogoJavascript size={sizeIcon} color={"#EFD81D"} />
          <figcaption>Java Script</figcaption>
        </figure>
        <figure>
          <FaHtml5 size={sizeIcon} color={"#DD4B25"} />
          <figcaption>HTML5</figcaption>
        </figure>
        <figure>
          {" "}
          <FaCss3Alt size={sizeIcon} color={"#2862E9"} />
          <figcaption>CSS3</figcaption>
        </figure>
        <figure>
          {" "}
          <FaSass size={sizeIcon} color={"#CF649A"} />
          <figcaption>SCSS</figcaption>
        </figure>
        <figure>
          {" "}
          <FaVuejs size={sizeIcon} color={"#49C1A9"} />
          <figcaption>VUE.js</figcaption>
        </figure>
        <figure>
          <SiNextdotjs size={sizeIcon} color={"#171717"} />
          <figcaption>NEXT.js</figcaption>
        </figure>
        <figure>
          {" "}
          <FaNode size={sizeIcon} color={"#43853D"} />{" "}
          <figcaption>Node.js</figcaption>
        </figure>
        <figure>
          <SiTypescript size={sizeIcon} color={"#3178c6"} />
          <figcaption>Type Script</figcaption>
        </figure>
        <figure>
          {" "}
          <SiNuxtdotjs size={sizeIcon} color={"#00dc82d9"} />{" "}
          <figcaption>Nuxt.js</figcaption>
        </figure>
        <figure>
          {" "}
          <FaNpm size={sizeIcon} color={"#cb3837"} />
          <figcaption>Npm</figcaption>
        </figure>
        <figure>
          {" "}
          <FaFigma size={sizeIcon} color={"#9747ff"} />
          <figcaption>Figma</figcaption>
        </figure>
        <figure>
          {" "}
          <SiFirebase size={sizeIcon} color={"#F48110"} />
          <figcaption>Firebase</figcaption>
        </figure>
        <figure>
          <SiJira size={sizeIcon} color={"#1269E4"} />
          <figcaption>Jira</figcaption>
        </figure>
        <figure>
          <FaGithub size={sizeIcon} />
          <figcaption>Github</figcaption>
        </figure>
      </div>
      <p className={classes.text}> and others ...</p>
    </section>
  );
}

export default Skills;
