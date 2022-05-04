import React from 'react';
import short from 'short-uuid';
import { FaqWrapper, Questions, Answer } from './Faq.style';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import { faqs } from '../../data/faqs';
import Accordion from '../../common/Accordion/Accordion';
import { basicStaggerNoDelay } from '../../animations/stagger';
import useAnimate from '../../hooks/useAnimate';
import { slideUp } from '../../animations/single';

const Faq = () => {
  const [faqRef, faqAnimationControls] = useAnimate({ threshold: 0.2 });

  return (
    <FaqWrapper id="faq">
      <SectionHeader
        title="Frequently asked questions"
        subtitle="FAQ"
      />
      <Questions
        ref={faqRef}
        variants={basicStaggerNoDelay}
        initial="hidden"
        animate={faqAnimationControls}
      >
        {
          faqs?.length > 0 && faqs.map((item) => {
            return (
              <Accordion
                variants={slideUp}
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
