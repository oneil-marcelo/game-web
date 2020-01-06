import React, { useEffect, useState} from 'react';

import { Link } from 'react-router-dom';

import './style.css';

import ws from '../../services/WebService';

import Header from '../../components/Header';

import Card from '../../components/Card'


export default function Company(){
   
    const [ companies, setCompanies ] = useState([]);

    useEffect(() => { loadCompanies() }, []);

    async  function loadCompanies(){

        const response = await ws.get('company');

        setCompanies(response.data)
    }

    return(
        <div className="main-container">
           <Header title="GAME WEB"/>
            <ul>
                { companies.map( company => (
                   <Link  key={ company.id} to={{ pathname: `/gameweb/${company.name}`, state: { company }}}>
                        <Card image={company.image} title={company.location} hasIco />
                    </Link>
                )) }
            </ul>
        </div>
    );
}
