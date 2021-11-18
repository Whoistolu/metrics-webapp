/* eslint-disable */

import { useSelector } from "react-redux";

const HomePage = () => {
  const europeanCountries = useSelector(state => state.continentReducer)
  if (!europeanCountries) return <h1>loading</h1>
  return (
    <>
      {
      europeanCountries.map((item) => (
        <div>
          <h2>{item.country}</h2>
          <h2>case: {item.description1}</h2>
          <img src={item.countryFlag} alt="country flag" />
          <h2>active: {item.description2}</h2>
          <h2>test: {item.description3}</h2>
          <h2>population: {item.description4}</h2>
          <h2>{item.id}</h2>
        </div>
      ))
      }
    </>
  );
};

export default HomePage;
