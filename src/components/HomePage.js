import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './Header';

const HomePage = () => {
  const europeanCountries = useSelector((state) => state.continentReducer);
  return (
    <>
      <Header />
      <div className="main-container">
        <section className="country-container">
          {
      europeanCountries.map((item) => (
        <Link key={item.id} to={`/country/${item.country}`} className="container">
          <h2 className="name">{item.country}</h2>
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
