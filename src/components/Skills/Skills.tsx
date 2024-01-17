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
import { Container, Columns, Box, Heading } from "react-bulma-components";

type size = string;

interface BulmaContainerProps {
  fluid?: boolean;
  isWidescreen?: boolean;
  isFullhd?: boolean;
  // Add more Bulma container classes as needed
}

const sizeIcon: size = "3.9rem";

function Skills({ fluid = true }: BulmaContainerProps) {
  return (
    <section className={classes.skills}>
      <Container className="fluid">
        <Columns>
          <Columns.Column size={7}>
            {" "}
            <Heading className={classes.head}>{`<SKILLS>`}</Heading>
            <Heading className="subtitle">Below are my main technolgies which I use or used in projects.</Heading>
          </Columns.Column>
        </Columns>

        <div className={classes.icon_wrapper}>
          <Columns>
            <Columns.Column>
              {" "}
              <Box className={classes.box_custom}>
                {" "}
                <figure>
                  <FaReact size={sizeIcon} color={"#61dafb"} />
                  <figcaption>React.js</figcaption>
                </figure>
              </Box>
            </Columns.Column>{" "}
            <Columns.Column>
              {" "}
              <Box className={classes.box_custom}>
                {" "}
                <figure>
                  <IoLogoJavascript size={sizeIcon} color={"#EFD81D"} />
                  <figcaption>Java Script</figcaption>
                </figure>
              </Box>
            </Columns.Column>
            <Columns.Column>
              <Box className={classes.box_custom}>
                {" "}
                <figure>
                  <FaHtml5 size={sizeIcon} color={"#DD4B25"} />
                  <figcaption>HTML5</figcaption>
                </figure>
              </Box>
            </Columns.Column>
            <Columns.Column>
              <Box className={classes.box_custom}>
                {" "}
                <figure>
                  {" "}
                  <FaCss3Alt size={sizeIcon} color={"#2862E9"} />
                  <figcaption>CSS3</figcaption>
                </figure>
              </Box>
            </Columns.Column>
            <Columns.Column>
              <Box className={classes.box_custom}>
                {" "}
                <figure>
                  {" "}
                  <FaSass size={sizeIcon} color={"#CF649A"} />
                  <figcaption>SCSS</figcaption>
                </figure>
              </Box>
            </Columns.Column>
          </Columns>
          <Columns>
            <Columns.Column>
              <Box className={classes.box_custom}>
                {" "}
                <figure>
                  {" "}
                  <FaVuejs size={sizeIcon} color={"#49C1A9"} />
                  <figcaption>VUE.js</figcaption>
                </figure>
              </Box>
            </Columns.Column>
            <Columns.Column>
              <Box className={classes.box_custom}>
                {" "}
                <figure>
                  <SiNextdotjs size={sizeIcon} color={"#171717"} />
                  <figcaption>NEXT.js</figcaption>
                </figure>
              </Box>
            </Columns.Column>
            <Columns.Column>
              <Box className={classes.box_custom}>
                {" "}
                <figure>
                  {" "}
                  <FaNode size={sizeIcon} color={"#43853D"} />{" "}
                  <figcaption>Node.js</figcaption>
                </figure>
              </Box>
            </Columns.Column>
            <Columns.Column>
              <Box className={classes.box_custom}>
                {" "}
                <figure>
                  <SiTypescript size={sizeIcon} color={"#3178c6"} />
                  <figcaption>Type Script</figcaption>
                </figure>
              </Box>
            </Columns.Column>
            <Columns.Column>
              <Box className={classes.box_custom}>
                {" "}
                <figure>
                  {" "}
                  <SiNuxtdotjs size={sizeIcon} color={"#00dc82d9"} />{" "}
                  <figcaption>Nuxt.js</figcaption>
                </figure>
              </Box>
            </Columns.Column>
          </Columns>
          <Columns>
            <Columns.Column>
              <Box className={classes.box_custom}>
                {" "}
                <figure>
                  {" "}
                  <FaNpm size={sizeIcon} color={"#cb3837"} />
                  <figcaption>Npm</figcaption>
                </figure>
              </Box>
            </Columns.Column>
            <Columns.Column>
              <Box className={classes.box_custom}>
                {" "}
                <figure>
                  {" "}
                  <FaFigma size={sizeIcon} color={"#9747ff"} />
                  <figcaption>Figma</figcaption>
                </figure>
              </Box>
            </Columns.Column>
            <Columns.Column>
              <Box className={classes.box_custom}>
                {" "}
                <figure>
                  {" "}
                  <SiFirebase size={sizeIcon} color={"#F48110"} />
                  <figcaption>Firebase</figcaption>
                </figure>
              </Box>
            </Columns.Column>
            <Columns.Column>
              <Box className={classes.box_custom}>
                {" "}
                <figure>
                  <SiJira size={sizeIcon} color={"#1269E4"} />
                  <figcaption>Jira</figcaption>
                </figure>
              </Box>
            </Columns.Column>
            <Columns.Column>
              <Box className={classes.box_custom}>
                {" "}
                <figure>
                  <FaGithub size={sizeIcon} />
                  <figcaption>Github</figcaption>
                </figure>
              </Box>
            </Columns.Column>
          </Columns>
          <Columns.Column>
          And others ....
          </Columns.Column>
        </div>
      </Container>
    </section>
  );
}

export default Skills;
