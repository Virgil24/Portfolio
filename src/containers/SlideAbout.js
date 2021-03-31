import { connect } from 'react-redux';
import slideAbout from '../components/Main/SlideAbout';
import { launchAnimation } from '../actions/slideAbout';

const mapStateToProps = (state) => (
  {
    animate: state.projectReducer.animate,
  });

const mapDispatchToProps = (dispatch) => ({
  launchAnimation: () => {
    dispatch(launchAnimation());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(slideAbout);
