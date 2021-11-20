import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const europeanCountries = useSelector((state) => state.continentReducer);
  const filteredCountries = europeanCountries.filter((country) => {
    const newVar = country.country.toLowerCase().includes(search);
    return newVar;
  });
  return (
    <>
      <Header />
      <div className="main-container">
        <input className="search" placeholder="Search Country.." value={search} onChange={(e) => setSearch(e.target.value)} />
        <section className="country-container">
          {
            filteredCountries.map((item) => (
              <Link key={item.id} to={`/country/${item.country}`} className="container">
                <h2 className="name">{item.country}</h2>
                <h2 className="critical">{item.critical}</h2>
                <img src={item.countryFlag} alt="country flag" />
                <h2>{item.id}</h2>
              </Link>
            ))
          }
        </section>
      </div>
    </>
  );
};

export default HomePage;
