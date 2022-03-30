import React, {
  useRef,
  useState,
  useEffect,
} from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

import {
  FormWrapper,
  TopSection,
  BottomSection,
  SubmitButton,
  FieldWrapper,
  ErrorMessageWrapper,
  FormActions,
  SuccessMessage,
} from './ContactForm.style';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'must be longer than 3 characters')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  message: Yup.string()
    .min(3, 'must be longer than 3 characters')
    .max(500, 'must be shorter than 500 characters')
    .required('Required'),
});

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const messageTimerRef = useRef();

  const handleSubmit = (val, { resetForm }) => {
    resetForm();

    setSuccess(true);
    messageTimerRef.current = setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      clearInterval(messageTimerRef.current);
    };
  }, []);

  return (
    <FormWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <TopSection>
            <FieldWrapper>
              <Field
                type="text"
                required
                placeholder="Enter Your Name"
                name="name"
                autoComplete="off"
              />
              <ErrorMessageWrapper>
                <ErrorMessage
                  name="name"
                />
              </ErrorMessageWrapper>
            </FieldWrapper>
            <FieldWrapper>
              <Field
                type="email"
                required
                placeholder="Enter Your Email"
                name="email"
                autoComplete="off"
              />
              <ErrorMessageWrapper>
                <ErrorMessage
                  name="email"
                />
              </ErrorMessageWrapper>
            </FieldWrapper>
          </TopSection>
          <BottomSection>
            <FieldWrapper>
              <Field
                as="textarea"
                type="text"
                required
                placeholder="Enter Your Message"
                name="message"
                autoComplete="off"
              />
              <ErrorMessageWrapper>
                <ErrorMessage
                  name="message"
                />
              </ErrorMessageWrapper>
            </FieldWrapper>
          </BottomSection>
          <FormActions>
            <SubmitButton type="submit">Submit</SubmitButton>
            {
              success && (
                <SuccessMessage>Thank you for your message</SuccessMessage>
              )
            }
          </FormActions>
        </Form>
      </Formik>
    </FormWrapper>
  );
};

export default ContactForm;
