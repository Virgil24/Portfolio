import React from 'react';
import Cursor from 'src/components/Main/Cursor';
import SlidePresentation from 'src/components/Main/SlidePresentation';
import Nav from 'src/containers/Nav';
import SlideProjects from 'src/components/Main/SlideProjects';
import SlideContact from 'src/components/Main/SlideContact';
import SlideAbout from 'src/containers/SlideAbout';
import projectsData from 'src/data/projects';

import './styles.scss';

const Main = ({ loading }) => (
  <div>
    <Cursor />
    <Nav />
    <div className="outer-wrapper">
      <div className="outer-wrapper__wrapper">
        <SlidePresentation />
        <SlideProjects projects={projectsData} />
        <SlideAbout />
        <SlideContact />
      </div>
    </div>
  </div>
);

export default Main;
