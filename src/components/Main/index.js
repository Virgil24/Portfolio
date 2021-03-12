import React from 'react';
import Cursor from 'src/components/Main/Cursor';
import SlideOne from 'src/components/Main/SlideOne';
import SlideOneToTwo from 'src/components/Main/SlideOneToTwo';
import Nav from 'src/components/Main/Nav';
import SlideTwo from 'src/components/Main/SlideTwo';
import SlideThree from 'src/components/Main/SlideThree';
import projectsData from 'src/data/projects';


import './styles.scss';

const Main = () => (
  <div>
    <Cursor />
    <Nav />
  <div className="outer-wrapper">
    <div className="outer-wrapper__wrapper">
      <SlideOne />
      <SlideTwo projects={projectsData} />
      <SlideOneToTwo />
      <SlideThree />
      <div className="slide four" />
    </div>
  </div>
  </div>
);

export default Main;