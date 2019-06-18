import React from 'react';

const CardDetails = ({match}) => {
    console.log(match);
    return <h2>Here for apartment # {match.params.id} details</h2>;
};

export default CardDetails;