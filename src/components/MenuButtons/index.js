import React from 'react';
import styled from 'styled-components';
import TypedSpan from './TypedSpan';
import { isMobile } from 'react-device-detect';

const HomeDiv = styled.div`
  position: absolute;
  font-family: 'Roboto Mono', monospace;
  font-size: 1.5em;
  top: 0;
  left: 0;
  margin: 30px;
`;

const WorkDiv = styled.div`
  position: absolute;
  font-size: 1.5em;
  font-family: 'Roboto Mono', monospace;
  top: 0;
  right: 0;
  margin: 30px;
`;

const AboutDiv = styled.div`
  position: absolute;
  font-size: 1.5em;
  font-family: 'Roboto Mono', monospace;
  bottom: 0;
  left: 0;
  margin: 30px;
`;

const ContactDiv = styled.div`
  position: absolute;
  font-size: 1.5em;
  font-family: 'Roboto Mono', monospace;
  bottom: 0;
  right: 0;
  margin: 30px;
`;

const MenuButtons = () => {
  return (
    <div>
      <HomeDiv>
        <TypedSpan
          string={`${!isMobile ? 'really.good.for.you' : 'r.g.f.y'}`}
        />
      </HomeDiv>
      <WorkDiv>
        <TypedSpan
          string="projects"
        />
      </WorkDiv>
      <AboutDiv>
        <TypedSpan
          string="who.tf"
        />
      </AboutDiv>
      <ContactDiv>
        <TypedSpan
          string="hit.me"
        />
      </ContactDiv>
    </div>
  );
};

export default MenuButtons;
