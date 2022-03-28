import React from 'react';
import {
  AboutWrapper,
  DescriptionWrapper,
  DescriptionSubtitle,
  DescriptionTitle,
  DescriptionText,
  CardsWrapper,
  CardsCol,
  CardImage,
  CardItem,
  CardLabel,
  CardText,
} from './About.style';
import { svgModulesToComponents } from '../../util/svgModulesToComponents';

const svgModules = import.meta.globEager('../../images/about/*.svg');
const icons = svgModulesToComponents(svgModules);

// What Will You Get From This Book?
const About = () => {
  return (
    <AboutWrapper id="about-wrapper">
      <DescriptionWrapper>
        <DescriptionSubtitle>
          About
        </DescriptionSubtitle>
        <DescriptionTitle>
          Mauris blandit imperdiet scelerisque.
        </DescriptionTitle>
        <DescriptionText>
          Praesent scelerisque dolor gravida sapien tincidunt consequat. Nam ut sagittis augue. Nam felis felis, cursus nec cursus eu, vestibulum accumsan neque.
        </DescriptionText>

      </DescriptionWrapper>

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
