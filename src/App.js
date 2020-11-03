import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ArticlesList from "./pages/ArticlesList";
import ArticleDescription from "./pages/ArticleDescription";

import "./asset/app.scss";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={ArticlesList} />
          <Route exact path="/article/:id" component={ArticleDescription} />
        </Switch>
      </>
    </BrowserRouter>
  );
};
export default App;
