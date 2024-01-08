import { skillset, Learning } from "../../data/data";
import VisuallyHidden from "./VisuallyHidden";
import styled from "styled-components";

const SkillsContent = styled.div`
  max-width: 400px;
  width: 100%;
  height: 400px;
  padding: 2rem;
  position: relative;

  @media (max-width: 768px) {
    max-width: 320px;
    height: 360px;
    padding: 1rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 25%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--pink);

    @media (max-width: 768px) {
      top: 23%;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 47%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--pink);
  }

  h4 {
    color: var(--pink);
    font-size: 1.5rem;
    margin: 0 0 1rem 0;
    text-align: center;
  }

  h5 {
    color: var(--pink);
    font-size: 1rem;
    margin: 0;
    font-weight: 500;
    text-align: center;
  }

  section {
    margin: 1.2rem 0;
    flex-wrap: wrap;
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      margin: 1rem 0;
    }

    &::before {
      content: "";
      position: absolute;
      top: 79%;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--pink);

      @media (max-width: 768px) {
        top: 81%;
      }
    }
  }
`;

const SkillContainer = styled.div`
  position: relative;
  flex: 1 0 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 60px;
  width: 100%;
  z-index: 2;

  p {
    text-align: center;
    color: var(--light-green);
    margin: 10px 0 0 0;
  }

  &:hover {
    p {
      color: var(--pink);
    }
  }
`;

const Skill = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid var(--light-green);
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

  ${SkillContainer}:hover & {
    transform: rotate(45deg) scale(1.2);
  }
`;

const SkillImage = styled.div`
  position: absolute;
  top: -6%;
  right: 6.5%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
  height: 47px;
  width: 47px;
  border-radius: 50%;
  border: none;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  img {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 50%;
  }
  ${SkillContainer}:hover & {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    top: -4%;
    left: -2%;
  }
`;

const LearningImgs = styled(SkillImage)`
  left: 10%;
  top: -5%;
`;

export default function Skills() {
  return (
    <SkillsContent>
      <VisuallyHidden>
        <p>
          Primary Skills: ReactJS, Javascript, Typescript, NextJs, NodeJs,
          styled components, sass, handcrafted css, HTML, Git, Github, AWS
          discovery day
        </p>
        <p>Learning the basics: Testing with Jest, Python</p>
        <p>Next step: SQL, database and networking fundamentals </p>
      </VisuallyHidden>
      <h4>Skillset</h4>

      <section>
        {skillset.map((skill, i) => (
          <SkillContainer key={i}>
            <Skill />
            <SkillImage>
              <img src={skill.img} alt={skill.name} />
            </SkillImage>
            <p>{skill.name}</p>
          </SkillContainer>
        ))}
      </section>

      <h5>currently learning...</h5>
      <section>
        {Learning.map((skill, i) => (
          <SkillContainer key={i}>
            <Skill />
            <LearningImgs>
              <img src={skill.img} alt={skill.name} />
            </LearningImgs>
            <p>{skill.name}</p>
          </SkillContainer>
        ))}
      </section>
    </SkillsContent>
  );
}
