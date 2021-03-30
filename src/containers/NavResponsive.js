import { connect } from 'react-redux';
import NavResponsive from '../components/Main/NavResponsive';
import { handleToggleOnClick } from '../actions/nav';

const mapStateToProps = (state) => ({
  toggle: state.projectReducer.toggle,
});

const mapDispatchToProps = (dispatch) => ({
  handleToggleOnClick: () => {
    dispatch(handleToggleOnClick());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavResponsive);
