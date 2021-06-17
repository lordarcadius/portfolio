import React from 'react';
import { DiAndroid, DiTerminal } from 'react-icons/di';
import { SiJava, SiFirebase, SiGit } from 'react-icons/si';
import { RiFlutterFill } from 'react-icons/ri';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I've worked with multiple technologies as a developer to create my projects.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiAndroid size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Android</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Android Apps, ROMs <br />
            & Kernels
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <RiFlutterFill size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Flutter</ListTitle>
          <ListParagraph>
            Experience with <br />
            Flutter apps &
            Dart
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiJava size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Java</ListTitle>
          <ListParagraph>
            Experience with <br />
            developing apps
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiTerminal size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Scripting</ListTitle>
          <ListParagraph>
            Experience with <br />
            writing shell scripts
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Firebase</ListTitle>
          <ListParagraph>
            Experience in Firebase<br />
            for auth & database 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiGit size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Git</ListTitle>
          <ListParagraph>
            Experience with <br />
            Git commands & featurs
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
