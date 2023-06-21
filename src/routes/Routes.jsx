import React from 'react';
import { Route, Routes as Routing } from 'react-router-dom';
import NotFound from '../pages/errors/NotFound';
import HelloPage from '../pages/app/HelloPage';

const Routes = (props) => {
  return (
    <Routing>
      <Route>
        <Route path='/' element={<HelloPage/>} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routing>
  );
}

export default Routes;
