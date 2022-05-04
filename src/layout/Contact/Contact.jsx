import React from 'react';
import {
  ContactWrapper,
  FormSection,
  Header,
} from './Contact.style';
import SideHeader from '../../common/SideHeader/SideHeader';
import ContactForm from '../../common/ContactForm/ContactForm';
import useAnimate from '../../hooks/useAnimate';
import { slideUp } from '../../animations/single';

const Contact = () => {
  const [contactRef, contactAnimationControls] = useAnimate({ threshold: 0.2 });

  return (
    <ContactWrapper id="contact">
      <Header>
        <SideHeader
          subtitle="Contact"
          title=" Mauris blandit imperdiet scelerisque."
          description="Praesent scelerisque dolor gravida sapien tincidunt consequat. Nam ut sagittis augue. Nam felis felis, cursus nec cursus eu, vestibulum accumsan neque."
        />
      </Header>
      <FormSection
        ref={contactRef}
        variants={slideUp}
        initial="hidden"
        animate={contactAnimationControls}
      >
        <ContactForm />
      </FormSection>
    </ContactWrapper>
  );
};

export default Contact;
