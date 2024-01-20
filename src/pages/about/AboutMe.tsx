import {
  Container,
  Columns,
  Box,
  Heading,
  Content,
} from "react-bulma-components";
import classes from "./AboutMe.module.scss";

type AboutMeProps = {
  title: string;
};

function AboutMe({ title }: AboutMeProps) {
  return (
    <section className={classes.about}>
      <Container className="fluid">
        {" "}
        <Content>
          <h1 className={classes.title}>{title}</h1>
          <p>
            I am Michał and I'm Front End Developer. I have a few years
            experience at UI Developer. I worked for 3 companies and made many
            interesting small middle and big projects for clients at all world
            for many markets and industry. I'm perfect understand what business
            need, how good working and good cooperating on the team. I always
            open to new solution myself and experience. My work is very
            fantastic. I like every day when I develop ,create new things and
            solve problems.
          </p>
          <p>
            The projects I worked on included: an internal UI style library for
            reusable components based on React + Type Script and StoryBook, the
            next project I worked on was an entity search engine (articles or
            another data) with advanced filters, sorting and white and black
            lists with excluding reserved phrases. This project was created in
            React + Type Script + Redux and used AWS as a database
          </p>
          <h2>Private side</h2>
          <p>
            Privately, I am constantly developing in front-end technologies and
            node.js. I also working on the development of my own application
            "BudgetApp" which uses the API of the National Bank of Poland and
            analyzes currency and gold prices in different periods of time
            through charts. This application also has options for analyzing the
            user's budget and provides information about current and overdue
            bills nad others things about user budget. Ultimately, the
            application will analyze the currency, gold and crypto markets and
            help you manage your budget and invest.
          </p>
        </Content>
      </Container>
    </section>
  );
}

export default AboutMe;
