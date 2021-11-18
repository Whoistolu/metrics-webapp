const baseUrl = 'https://disease.sh/v3/covid-19/countries';

const fetchCovidData = async () => {
  const response = await fetch(baseUrl);
  const result = await response.json();
  return result;
};

export default fetchCovidData;
