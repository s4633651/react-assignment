import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import HomePage from './home-page/HomePage';
import OtherPage from './OtherPage';



type Props = {};

const Layout = (props: Props) => {

  return (
  <>
    <Header/>
  <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/OtherPage' element={<OtherPage/>} />
     
  </Routes>
  </>);
};

export default Layout;
