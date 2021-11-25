import React from "react";
import styled from "styled-components";
import Title from "../Atoms/Title";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosPin } from "react-icons/io";

import { useFormik } from "formik";

import Form from "../Molecules/Form";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
      validate: (values) => {
        let errors = {};

        if (!values.name) {
          errors.name = "Required";
        }
        if (!values.phone) {
          errors.phone = "Reu";
        }

        return errors;
      },
    },
    onSubmit: (values) => {
      // console.log(JSON.stringify(values, null, 2));
    },
  });

  console.log(formik.errors);
  return (
    <Wrapper>
      <div className="container">
        <Image>
          <iframe
            style={{ width: "100%", height: "350px", border: "0" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.4624140536907!2d19.122978215905913!3d50.2459473099599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716c53f3509e72d%3A0xbde359cfdb21dc2!2sWielka%20Skotnica%2014C%2C%2041-400%20Mys%C5%82owice!5e0!3m2!1spl!2spl!4v1637423565978!5m2!1spl!2spl"
            loading="lazy"
            title="map"
          ></iframe>
        </Image>
        <ContactInner>
          <ContactInfo>
            <Title className="left">Contact Us</Title>
            <SubTitle>Let's Discuss Your project</SubTitle>
            <Info>
              <InfoItem>
                <BsFillTelephoneFill />
                <p>+5165884392</p>
              </InfoItem>
              <InfoItem>
                <AiOutlineMail />
                <p>tomasz.garbarz91@gmail.com</p>
              </InfoItem>
              <InfoItem>
                <IoIosPin />
                <p>Mysłowice 41-400, Wielka Skotnica 14/74</p>
              </InfoItem>
            </Info>
          </ContactInfo>
          <ContactForm>
            <Form />
          </ContactForm>
        </ContactInner>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: ${({ theme }) => theme.bgDark};
  padding: 5rem 0;
`;

const Image = styled.div`
  margin-bottom: 3rem;
`;

const ContactInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  color: ${({ theme }) => theme.white};

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div``;

const ContactForm = styled.div``;

const SubTitle = styled(Title)`
  display: block;
`;

const Info = styled.div``;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  svg {
    background-color: ${({ theme }) => theme.mainColor};
    padding: 0.75rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
  p {
    color: ${({ theme }) => theme.fontLightColor};
    font-size: 1.2rem;
  }
`;

export default Contact;
