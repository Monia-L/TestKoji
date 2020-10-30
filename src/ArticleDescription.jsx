import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const ArticleDescription = () => {
  let article = useLocation();

  return (
    <li key={article.state.data.id} className="containerArticle">
      <h1>{article.state.data.title}</h1>
      <p>{article.state.data.body}</p>
      <Link to={"/"}>Revenir à la liste</Link>
    </li>
  );
};

export default ArticleDescription;
