import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi there, I am Kanish Mohariya and I am a full stack web developer, with 3 months of experience as a Intern at Trickysys IT Solutions and I am  looking for web development job opportunities to kickstart my carrier.
      </SectionText>
      <Button onClick={()=> window.location="mailto:mohariyabunty@gmail.com"} >Hire Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;