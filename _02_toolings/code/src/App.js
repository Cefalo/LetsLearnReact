import React from "react";
import Search from "./components/Search";
import Card from "./components/Card";
import items from "./data";

const App = () => {
  console.log(items);
  return (
    <div className="container">
      {/*JUMBO TEXT*/}
      <div className="row">
        <div className="jumbotron">
          <h1 className="display-4">Thinking in React!</h1>
          <p className="lead">
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application, and React will efficiently
            update and render just the right components when your data changes.
          </p>
        </div>
      </div>
      {/*Search*/}
      <Search />
      <hr className="my-4" />
      <div className="row">
        {items.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
