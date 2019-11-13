import React from "react";
import "./app.scss";
import List from "../list/list";

const App = () => {
  return (
    <React.Fragment>
      <h2 className="articles">Articles</h2>
      <List />
    </React.Fragment>
  );
};

export default App;
