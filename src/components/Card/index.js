import React from 'react';

import ico from '../../assets/ico-location.svg'

const Card = ({image, title, hasIco}) => {
    return (
       <li>
            <div className="container-image">
                <img src={image} alt={image}/>
            </div>
            <footer>
                { hasIco ? <img src={ico} alt="location"/> : false }
                <p>{ title }</p>
            </footer>
        </li>
    );
}

export default Card;