import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';

const App = () => {
  return (
    <div id='app'>
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/movies' component={MoviesPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
