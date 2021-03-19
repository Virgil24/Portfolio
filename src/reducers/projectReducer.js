import { CHANGE__COLOR__HOVER, LEFT_HOVER } from '../actions/slideThree';
import { HANDLE_TOGGLE } from '../actions/nav';

export const initialState = {
  backgroundColor: 'black',
  visibility: 'hidden',
  toggle: true,
};

const projectReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE__COLOR__HOVER:
      return {
        ...state,
        backgroundColor: 'white',
        visibility: 'visible',

      };
    case LEFT_HOVER:
      return {
        ...state,
        backgroundColor: 'black',
      };
    case HANDLE_TOGGLE:
      return {
        ...state,
        toggle: !state.toggle,
      };
    default:
      return state;
  }
};

export default projectReducer;
