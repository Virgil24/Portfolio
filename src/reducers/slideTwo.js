import { HANDLE__VIDEO__LAUNCHER } from '../actions/slideTwo';

const initialState = {
  class: 'container__video',
  toggle: true,
};

const SlideTwo = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE__VIDEO__LAUNCHER:
      return {
        ...state,
        class: action.active,
        toggle: !state.toggle,
      };
    default:
      return state;
  }
};

export default SlideTwo;
