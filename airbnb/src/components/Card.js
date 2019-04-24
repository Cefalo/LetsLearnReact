import React from "react"
import Button from "./Button"
import { ThemeContext, themes } from "../theme"

const Card = ({ item }) => {
  const {
    type,
    place,
    title,
    price,
    image: { src },
    available
  } = item

  return (
    <ThemeContext.Consumer>
      {theme => (
        <div
          className="card"
          style={{ backgroundColor: themes[theme].background }}
        >
          <img src={src} className="card-img-top" alt="" />
          <div className="card-body">
            <div
              className="card-type"
              style={{ color: themes[theme].foreground }}
            >
              {type} · {place}
            </div>
            <h5
              className="card-title"
              style={{ color: themes[theme].foreground }}
            >
              {title}
            </h5>
            <p
              className="card-text"
              style={{ color: themes[theme].foreground }}
            >
              {price} per night - Free cancellation
            </p>
            <Button enabled={available} />
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default Card
