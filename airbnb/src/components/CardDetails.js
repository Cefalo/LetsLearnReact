import React from 'react';
import getCard from '../model/CardReducer';

const CardDetails = ({match}) => {
    console.log(match);
    const selectedCard = getCard(match.params.id);
    console.log(selectedCard);
    return (
        <div>
            <img src={selectedCard.image.src}
                 className="card-img-top" alt=""/>
        </div>
    );
};

export default CardDetails;