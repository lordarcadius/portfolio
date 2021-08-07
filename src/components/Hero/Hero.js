import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          Hey there, This is Vipul Jha aka lordarcadius. I am an Android & Flutter developer who also works on ROMs, Kernels, & Scripts.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/resume.pdf';
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
