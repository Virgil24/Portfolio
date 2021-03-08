import { connect } from 'react-redux';
import SlideTwo from 'src/components/Main/SlideTwo';

import { handleVideoLauncher } from '../actions/slideTwo';

const mapStateToProps = (state) => ({
  toggleClassName: state.slideTwo.class,
  toggle: state.slideTwo.toggle,
});

const mapDispatchToProps = (dispatch) => ({
  handleVideoLauncher: (active) => {
    dispatch(handleVideoLauncher(active));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SlideTwo);
