import React from 'react';
import {
  ContactWrapper,
  FormSection,
  Header,
} from './Contact.style';
import SideHeader from '../../common/SideHeader/SideHeader';
import ContactForm from '../../common/ContactForm/ContactForm';

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <Header>
        <SideHeader
          subtitle="Contact"
          title=" Mauris blandit imperdiet scelerisque."
          description="Praesent scelerisque dolor gravida sapien tincidunt consequat. Nam ut sagittis augue. Nam felis felis, cursus nec cursus eu, vestibulum accumsan neque."
        />
      </Header>
      <FormSection>
        <ContactForm />
      </FormSection>
    </ContactWrapper>
  );
};

export default Contact;
