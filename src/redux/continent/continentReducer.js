import fetchCovidData from '../Api';

const GET_CONTINENT = 'GET_CONTINENT';
const initialState = [];

export const getContinent = () => async (dispatch) => {
  let theContinent = await fetchCovidData();
  theContinent = theContinent.filter((item) => item.continent === 'Europe');
  const mappedData = theContinent.map(({ countryInfo: { _id: id, flag }, ...item }) => ({
    country: item.country,
    description1: item.cases,
    description2: item.active,
    description3: item.tests,
    description4: item.population,
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
