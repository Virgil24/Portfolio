import { connect } from 'react-redux';
import SlideThree from '../components/Main/SlideThree';
import { onMouseChangeColor, onMouseLeftHover } from '../actions/slideThree';

const mapStateToProps = (state) => (
  {
    backgroundColor: state.projectReducer.backgroundColor,
    color: state.projectReducer.color,
    visibility: state.projectReducer.visibility,
  });

const mapDispatchToProps = (dispatch) => ({
  onMouseChangeColor: () => {
    dispatch(onMouseChangeColor());
  },
  onMouseLeftHover: () => {
    dispatch(onMouseLeftHover());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SlideThree);
