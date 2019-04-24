import React from "react"
import Search from "./Search"
import items from "../data"
import Card from "./Card"

const Home = () => {
  return (
    <div>
      {/*Search*/}
      <Search />
      <hr className="my-4" />
      <div className="row">
        {items.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Home
