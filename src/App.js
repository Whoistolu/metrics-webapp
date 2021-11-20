import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/country/:name" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
