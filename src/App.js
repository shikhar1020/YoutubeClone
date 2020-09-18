import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from "./header"
import Sidebar from "./sidebar"
import Recommnedations from "./recommendations"
import SearchPage from "./searchPage"

function App() {
  return (
    <div className="App">

      <Router>
        <Header/>
          <Switch>

            <Route path="/search/:searchTerm">
              <div className="app_page">
                <Sidebar/>
                <SearchPage/>
              </div>  
            </Route>

            <Route path="/">
              <div className="app_page">
                <Sidebar/>
                <Recommnedations/>
              </div>              
            </Route>

          </Switch>

        </Router>

      {/*      
      <Header/>
      <div className="app_page">
        <Sidebar/>
        <Recommnedations/>

      </div>
      */}

    </div>
  );
}

export default App;
