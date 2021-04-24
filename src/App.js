import React from 'react';
import { Routes } from './routes';
import Nav from './components/Nav';
//this isn't in the depenencies so when I npm install it doesn't install, you probably installed it globally on your machine
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
}