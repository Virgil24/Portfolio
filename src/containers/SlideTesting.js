import { connect } from 'react-redux';
import SlideTesting from '../components/Main/SlideTesting';
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

export default connect(mapStateToProps, mapDispatchToProps)(SlideTesting);
