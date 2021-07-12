import React from 'react'
import Nav from './homePage/Nav'
import CategoriesSec from './homePage/CategoriesSec';
import './styles/main.scss';
import Home from './homePage/Home';
import SmartWatches from './recommendations/SmartWatches';

function App() {
  return (
    <div className="app">
      <Nav/>
      <CategoriesSec />
      <Home />
      <SmartWatches />
    </div>
  );
}

export default App;
