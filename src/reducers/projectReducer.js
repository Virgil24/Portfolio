import { CHANGE__COLOR__HOVER, LEFT_HOVER } from '../actions/slideThree';

export const initialState = {
  backgroundColor: 'black',
  visibility: 'hidden',
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
    default:
      return state;
  }
};

export default projectReducer;
