import React from "react";
import classes from "./ExperienceComponent.module.scss";
import {
  Box,
  Block,
  Notification,
  Heading,
  Container,
  Columns,
} from "react-bulma-components";
import { FaCalendarAlt } from "react-icons/fa";
import imgHsbc from "../../assets/hsbc.jpg";

type ExProps = {
  title: string;
};

const ExperienceComponent = ({ title }: ExProps) => {
  return (
    <section className={classes.experience}>
      <Container className="fluid">
        <Columns>
          <Columns.Column size={7}>
            {" "}
            <Heading className={classes.head}>{title}</Heading>
          </Columns.Column>
        </Columns>
        <Columns>
          <Columns.Column>
            <Box className={classes.box}>
              <h3 className={classes.box_title}>IThouse</h3>{" "}
              <h4>React Front End Developer</h4>
              <p>
                <FaCalendarAlt /> March 2024
              </p>
              <p>
                I work as a React Developer on a project for public
                administration related to document flow and permits for
                construction.The project I'm working on is integrated with other
                public systems such as GUS E-Budownictwo and similar ones.
                Technologies involved include React, TypeScript, React Query,
                Formik,Vite, REST API,Swagger and SCSS or others . I work in a Scrum team
              </p>
            </Box>
          </Columns.Column>
        </Columns>
        <Columns>
          <Columns.Column>
            <Box className={classes.box}>
              {" "}
              <h3 className={classes.box_title}>HSBC Delivery</h3>{" "}
              <h4>Front End Developer</h4>
              <p>
                <FaCalendarAlt /> December 2019
              </p>
              <p>
                I Develop global bank project, working at many internal banking
                projects for 86 countries, with international team. I work with
                team few developers in Scrum, cooperation with UX, creation of
                technical documentation.Main technologies are React,
                TypeScript,HTML5, CSS3, Sass, Java Script ES6, jQuery, AEM,
                Jira, Jenkins, StoryBook, Jest, Galen. The main responsibilities
                are software development, project maintenance, participation in
                the release. The last projects I work on include a search engine
                with filters and sorting to articles combined with an internal
                API (React + TypeScript). Second is an internal library of
                reusable UI components created in React + StoryBook
              </p>
            </Box>
          </Columns.Column>
        </Columns>
        <Columns>
          <Columns.Column>
            <Box className={classes.box}>
              <h3 className={classes.box_title}>NONSTOP</h3>{" "}
              <h4>Front End Developer</h4>
              <p>
                <FaCalendarAlt /> September 2018 - November 2019
              </p>
              <p>
                Work on Single Page Aplication for a customer from the Great
                Britain. Technology and tools Html5, Css3, Bootstrap, Java
                Script, Vue.js, Nuxt.js, RWD, Photoshop. I work with team few
                developers in Scrum and Agile. Cooperation with the largest UX
                company in Poland. I am responsible for the functionality and
                appearance of internet applications. I work in the Git . I am
                also responsible for Responsive Web Design in projects. Unit
                test.
              </p>
            </Box>
          </Columns.Column>
        </Columns>
        <Columns>
          <Columns.Column>
            <Box className={classes.box}>
              <h3 className={classes.box_title}>PTR DIGITAL</h3>{" "}
              <h4>Front End Developer</h4>
              <p>
                <FaCalendarAlt />
                June 2018 - September 2018
              </p>
              <p>
                Work for a company that provides solutions for e￾commerce. My
                responsibilities are creating and developing product cards,
                website, applications and landing pages. Companies for which I
                develop front end are Samsung and Philips plus implementations
                for the largest companies in the e-commerce market in Poland
                (Media Markt, Saturn, Samsung store, Media Expert etc).The main
                technologies in which I work are Html5, Css3, Java Script,
                jQuery, Sass preprocessors, Photoshop, Bootstrap, Gulp, Github,
                Gitlab plus basics Vue.js
              </p>
            </Box>
          </Columns.Column>
        </Columns>
        <Columns>
          <Columns.Column>
            <Box className={classes.box}>
              <h3 className={classes.box_title}>Freeleancer</h3>{" "}
              <h4>Junior Front End Developer</h4>
              <p>
                <FaCalendarAlt />
                June 2017 - June 2018
              </p>
              <p>
                Front End Developer Creating websited & e-commerce solutions
                using Wordpress. I'm using: Wordpress, HTML5, CSS3,jQuery, Java
                Script,SASS, AdWords, Analytics. Participation in a commercial
                project for start up in a team of 2 people - programming the
                Front-End layer according to the guidelines. In this project I
                worked under the supervision of Senior Full Stack Developer. I
                worked on a project for a software house Gregory&Monsters as a
                Junior Javascript Developer. In this project I created the front
                end functionality in javascript. I worked in a team of several
                people. Working environment divided into tacks and week sprints.
                Other tools used in the project: Producteev, SVN.
              </p>
            </Box>
          </Columns.Column>
        </Columns>
        <Columns>
          <Columns.Column>
            <Box className={classes.box}>
              <h3 className={classes.box_title}>
                ZOOGO DYSTRYBUCJA HURT DETAL (Freelance)
              </h3>
              <h4>E-commerce specialist/Webmaster</h4>
              <p>
                <FaCalendarAlt />
                May 2016 - May 2017
              </p>
              <p>
                SEO optimizations, E-mail Marketing, Blogging, Website & content
                development in Html, Css3, Wordpress.
              </p>
            </Box>
          </Columns.Column>
        </Columns>
      </Container>
    </section>
  );
};

export default ExperienceComponent;
