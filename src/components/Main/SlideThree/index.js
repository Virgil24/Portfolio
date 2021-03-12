import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './styles.scss';

const SlideThree = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="slide__three">
      <div className="contain__two">
        <div className="contain__two__div" data-aos="fade-down" data-aos="fade-left">1Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam corrupti placeat possimus nemo eos tempora, unde perspiciatis provident obcaecati necessitatibus, praesentium cum dicta dolore, tenetur a accusamus officiis neque. Voluptate?</div>
        <div className="contain__two__div" data-aos="fade-up" >2Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, beatae. Cupiditate libero, eligendi corrupti consectetur a laborum eaque? Eligendi odit non tempora quibusdam enim beatae ipsum magni expedita. Maiores, vero.</div>
      </div>
      <div className="contain__one__div" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus doloribus odio quia assumenda ex reiciendis deleniti minus repellat illum consequuntur enim earum atque a eveniet, sunt tempora dolorem sequi dolor! 3Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus neque illo consequuntur similique molestias delectus cupiditate magni nam nobis quos laborum praesentium officiis, facilis maxime dolores amet temporibus corrupti voluptate.
      </div>
    </div>
  );
};

export default SlideThree;
