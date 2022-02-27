import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Catalog from '../pages/Catalog';
import CreatorsPage from '../pages/Creator';
import Detail from '../pages/Detail';
import Home from '../pages/Home';

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/:category/search/:keyword'} element={<Catalog />} />
      <Route path={'/:id'} element={<Detail />} />
      <Route path={'/creators'} element={<CreatorsPage />} />
    </Routes>
  );
}

export default CustomRoutes;