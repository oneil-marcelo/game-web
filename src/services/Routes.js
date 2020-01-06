import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Company from '../pages/Company';
import Game from '../pages/Game';


export default function Routes(){

    return(
        <BrowserRouter>
            <Route path="/gameweb" exact component = { Company }/>
            <Route path="/gameweb/:company" component = { Game }  />
        </BrowserRouter>
    );

}