import { connect } from 'react-redux';
import SlideFour from '../components/Main/SlideFour';

import { fetchLigueData } from '../actions/slideFour';

const mapStateToProps = (state) => ({
  ligueData: state.slideTwo.ligueData,
  toggle: state.slideTwo.toggle,
});

const mapDispatchToProps = (dispatch) => ({
  fetchLigueData: () => {
    dispatch(fetchLigueData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SlideFour);
