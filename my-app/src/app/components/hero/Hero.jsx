'use client';
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import styled from "styled-components";

const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 5rem;
  h2 {
    color: var(--pink);
    font-size: 3rem;
    margin: 4rem 0;
  }
  @media (max-width: 1000px) {
    padding-bottom: 3rem;
  }
`;

const AboutMeContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  overflow: hidden;
  padding: 2.5rem 0;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export default function Hero() {
  return (
    <HeroContainer>
      <h2>About Me</h2>
      <AboutMeContainer>
        <AboutMe />
        <Skills />
      </AboutMeContainer>
    </HeroContainer>
  );
}
