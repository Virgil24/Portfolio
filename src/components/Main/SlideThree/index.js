import React from 'react';
import './styles.scss';

const SlideThree = ({ onMouseChangeColor, backgroundColor, onMouseLeftHover }) => {
  const onHover = () => {
    onMouseChangeColor();
  };
  const leftHover = () => {
    onMouseLeftHover();
  };
  const styles = {
    backgroundColor,
    transition: '3s',
  };
  return (
    // must be read as :  backgroundColor:backgroundColor
    // just add : onMouseOut={leftHover} on div to get the onlefthover change color
    <div className="slide__three" onMouseOver={onHover} style={styles}>
      <div className="contain__two">
        <div className="contain__two__div">1Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam corrupti placeat possimus nemo eos tempora, unde perspiciatis provident obcaecati necessitatibus, praesentium cum dicta dolore, tenetur a accusamus officiis neque. Voluptate?</div>
        <div className="contain__two__div">2Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, beatae. Cupiditate libero, eligendi corrupti consectetur a laborum eaque? Eligendi odit non tempora quibusdam enim beatae ipsum magni expedita. Maiores, vero.</div>
      </div>
      <div className="contain__one__div">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus doloribus odio quia assumenda ex reiciendis deleniti minus repellat illum consequuntur enim earum atque a eveniet, sunt tempora dolorem sequi dolor! 3Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus neque illo consequuntur similique molestias delectus cupiditate magni nam nobis quos laborum praesentium officiis, facilis maxime dolores amet temporibus corrupti voluptate.
      </div>
    </div>
  );
};

export default SlideThree;
