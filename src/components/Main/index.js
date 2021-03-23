import React from 'react';
import Cursor from 'src/components/Main/Cursor';
import SlideOne from 'src/components/Main/SlideOne';
import SlideOneToTwo from 'src/components/Main/SlideOneToTwo';
import Nav from 'src/containers/Nav';
import SlideTwo from 'src/components/Main/SlideTwo';
import SlideFive from 'src/components/Main/SlideFive';
import TestingSlide from 'src/containers/SlideTesting';
import projectsData from 'src/data/projects';

import './styles.scss';

const Main = ({ loading }) => (
  <div>
    <Cursor />
    <Nav />
    <div className="outer-wrapper">
      <div className="outer-wrapper__wrapper">
        <SlideOne />
        <SlideTwo projects={projectsData} />
        <TestingSlide />
        <SlideFive />
      </div>
    </div>
  </div>
);

export default Main;
