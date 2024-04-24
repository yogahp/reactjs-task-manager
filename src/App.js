import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header'; // Correct path to Header component
import MainContent from './MainContent'; // Correct path to MainContent component
import Footer from './Footer'; // Correct path to Footer component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <MainContent />
          </Route>
          {/* Define more routes here if needed */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
