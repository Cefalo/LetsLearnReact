import React from "react"

const Button = ({ enabled }) => {
  return (
    <button
      type="button"
      className={`btn btn-outline-${enabled ? "primary" : "success"}`}
      disabled={!enabled}
    >
      {enabled ? "Book Now" : "Booked"}
    </button>
  )
}

export default Button
