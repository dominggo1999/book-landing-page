import React from 'react';
import { ReactSVG } from 'react-svg';
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
              <ReactSVG src="/images/about/geometric.svg" />
            </CardImage>
            <CardLabel>Taciti sociosqu</CardLabel>
            <CardText>Maecenas orci libero, vehicula eu volutpat ac, ultrices id tellus integer quis ligula</CardText>
          </CardItem>
          <CardItem>
            <CardImage>
              <ReactSVG src="/images/about/geometric-shape.svg" />
            </CardImage>
            <CardLabel>Taciti sociosqu</CardLabel>
            <CardText>Maecenas orci libero, vehicula eu volutpat ac, ultrices id tellus integer quis ligula</CardText>
          </CardItem>

        </CardsCol>

        <CardsCol>
          <CardItem>
            <CardImage>
              <ReactSVG src="/images/about/waves.svg" />
            </CardImage>
            <CardLabel>Taciti sociosqu</CardLabel>
            <CardText>Maecenas orci libero, vehicula eu volutpat ac, ultrices id tellus integer quis ligula</CardText>
          </CardItem>
          <CardItem>
            <CardImage>
              <ReactSVG src="/images/about/wizard.svg" />
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
