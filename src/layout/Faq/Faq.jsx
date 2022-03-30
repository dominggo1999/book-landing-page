import React from 'react';
import short from 'short-uuid';
import { FaqWrapper, Questions, Answer } from './Faq.style';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import { faqs } from '../../data/faqs';
import Accordion from '../../common/Accordion/Accordion';

const Faq = () => {
  return (
    <FaqWrapper id="faq">
      <SectionHeader
        title="Frequently asked questions"
        subtitle="FAQ"
      />
      <Questions>
        {
          faqs?.length > 0 && faqs.map((item) => {
            return (
              <Accordion
                key={short.generate()}
                header={`${item.question} ?`}
              >
                <Answer>{item.answer}</Answer>
              </Accordion>
            );
          })
        }
      </Questions>
    </FaqWrapper>
  );
};

export default Faq;
