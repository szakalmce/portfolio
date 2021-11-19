import React from "react";
import styled from "styled-components";
import { courses, skills } from "../../Assets/data";
import Title from "../Atoms/Title";
import CoursesItem from "../Molecules/CoursesItem";
import SkillsItem from "../Molecules/SkillsItem";

const Skills = () => {
  return (
    <SkillsWrapper>
      <Title className="center">Education & Skills</Title>
      <div className="container">
        <SkillsInner>
          <SkillsCourses>
            {courses.map((item) => (
              <CoursesItem {...item} />
            ))}
          </SkillsCourses>
          <SkillsBars>
            {skills.map((item) => (
              <SkillsItem {...item} />
            ))}
          </SkillsBars>
        </SkillsInner>
      </div>
    </SkillsWrapper>
  );
};

const SkillsWrapper = styled.div`
  margin: 5rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillsInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 5rem;
  align-items: center;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const SkillsCourses = styled.div`
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  padding: 1rem;
`;

const SkillsBars = styled.div`
  width: 100%;
`;

export default Skills;
