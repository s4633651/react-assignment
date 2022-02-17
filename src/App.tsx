import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';

const App = () => {


  return (
    <BrowserRouter>

      <Layout />
    </BrowserRouter>
  );
};

export default App;
