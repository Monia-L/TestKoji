import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ArticlesList from "./ArticlesList";
import ArticleDescription from "./ArticleDescription";

import "./app.scss";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <div className="container">
          <Route exact path="/" component={ArticlesList} />
        </div>
        <Route
          exact
          path="/article-description"
          component={ArticleDescription}
        />
      </>
    </BrowserRouter>
  );
};
export default App;
