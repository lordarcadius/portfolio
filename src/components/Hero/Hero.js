import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
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
          This is Vipul Jha from New Delhi, India. I am the co-founder of <b><a href="https://hexoncode.com" target="_blank">Hexoncode</a></b>. I develop Apps, Kernels, ROMs, and Scripts.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://www.vipuljha.com/files/resume.pdf';
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;