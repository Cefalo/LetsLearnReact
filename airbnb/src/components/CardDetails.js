import React from 'react';
import {connect} from "react-redux";

const CardDetails = ({match, apartments}) => {
    console.log(match);
    const apartmentId = match.params.id;
    const selectedCard = apartments.find(apartment => apartment.id == apartmentId);
    console.log(selectedCard);
    return (
        <div>
            <img src={selectedCard.image.src}
                 className="card-img-top" alt=""/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        apartments: state.apartments
    }
};

export default connect(mapStateToProps)(CardDetails);