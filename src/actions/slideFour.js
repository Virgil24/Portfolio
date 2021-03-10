export const FETCH_LIGUE_DATA = 'FETCH_LIGUE_DATA';
export const SAVE_LIGUE_DATA = 'SAVE_LIGUE_DATA';

export const fetchLigueData = () => ({
  type: FETCH_LIGUE_DATA,
});
export const saveLigueData = (ligueData) => ({
  type: SAVE_LIGUE_DATA,
  ligueData,
});
