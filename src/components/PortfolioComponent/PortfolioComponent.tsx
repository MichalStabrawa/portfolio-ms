import classes from "./PortfolioComponent.module.scss";
import {
  Container,
  Columns,
  Card,
  Box,
  Media,
  Image,
  Heading,
  Content,
} from "react-bulma-components";

import imgFeed from "../../assets/feed.png";

export type PortfolioProps = {
  title: string;
};

const PortfolioComponent = ({ title }: PortfolioProps) => {
  return (
    <section className={classes.portfolio}>
      <Container>
        <Columns>
          <Heading>{title}</Heading>
        </Columns>
        <Columns>
          <Columns.Column>
            <Card>
              <Card.Content>
                <Media>
                  <Media.Item renderAs="figure" align="left">
                    <Image className='9by16'  size={128} alt="64x64" src={imgFeed} />
                  </Media.Item>
                  <Media.Item>
                    <Heading size={4}>Feed Donkay template</Heading>
                   
                  </Media.Item>
                </Media>
                <Content>
                  Work on Single Page Aplication for a customer from the Great
                  Britain. Technology and tools Html5, Css3, Bootstrap, Java
                  Script, Vue.js, Nuxt.js, RWD, Photoshop. I work with team few
                  developers in Scrum and Agile. Cooperation with the largest UX
                  company in Poland. I am responsible for the functionality and
                  appearance of internet applications. I work in the Git . I am
                  also responsible for Responsive Web Design in projects. Unit
                  test. <a>@bulmaio</a>.<a href="#1">#css</a>{" "}
                  <a href="#2">#responsive</a>
                  <br />
                  <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </Content>
              </Card.Content>
            </Card>
          </Columns.Column>
          <Columns.Column>
            <Card>
              <Card.Image src={imgFeed}></Card.Image>
            </Card>
          </Columns.Column>
        </Columns>
      </Container>
    </section>
  );
};

export default PortfolioComponent;
