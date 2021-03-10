import { HANDLE__VIDEO__LAUNCHER } from '../actions/slideTwo';
import { SAVE_LIGUE_DATA } from '../actions/slideFour';

const initialState = {
  class: 'container__video',
  toggle: true,
  ligueData: '',
};

const SlideTwo = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE__VIDEO__LAUNCHER:
      return {
        ...state,
        class: action.active,
        toggle: !state.toggle,
      };
    case SAVE_LIGUE_DATA:
      return {
        ...state,
        ligueData: action.ligueData,
      };
    default:
      return state;
  }
};

export default SlideTwo;
