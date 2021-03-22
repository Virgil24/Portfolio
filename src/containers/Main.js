import { connect } from 'react-redux';
import Main from '../components/Main';

const mapStateToProps = (state) => ({
  loading: state.projectReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
