import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection, Pricing } from '../../components';
import { Container, Contain } from '../../globalStyles';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne}/>
      {/* <InfoSection {...homeObjOne}/> */}

      {/* <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjFour} /> */}
    </>
  );
}

export default Home;
