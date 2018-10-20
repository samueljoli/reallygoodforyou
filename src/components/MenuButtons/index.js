import React from 'react';
import styled from 'styled-components';

const HomeDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 30px;
`;

const WorkDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 30px;
`;

const AboutDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 30px;
`;

const ContactDiv = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 30px;
`;

const MenuButtons = () => (
  <div>
    <HomeDiv>
      <span> Home </span>
    </HomeDiv>
    <WorkDiv>
      <span> Work </span>
    </WorkDiv>
    <AboutDiv>
      <span> About </span>
    </AboutDiv>
    <ContactDiv>
      <span> Contact </span>
    </ContactDiv>
  </div>
);

export default MenuButtons;
