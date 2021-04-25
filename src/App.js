import React from 'react';
import { Routes } from './routes';
import Nav from './components/Nav';
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