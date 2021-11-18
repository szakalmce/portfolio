import React from "react";
import styled from "styled-components";
import img from "../../Assets/img/about_img.png";
import Button from "../Atoms/Button";
import Title from "../Atoms/Title";

const About = () => {
  return (
    <AboutWrapper>
      <div className="container">
        <AboutInner>
          <AboutImageWrapper>
            <AboutImage src={img} alt="Tomasz Garbarz" />
            <AboutImageCaption>
              <h4>Tomasz Garbarz</h4>
              <h6>Frontend Developer</h6>
            </AboutImageCaption>
          </AboutImageWrapper>
          <AboutContentWrapper>
            <Title className="left">About Us</Title>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
              eligendi ab quo cum esse numquam quas corporis. Cum ratione quis,
              omnis odit quaerat laboriosam officia fuga vitae minima
              voluptatum, maiores cupiditate tempora a quia. Rem neque natus
              aspernatur reiciendis in!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
              tempora ex exercitationem nemo velit, corrupti voluptatem
              assumenda cum perspiciatis quas provident sint suscipit saepe
              porro. Alias dolorem consequatur possimus suscipit?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              blanditiis praesentium magni doloremque eveniet cumque
              perspiciatis similique sunt unde voluptatem voluptate adipisci,
              veritatis veniam maxime ab, voluptatum quas! Possimus eum
              reprehenderit molestiae, nihil aliquid ducimus recusandae
              consequuntur dolorem quasi. Iure placeat ducimus iste impedit! Ex
              alias possimus cum eveniet, molestiae qui asperiores officia
              tempora doloribus, iure laborum enim ut quis.
            </p>
            <AboutPersonalInfoWrapper>
              <h3>Personal Info</h3>
              <AboutPersonalInfoWrapperInner>
                <div>
                  <p>
                    <span>Name:</span> Tomasz Garbarz
                  </p>
                  <p>
                    <span>Age:</span> 30 Years
                  </p>
                  <p>
                    <span>Nationality:</span> Poland
                  </p>
                  <p>
                    <span>Freelance :</span> Available
                  </p>
                </div>
                <div>
                  <p>
                    <span>Adress: </span>Wielka Skotnica 14/74
                  </p>
                  <p>
                    <span>Phone: </span>516-588-463
                  </p>
                  <p>
                    <span>Skype: </span>Szakalmce
                  </p>
                  <p>
                    <span>E-mail: </span>tomasz.garbarz91@gmail.com
                  </p>
                </div>
              </AboutPersonalInfoWrapperInner>
              <Button>Download CV</Button>
            </AboutPersonalInfoWrapper>
          </AboutContentWrapper>
        </AboutInner>
      </div>
    </AboutWrapper>
  );
};

export const AboutWrapper = styled.div`
  margin: 5rem 0;
`;

export const AboutInner = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 5rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const AboutImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutImage = styled.img`
  border-radius: 50%;
  border: 10px solid ${({ theme }) => theme.fontLightColor};
  margin-bottom: 1rem;
  width: 100%;

  @media (max-width: 1100px) {
    width: 50%;
    align-self: center;
  }
`;

export const AboutImageCaption = styled.div`
  text-align: center;

  h4 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  h6 {
    color: ${({ theme }) => theme.fontLightColor};
    font-size: 1rem;
    font-weight: 300;
  }
`;

export const AboutContentWrapper = styled.div`
  p {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.fontLightColor};
    line-height: 1.5;

    @media (max-width: 1100px) {
      font-size: ${({ theme }) => theme.fonts.smp};
    }
  }
`;

export const AboutPersonalInfoWrapper = styled.div`
  h3 {
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-weight: 300;
    margin-top: 2rem;
  }
`;

export const AboutPersonalInfoWrapperInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 1100px) {
    margin-bottom: 1rem;
  }

  p {
    font-weight: 300;
    color: ${({ theme }) => theme.black};

    span {
      font-weight: bold;
    }
  }
`;

export default About;
