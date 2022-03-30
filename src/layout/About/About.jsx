import React from 'react';
import {
  AboutWrapper,
  CardsWrapper,
  CardsCol,
  CardImage,
  CardItem,
  CardLabel,
  CardText,
  Header,
} from './About.style';
import { svgModulesToComponents } from '../../util/svgModulesToComponents';
import SideHeader from '../../common/SideHeader/SideHeader';

const svgModules = import.meta.globEager('../../images/about/*.svg');
const icons = svgModulesToComponents(svgModules);

// What Will You Get From This Book?
const About = () => {
  return (
    <AboutWrapper id="about-wrapper">
      <Header>
        <SideHeader
          subtitle="About"
          title="Curabitur condimentum tortor a dui tempor"
          description="Etiam faucibus sem eget malesuada tristique. In vehicula interdum eleifend. Proin placerat vehicula odio, quis euismod odio auctor"
        />
      </Header>

      <CardsWrapper>
        <CardsCol>
          <CardItem>
            <CardImage>
              {icons[0]()}
            </CardImage>
            <CardLabel>Taciti sociosqu</CardLabel>
            <CardText>Maecenas orci libero, vehicula eu volutpat ac, ultrices id tellus integer quis ligula</CardText>
          </CardItem>
          <CardItem>
            <CardImage>
              {icons[1]()}
            </CardImage>
            <CardLabel>Taciti sociosqu</CardLabel>
            <CardText>Maecenas orci libero, vehicula eu volutpat ac, ultrices id tellus integer quis ligula</CardText>
          </CardItem>

        </CardsCol>

        <CardsCol>
          <CardItem>
            <CardImage>
              {icons[2]()}
            </CardImage>
            <CardLabel>Taciti sociosqu</CardLabel>
            <CardText>Maecenas orci libero, vehicula eu volutpat ac, ultrices id tellus integer quis ligula</CardText>
          </CardItem>
          <CardItem>
            <CardImage>
              {icons[3]()}
            </CardImage>
            <CardLabel>Taciti sociosqu</CardLabel>
            <CardText>Maecenas orci libero, vehicula eu volutpat ac, ultrices id tellus integer quis ligula</CardText>
          </CardItem>
        </CardsCol>
      </CardsWrapper>

    </AboutWrapper>
  );
};

export default About;
