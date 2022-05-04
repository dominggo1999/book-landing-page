import React, { useState } from 'react';
import { IoIosArrowDown, IoMdClose } from 'react-icons/io';
import {
  Header,
  Content,
  AccordionContainer,
  Label,
  Icon,
  StyledAccordion,
} from './Accordion.style';

const Accordion = ({ header, children, ...rest }) => {
  const [opened, setOpened] = useState(false);
  const toggleContent = () => {
    setOpened(!opened);
  };

  return (
    <StyledAccordion {...rest}>
      <AccordionContainer
        className="accordion"
      >
        <Header
          opened={opened}
          onClick={toggleContent}
        >
          <Label>
            {header}
          </Label>
          <Icon>
            {
              opened
                ? <IoMdClose />
                : <IoIosArrowDown />
            }
          </Icon>
        </Header>
        <Content
          className={opened ? 'opened' : null}
        >
          {children}
        </Content>
      </AccordionContainer>
    </StyledAccordion>
  );
};

export default Accordion;
