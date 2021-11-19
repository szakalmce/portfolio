import React from "react";
import styled from "styled-components";
import Title from "../Atoms/Title";
import { dataServices } from "../../Assets/data";
import ServicesItem from "../Molecules/ServicesItem";

const Services = () => {
  return (
    <ServicesWrapper>
      <Title className="center">My Services</Title>
      <div className="container">
        <Servicesinner>
          {dataServices.map((item) => (
            <ServicesItem {...item} />
          ))}
        </Servicesinner>
      </div>
    </ServicesWrapper>
  );
};

const ServicesWrapper = styled.div`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.bgDark};
  text-align: center;
  color: ${({ theme }) => theme.white};
`;

const Servicesinner = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export default Services;
