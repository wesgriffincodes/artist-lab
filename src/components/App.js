import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styles from './App.css';
import Nav from './Nav/Nav';
import Search from './Search/Search';
import Artist from './Artist/Artist';

const App = () => {

  return (
    <Router>
      <div className={styles.App}>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/search' exact component={Search} />
          <Route path='/search/:id' component={Artist} />
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => (
  <div>
    <h1>Artist search</h1>
    <Link to={'/search'}>Start your search</Link>
  </div>
);

export default App;
  
