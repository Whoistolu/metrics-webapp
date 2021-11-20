import fetchCovidData from '../Api';

export const GET_CONTINENT = 'metrics-webapp/continent/GET_CONTINENT';
const initialState = [];

export const getContinent = () => async (dispatch) => {
  let theContinent = await fetchCovidData();
  theContinent = theContinent.filter((item) => item.continent === 'Europe');
  const mappedData = theContinent.map(({ countryInfo: { _id: id, flag }, ...item }) => ({
    country: item.country,
    cases: item.cases,
    active: item.active,
    test: item.tests,
    population: item.population,
    countryFlag: flag,
    countryID: id,
  }));
  dispatch({
    type: GET_CONTINENT,
    payload: mappedData,
  });
};

const continentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTINENT:
      return action.payload;
    default: return state;
  }
};

export default continentReducer;
