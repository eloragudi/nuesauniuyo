import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/home';
import Historypage from './pages/history';
import Eventspage from './pages/events';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/history' element={<Historypage />}></Route>
        <Route path='/events' element={<Eventspage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
