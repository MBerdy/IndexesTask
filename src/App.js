import React from 'react';
import Groups from './components/Groups'
import './App.css';
import "./Media.css"




function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          Logotype
            </div>
        <button className="btn">Connect wallet</button>
      </header>
      <section className="main">
        <h1 className="title">All Indexes</h1>
        <Groups />
      </section>
    </div>
  );

}

export default App;
