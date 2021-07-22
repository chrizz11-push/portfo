import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { Container } from '../../globalStyles';
import { homeObjOne, homeObjThree } from './Data';
import styled from 'styled-components';

function Services() {
  return (
    <Wrapper>
      <Pricing />
      {/* <InfoSection {...homeObjOne} /> */}
      {/* <InfoSection {...homeObjThree} /> */}
    </Wrapper>
  );
}

export default Services;

const Wrapper = styled.div`
display:flex;
`
