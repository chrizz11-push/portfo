import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection, Pricing } from '../../components';
import { Contain } from '../../globalStyles';


function Home() {
  return (
    <>
      <Contain id="Testimony">
      <InfoSection {...homeObjThree} />
      </Contain>
      {/* <InfoSection {...homeObjOne} /> */}
      {/* <InfoSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjFour} /> */}
    </>
  );
}

export default Home;
