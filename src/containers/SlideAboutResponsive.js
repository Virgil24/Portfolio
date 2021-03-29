import { connect } from 'react-redux';
import slideAboutResponsive from '../components/Main/SlideAboutResponsive';
import { launchAnimation } from '../actions/slideTest';

const mapStateToProps = (state) => (
  {
    animate: state.projectReducer.animate,
  });

const mapDispatchToProps = (dispatch) => ({
  launchAnimation: () => {
    dispatch(launchAnimation());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(slideAboutResponsive);
