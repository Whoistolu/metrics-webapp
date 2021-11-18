/* eslint-disable */

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsFillBackspaceFill } from 'react-icons/bs';

const HomePage = () => {
  const europeanCountries = useSelector(state => state.continentReducer)
  return (
    <>
    <nav className="nav-bar">
      <div className="navbar-container"> 
        <Link className="nav-button" to="/">
          <BsFillBackspaceFill className="icon" />
        </Link>
        <h1 className="europe">{'EuropeanCountries'}</h1>
      </div>
    </nav>
    <div className="main-container">
    <section className="country-container">
      {
      europeanCountries.map((item) => (
        <div className="container">
          <h2 className="name">{item.country}</h2>
          <img src={item.countryFlag} alt="country flag" />
          <h2>{item.id}</h2>
        </div>
      ))
      }
       </section>
    </div>
    </>
  );
};

export default HomePage;
