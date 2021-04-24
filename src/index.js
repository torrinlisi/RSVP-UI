import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  //make the React.StrictMode just <> and </>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);