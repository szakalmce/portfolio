import React from "react";
import styled from "styled-components";

const BlogPost = ({ title, author, img, date }) => {
  return (
    <Wrapper>
      <Image src={`/img/${img}`} />
      <Content>
        <h4>
          {date} - BY {author}
        </h4>
        <h2>{title}</h2>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 1100px) {
    margin-bottom: 5rem;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  position: absolute;
  top: 80%;
  left: 0;
  width: 80%;
  transform: translateX(10%);
  background-color: ${({ theme }) => theme.white};
  padding: 1rem;
  min-height: 100px;
  box-shadow: 2px 2px 10px 4px rgba(0, 0, 0, 0.2);
  text-align: center;

  h4 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.fontLightColor};
    font-weight: 300;
    margin-bottom: 0.5rem;
  }
`;

export default BlogPost;
