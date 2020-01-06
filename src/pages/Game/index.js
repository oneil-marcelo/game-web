import React, { useEffect, useState} from 'react';

import './style.css';
import ws from '../../services/WebService';
import Header from '../../components/Header';
import Card from '../../components/Card';


export default function Game ({ match, location }) {

    const [ company, setCompany ] = useState({});

    const [ games, setGames ] = useState([]);

    useEffect(() => {loadGames()} , []);

    async function loadGames(){
       
        const { data } = await ws.get(`game/${match.params.company}`);
        
        let { company } = data[0];

        setCompany(company)

        setGames(data);
    }

    return (
        <div className="main-container">
            <Header />
            <div className="header-detail">
                <img src={company.image} alt={company.name} />
                <h2>{company.fullname}</h2>
            </div>
            <ul>
                { games.map( game => (
                   <Card key={ game.id} image={ game.image } title={ game.name } />
                ))}
            </ul>
            
        </div>
    );
}