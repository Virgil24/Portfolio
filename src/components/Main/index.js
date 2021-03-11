import React from 'react';
import SlideOne from 'src/components/Main/SlideOne';
import SlideOneToTwo from 'src/components/Main/SlideOneToTwo';
import Nav from 'src/components/Main/Nav';
import SlideTwo from 'src/components/Main/SlideTwo';
import SlideFour from 'src/components/Main/SlideFour';
import projectsData from 'src/data/projects';


import './styles.scss';

const Main = () => (
  <div>
    <Nav />
  <div className="outer-wrapper">
    <div className="outer-wrapper__wrapper">
      <SlideOne />
      <SlideOneToTwo />
      <SlideTwo projects={projectsData} />
      <SlideFour />
      <div className="slide three" />
      <div className="slide four" />
    </div>
  </div>
  </div>
);

export default Main;
 