import React from 'react';
import './App.css';

import Header from "./header"
import Sidebar from "./sidebar"
import Recommnedations from "./recommendations"

function App() {
  return (
    <div className="App">
      
      <Header/>
      <div className="app_page">
        <Sidebar/>

        <Recommnedations/>

      </div>

    </div>
  );
}

export default App;
