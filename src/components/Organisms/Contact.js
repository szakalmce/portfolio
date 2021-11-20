import React from "react";
import styled from "styled-components";
import Title from "../Atoms/Title";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosPin } from "react-icons/io";

const Contact = () => {
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
            <Form>
              <InputWrapper>
                <FormInput name="name" placeholder="Your Name" />
              </InputWrapper>
              <InputWrapper>
                <FormInput name="phone" placeholder="Phone" />
              </InputWrapper>
              <InputWrapper>
                <FormInput name="email" placeholder="Email" />
              </InputWrapper>
              <InputWrapper>
                <FormInput name="subject" placeholder="Subject" />
              </InputWrapper>
              <TextAreaWrapper>
                <FormTextarea name="message" placeholder="Message" />
              </TextAreaWrapper>
              <SubmitButton>Send Message</SubmitButton>
            </Form>
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

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`;

const InputWrapper = styled.div``;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

const TextAreaWrapper = styled(InputWrapper)`
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

const SubmitButton = styled.button`
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
