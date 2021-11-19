import React from "react";
import styled from "styled-components";
import Title from "../Atoms/Title";
import { posts } from "../../Assets/data";
import BlogPost from "../Molecules/BlogPost";

const Blog = () => {
  return (
    <Wrapper>
      <Title className="center">Recent Articles</Title>
      <div className="container">
        <BlogInner>
          {posts.map((item) => (
            <BlogPost {...item} />
          ))}
        </BlogInner>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BlogInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export default Blog;
