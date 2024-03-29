import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
const handleClick = () =>{
    window.open('https://github.com/squireaintready')
  }

const Hero = () => (

  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Sam's World.
        </SectionTitle>
        <SectionText>
          Javascript developer who enjoys clever & elegant solutions to everyday problems. Specializes in React/Node.
        </SectionText>
        <Button onClick={handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;