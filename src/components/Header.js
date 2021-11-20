import { Link, useMatch } from 'react-router-dom';
import { BsFillBackspaceFill } from 'react-icons/bs';

const Header = () => {
  const match = useMatch('/country/:name');
  return (
    <nav className="nav-bar">
      <div className="navbar-container">
        {match && (
          <Link className="nav-button" to="/">
            <BsFillBackspaceFill className="icon" />
          </Link>
        )}
        <div>
          <h1 className="europe">Covid 19 Data for</h1>
          <h2 className="europe-data">European Countries</h2>
        </div>
      </div>
    </nav>
  );
};

export default Header;
