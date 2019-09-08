import React, { useEffect, useState} from 'react';

import { Link } from 'react-router-dom';

import ws from '../services/WebService';

export default function Main(){
   
    const [ companies, setCompanies ] = useState([]);

    useEffect(() => { loadCompanies() }, []);

    async  function loadCompanies(){

        const response = await ws.get('company');

        setCompanies(response.data)
    }

    return(
        <div className="main-container">
           <h1>
               <Link to="/">GAME</Link>
           </h1>
            <ul>
                { companies.map( company => (
                    <li  key={ company.id}>
                        <Link to={{pathname: `/company/${company.name}`}}>
                            <div className="container-image-company">
                                <img src={company.image} alt={company.name}/>
                            </div>
                            <footer>
                                <img src="https://image.flaticon.com/icons/svg/34/34250.svg" alt="location"/>
                                <p>{ company.name }</p>
                            </footer>
                        </Link>
                    </li>
                )) }
            </ul>
        </div>
    );
}
