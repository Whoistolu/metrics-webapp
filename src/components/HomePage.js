/* eslint-disable */

import { useSelector } from "react-redux";

const HomePage = () => {
  const europeanCountries = useSelector(state => state.continentReducer)
  // if (!europeanCountries) return <h1>loading</h1>
  return (
    <>
    <nav className="nav-bar">
      <div className="navbar-container"> 
        <button>{'<'}</button>
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
