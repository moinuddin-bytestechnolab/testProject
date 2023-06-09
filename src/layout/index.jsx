import React from 'react';
import { Route, Routes } from "react-router-dom";
const Private = React.lazy(() => import('./private'));
const Dashboard = React.lazy(() => import('../pages/dashboard'));
const Product = React.lazy(() => import('../pages/product'));


const index = () => {
  return (
    <Routes>
      <Route path='/' element={<Private/>}>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/product' element={<Product/>}/>
      </Route>
    </Routes>
  )
}

export default index