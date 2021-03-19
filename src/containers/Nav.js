import { connect } from 'react-redux';
import Nav from '../components/Main/Nav';
import { handleToggleOnClick } from '../actions/nav';

const mapStateToProps = (state) => ({
  toggle: state.projectReducer.toggle,
});

const mapDispatchToProps = (dispatch) => ({
  handleToggleOnClick: () => {
    dispatch(handleToggleOnClick());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
