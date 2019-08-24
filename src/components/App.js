import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styles from './App.css';
import Nav from './Nav/Nav';
import Search from './Search/Search';
import Artist from './Artist/Artist';
import ReleaseDetail from './Releases/ReleaseDetail';
import SongDetail from './Songs/SongDetails';

const App = () => {

  return (
    <Router>
      <div className={styles.App}>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/search' exact component={Search} />
          <Route path='/search/:artistName/:id' component={Artist} />
          <Route path='/songs/:artistName/:title/:id' component={ReleaseDetail} />
          <Route path='/lyrics/:artistName/:title/:id' component={SongDetail} />
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
  
