import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link}
    from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Tdd from './Tdd';

import Component1 from './Component1';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Router>
      <Routes>
          <Route path='/tdd' element={<Tdd/>} />
          <Route path='/comp' element={<Component1/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
