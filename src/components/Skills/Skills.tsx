import classes from "./Skills.module.scss";
import {
  FaInvision,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaVuejs,
  FaNode,
  FaNpm,
  FaFigma,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiJest,
  SiBulma,
  SiJquery,
  SiNextdotjs,
  SiTypescript,
  SiNuxtdotjs,
  SiFirebase,
  SiJira,
  SiRedux,
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
const sizeNode: size = "4rem";

function Skills({ fluid = true }: BulmaContainerProps) {
  return (
    <section className={classes.skills}>
      <Container className="fluid">
        <Columns>
          <Columns.Column size={7}>
            {" "}
            <Heading className={classes.head}>{`<SKILLS>`}</Heading>
            <Heading className={classes.subtitle}>
              Below are my main technologies that I use or have used in previous
              projects.
            </Heading>
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
              <Box className={classes.box_custom}>
                {" "}
                <figure>
                  <SiRedux size={sizeIcon} color={"#764ABC"} />
                  <figcaption>Redux</figcaption>
                </figure>
              </Box>
            </Columns.Column>
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
                  <SiTypescript size={sizeIcon} color={"#3178c6"} />
                  <figcaption>Type Script</figcaption>
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
                  <SiNextdotjs size={sizeIcon} color={"#515151"} />
                  <figcaption>NEXT.js</figcaption>
                </figure>
              </Box>
            </Columns.Column>
            <Columns.Column>
              <Box className={classes.box_custom}>
                {" "}
                <figure>
                  {" "}
                  <FaNode size={sizeNode} color={"#43853D"} />{" "}
                  <figcaption>Node.js</figcaption>
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
                  <SiJest size={sizeIcon} color={"#9C475F"} />
                  <figcaption>Jest</figcaption>
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
          </Columns>
          <Columns>
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

            <Columns.Column>
              <Box className={classes.box_custom}>
                {" "}
                <figure>
                  <FaInvision size={sizeIcon} color={"#FF3366"} />
                  <figcaption>Invision</figcaption>
                </figure>
              </Box>
            </Columns.Column>
            <Columns.Column>
              <Box className={classes.box_custom}>
                {" "}
                <figure>
                  <SiJquery size={sizeIcon} color={"#005AA2"} />
                  <figcaption>JQuery</figcaption>
                </figure>
              </Box>
            </Columns.Column>
            <Columns.Column>
              <Box className={classes.box_custom}>
                {" "}
                <figure>
                  <FaBootstrap size={sizeIcon} color={"#8712F7"} />
                  <figcaption>Bootstrap</figcaption>
                </figure>
              </Box>
            </Columns.Column>
            <Columns.Column>
              <Box className={classes.box_custom}>
                {" "}
                <figure>
                  <SiBulma size={sizeIcon} color={"#00D1B2"} />
                  <figcaption>Bulma</figcaption>
                </figure>
              </Box>
            </Columns.Column>
          </Columns>
          <Columns>
            {" "}
            <Columns.Column>
              <Box className={classes.box_custom}>
                {" "}
                <h2 className={classes.others}>
                  {" "}
                  And others such as Recharts , Galen Framework ,Adobe
                  Experience Meneager, Gitlab ...
                </h2>
              </Box>
            </Columns.Column>
          </Columns>
        </div>
      </Container>
    </section>
  );
}

export default Skills;
