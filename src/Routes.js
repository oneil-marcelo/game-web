import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/Main';
import Detail from './pages/Detail';

export default function Routes(){

    return(
        <BrowserRouter>
            <Route path="/" exact  component = { Main }/>
            <Route path="/company/:name" component = { Detail }/>
        </BrowserRouter>
    );

}