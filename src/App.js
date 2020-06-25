import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './pages/home/Home';
import ProfilePage from './pages/profile/Profile'
import FeedPage from './pages/feed/Feed';
import SearchPage from './pages/search/Search';
import Test from './pages/test/Test';
import './App.css';
import NavBar from './components/nav/Nav';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {

  return (
    <React.Fragment>
      <NavBar />
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/profile">
              <ProfilePage />
            </Route>
            <Route path="/feed">
              <FeedPage />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/test">
              <Test />
            </Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
    //React.Fragment allows it to compile.
  );
}

// You can think of these components as "pages"
// in your app.


