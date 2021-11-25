import React from "react";
import styled from "styled-components";

import { useFormik } from "formik";

const Form = () => {
  const validate = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Email Required";
    }
    if (!values.phone) {
      errors.phone = "Phone Required";
    }
    if (!values.subject) {
      errors.subject = "Subject Required";
    }
    if (!values.message) {
      errors.message = "Message Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validate,
    onSubmit: () => {},
  });

  console.log(formik.errors);

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <FormBox>
        <FormInput
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
          name="name"
          type="text"
          placeholder="Your Name"
        />
        <ErrorInput>
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </ErrorInput>
      </FormBox>
      <FormBox>
        <FormInput
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          name="email"
          type="text"
          placeholder="Your Email"
        />
        <ErrorInput>
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </ErrorInput>
      </FormBox>
      <FormBox>
        <FormInput
          onChange={formik.handleChange}
          value={formik.values.phone}
          onBlur={formik.handleBlur}
          name="phone"
          type="text"
          placeholder="Phone"
        />
        <ErrorInput>
          {formik.touched.phone && formik.errors.phone ? (
            <div>{formik.errors.phone}</div>
          ) : null}
        </ErrorInput>
      </FormBox>
      <FormBox>
        <FormInput
          onChange={formik.handleChange}
          value={formik.values.subject}
          onBlur={formik.handleBlur}
          name="subject"
          type="text"
          placeholder="Subject"
        />
        <ErrorInput>
          {formik.touched.subject && formik.errors.subject ? (
            <div>{formik.errors.subject}</div>
          ) : null}
        </ErrorInput>
      </FormBox>
      <TextAreaWrapper>
        <FormTextarea
          onChange={formik.handleChange}
          value={formik.values.message}
          onBlur={formik.handleBlur}
          name="message"
          type="text"
          placeholder="Message"
        />
        <ErrorInput>
          {formik.touched.message && formik.errors.message ? (
            <div>{formik.errors.message}</div>
          ) : null}
        </ErrorInput>
      </TextAreaWrapper>
      <Button type="submit">Submit</Button>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`;

const FormBox = styled.div``;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

const ErrorInput = styled.div`
  color: red;
  margin-top: 0.5rem;
`;

const TextAreaWrapper = styled(FormBox)`
  grid-column: 1/ 3;

  @media (max-width: 1100px) {
    grid-column: 1;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  min-height: 200px;
  padding: 1rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 70%;
  border: 1px solid ${({ theme }) => theme.mainColor};
  background-color: transparent;
  color: ${({ theme }) => theme.mainColor};
  padding: 1rem 2rem;
  cursor: pointer;

  @media (max-width: 1100px) {
    width: 100%;
  }

  &:hover {
    background-color: ${({ theme }) => theme.mainColor};
    color: ${({ theme }) => theme.white};
  }
`;

export default Form;
