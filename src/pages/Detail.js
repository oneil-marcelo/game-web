import React, { useEffect, useState } from 'react';

import ws from '../services/WebService';

export default function Detail({ match }) {

    const [ games, setGames] = useState([]);

    useEffect(() => { loadGames() }, [match.params.name]);

    async function loadGames(){

        const response = await ws.get(`game/${match.params.name}`);

        setGames(response.data);

    }

    return(
        <div>
            { games.map( game => (
                <p key={game.id}>{ game.name }</p>
            )) }
        </div>
    );
}