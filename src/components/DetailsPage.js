import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchCovidDataByCountry } from '../redux/Api';
import Header from './Header';

const DetailsPage = () => {
  const { name } = useParams();
  const [state, setState] = useState(null);
  useEffect(() => {
    const getDetails = async () => {
      const countryDetails = await fetchCovidDataByCountry(name);
      setState(countryDetails);
    };
    getDetails();
  }, []);

  return (
    <>
      {
      state ? (
        <div className="detail-container">
          <div>
            <Header />
            <img src={state.countryInfo.flag} alt="country flag" />
            <h2 className="name">{state.name}</h2>
            <h2 className="name">
              <span>Population: </span>
              {state.population.toLocaleString()}
            </h2>
            <h2 className="name">
              <span>Class: </span>
              {state.cases.toLocaleString()}
            </h2>
            <h2 className="name">
              <span>Active: </span>
              {state.active.toLocaleString()}
            </h2>
            <h2 className="name">
              <span>Tests: </span>
              {state.tests.toLocaleString()}
            </h2>
            <h2>{}</h2>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )
    }
    </>
  );
};

export default DetailsPage;
