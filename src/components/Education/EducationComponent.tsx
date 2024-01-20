import classes from "./Education.module.scss";
import { Container, Columns, Heading } from "react-bulma-components";

const EducationComponent = () => {
  return (
    <section className={classes.education}>
      <Container className="fluid">
        <Columns>
          <Columns.Column size={7}>
            {" "}
            <Heading className={classes.head}>{`<EDUCATION>`}</Heading>
            <Heading className={classes.subtitle}>
              UNIVERSITIES & COLLEGESS
            </Heading>
          </Columns.Column>
        </Columns>
        <Columns>
          <Columns.Column>
            <ul className={classes.list}>
              <li>
                <h3 className={classes.list_title}>
                  Bialystok University of Technology
                </h3>
                <p>
                  Postgraduate studies on selected issues Java Script, React,
                  node.js, Agile & Scrum methodology, DevOps, Angular
                </p>
                <p>JavaSript Developer</p>
                <span>May 2016 - May 2017</span>
              </li>
              <li>
                <h3 className={classes.list_title}>
                  College of Tourism and Ecology in Sucha Beskidzka
                </h3>
                <p>Bachelor's Degree, Menager Spa & Wellness</p>
                <p>
                  diploma thesis: Functional design of Day Spa with elements of
                  e-commerce
                </p>
                <span>October 2021 - June 2022</span>
              </li>
            </ul>
          </Columns.Column>
        </Columns>
        <Columns>
          <Columns.Column size={7}>
            {" "}
            <Heading className={classes.subtitle}>PROFESIONAL COURSES</Heading>
          </Columns.Column>
        </Columns>
        <Columns>
          <Columns.Column>
            <ul className={classes.list_courses}>
              <li>
                <h3 className={classes.list_title}>
                  React & TypeScript - The Practical Guide
                </h3>
                <span>January 2024</span>
              </li>
              <li>
                <h3 className={classes.list_title}>
                  AWS Cloud Practitioner Essentials (Second Edition)
                </h3>
                <p>AWS training & certification</p>
                <p>
                  AWS services, security, architecture, pricing, and support
                </p>
              </li>
              <li>
                <h3 className={classes.list_title}>
                  Designing useful interfaces with "FIGMA", Sages Sp.Z o.o.
                </h3>
                <span>March 2023 - March 2023</span>
              </li>
              <li>
                <h3 className={classes.list_title}>
                  Certiícate Of Achievement Secure Coding Certiícate, Secure
                  Code Warrior (Yellow Belt (Angular,React))
                </h3>
                <span>October 2021 - October 2021</span>
              </li>
            </ul>
          </Columns.Column>
        </Columns>
      </Container>
    </section>
  );
};

export default EducationComponent;
