import React from 'react';
import {
  ChapterWrapper,
  ChapterList,
  ChapterItem,
  ChapterNumber,
  ChapterContent,
  ChapterTitle,
  ChapterDescription,
} from './Chapters.style';
import SectionHeader from '../../common/SectionHeader/SectionHeader';

const Chapters = () => {
  return (
    <ChapterWrapper id="chapters">
      <SectionHeader
        subtitle="Chapters"
        title="Praesent fermentum cursus risus a sodales"
      />
      <ChapterList>
        <ChapterItem>
          <ChapterNumber>1</ChapterNumber>
          <ChapterContent>
            <ChapterTitle>Lorem, ipsum dolor.</ChapterTitle>
            <ChapterDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod fugiat incidunt eaque blanditiis consequuntur totam!
            </ChapterDescription>
          </ChapterContent>
        </ChapterItem>
        <ChapterItem>
          <ChapterNumber>2</ChapterNumber>
          <ChapterContent>
            <ChapterTitle>Lorem, ipsum dolor.</ChapterTitle>
            <ChapterDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod fugiat incidunt eaque blanditiis consequuntur totam!
            </ChapterDescription>
          </ChapterContent>
        </ChapterItem>
        <ChapterItem>
          <ChapterNumber>3</ChapterNumber>
          <ChapterContent>
            <ChapterTitle>Lorem, ipsum dolor.</ChapterTitle>
            <ChapterDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod fugiat incidunt eaque blanditiis consequuntur totam!
            </ChapterDescription>
          </ChapterContent>
        </ChapterItem>
        <ChapterItem>
          <ChapterNumber>4</ChapterNumber>
          <ChapterContent>
            <ChapterTitle>Lorem, ipsum dolor.</ChapterTitle>
            <ChapterDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod fugiat incidunt eaque blanditiis consequuntur totam!
            </ChapterDescription>
          </ChapterContent>
        </ChapterItem>
        <ChapterItem>
          <ChapterNumber>5</ChapterNumber>
          <ChapterContent>
            <ChapterTitle>Lorem, ipsum dolor.</ChapterTitle>
            <ChapterDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod fugiat incidunt eaque blanditiis consequuntur totam!
            </ChapterDescription>
          </ChapterContent>
        </ChapterItem>
        <ChapterItem>
          <ChapterNumber>6</ChapterNumber>
          <ChapterContent>
            <ChapterTitle>Lorem, ipsum dolor.</ChapterTitle>
            <ChapterDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod fugiat incidunt eaque blanditiis consequuntur totam!
            </ChapterDescription>
          </ChapterContent>
        </ChapterItem>
        <ChapterItem>
          <ChapterNumber>6</ChapterNumber>
          <ChapterContent>
            <ChapterTitle>Lorem, ipsum dolor.</ChapterTitle>
            <ChapterDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod fugiat incidunt eaque blanditiis consequuntur totam!
            </ChapterDescription>
          </ChapterContent>
        </ChapterItem>
        <ChapterItem>
          <ChapterNumber>6</ChapterNumber>
          <ChapterContent>
            <ChapterTitle>Lorem, ipsum dolor.</ChapterTitle>
            <ChapterDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod fugiat incidunt eaque blanditiis consequuntur totam!
            </ChapterDescription>
          </ChapterContent>
        </ChapterItem>
        <ChapterItem>
          <ChapterNumber>6</ChapterNumber>
          <ChapterContent>
            <ChapterTitle>Lorem, ipsum dolor.</ChapterTitle>
            <ChapterDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod fugiat incidunt eaque blanditiis consequuntur totam!
            </ChapterDescription>
          </ChapterContent>
        </ChapterItem>
      </ChapterList>
    </ChapterWrapper>
  );
};

export default Chapters;
