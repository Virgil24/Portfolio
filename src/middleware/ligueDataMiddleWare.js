import axios from 'axios';
import {
  FETCH_LIGUE_DATA,
  saveLigueData,
} from '../actions/slideFour';

const recipesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_LIGUE_DATA:
      axios.get('https://api.football-data.org/v2/competitions/CL/matches', { 'Access-Control-Allow-Origin': '*' })
        .then((response) => {
          store.dispatch(saveLigueData(response.header));
          console.log(response.data);
        })
        .catch((error) => console.log(error));
      break;
    default:
      next(action);
  }
};

export default recipesMiddleware;
