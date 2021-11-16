import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/detailspage">
            <DetailsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
