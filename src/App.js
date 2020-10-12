import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom' 


import components from './components'
import Routes from './routes'

const { Sidebar } = components

export default function App() {
  return (
    <>
      <Router>
        <Sidebar />
      
        <Routes />
      </Router>
    </>
  );
}
