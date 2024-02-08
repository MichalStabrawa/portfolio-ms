import img from "../../assets//undraw_two_factor_authentication_namy.svg";
import imgAbout from "../../assets/undraw_profile_re_4a55.svg";
import imgWeb from "../../assets/undraw_web_developer_re_h7ie.svg";
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
        <h1 className={classes.title}>{title}</h1>{" "}
        <Columns>
          <Columns.Column className="is-three-fifths">
            <p className={classes.description}>
              Greetings! I'm Michał, a seasoned Front-End Developer with several
              years of experience specializing in Front-end development. Over
              the course of my career, I've had the privilege of working with
              three dynamic companies, delivering a myriad of projects that
              spanned small, mid-sized, and large scales for clients worldwide,
              cutting across diverse markets and industries. My forte lies in
              not only grasping the intricacies of business requirements but
              also in fostering seamless collaboration within a team. I thrive
              on the challenges that come with creating innovative solutions and
              constantly seek out new opportunities for both personal and
              professional growth.
            </p>
            <p></p>
          </Columns.Column>
          <Columns.Column>
            <figure>
              <img src={imgAbout} alt="" />
            </figure>
          </Columns.Column>
        </Columns>
        <Columns>
          <Columns.Column>
            <figure>
              <img src={img} alt="" />
            </figure>
          </Columns.Column>
          <Columns.Column className="is-three-fifths">
            <h2>Professional Highlights:</h2>
            <p className={classes.description}>
              In my project portfolio, I've successfully implemented various
              solutions, including the development of an internal UI style
              library. This library, rooted in React, TypeScript, and Storybook,
              enables the creation of reusable components, streamlining UI
              development processes. Another noteworthy project involved
              crafting an entity search engine using React, TypeScript, and
              Redux, with AWS serving as the robust database. This search engine
              boasts advanced filters, sorting capabilities, and the unique
              feature of white and blacklists, allowing for the exclusion of
              reserved phrases.
            </p>
          </Columns.Column>
        </Columns>
        <Columns>
          <Columns.Column className="is-three-fifths">
            <h2>Private Endeavors:</h2>
            <p className={classes.description}>
              On the personal front, my commitment to continuous improvement is
              evident through my exploration of front-end technologies,
              including React Native for mobile development, and Android Studio
              for native Android app development. I'm particularly excited about
              my ongoing project, "BudgetApp." Leveraging the National Bank of
              Poland's API, this application analyzes currency and gold prices
              over different time periods, offering insightful visualizations
              through charts. Beyond that, "BudgetApp" extends its functionality
              to empower users with budget analysis tools, providing real-time
              information on current and overdue bills, among other features. My
              long-term vision for the application includes comprehensive
              analysis of currency, gold, and crypto markets, aiming to assist
              users in both budget management and investment decisions.
            </p>
          </Columns.Column>
          <Columns.Column>
            <figure>
              <img src={imgWeb} alt="about me" />
            </figure>
          </Columns.Column>
        </Columns>
        <Columns>
          <Columns.Column>
            {" "}
            <p className={classes.description}>
              In essence, I am passionate about every facet of development,
              reveling in the opportunity to create, innovate, and tackle
              challenges. I am always open to embracing new technologies and
              experiences that further enrich my skills and contribute to the
              success of each project. Feel free to explore my portfolio and get
              in touch if you'd like to discuss collaboration or explore
              potential opportunities. I look forward to the exciting journey
              ahead in the world of Front-End Development!
            </p>
          </Columns.Column>
        </Columns>
      </Container>
    </section>
  );
}

export default AboutMe;
