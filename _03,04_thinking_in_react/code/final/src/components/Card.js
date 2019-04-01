import React from 'react'
import Button from './Button'

const Card = ({item: house}) => {
  const {
    id,
    type,
    place,
    title,
    price,
    image: {src},
    available
  } = house

  return (
    <div className="card">
      <img src={src}
           className="card-img-top" alt=""/>
      <div className="card-body">
        <div className="card-type">{type} · {place}</div>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{price} per night - Free cancellation</p>
        <Button enabled={available}/>
      </div>
    </div>
  )
}


export default Card
