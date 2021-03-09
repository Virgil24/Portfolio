import React from 'react';
import SlideOne from 'src/components/Main/SlideOne';
import SlideOneToTwo from 'src/components/Main/SlideOneToTwo';
import Nav from 'src/components/Main/Nav';
import SlideTwo from 'src/containers/SlideTwo';
import projectsData from 'src/data/projects';


import './styles.scss';

const Main = () => (
  <div>
    <Nav />
  <div className="outer-wrapper">
    <div className="wrapper">
      <SlideOne />
      <SlideOneToTwo />
      <SlideTwo projects={projectsData} />
      <div className="slide three" />
      <div className="slide four" />
    </div>
  </div>
  </div>
);

export default Main;
 