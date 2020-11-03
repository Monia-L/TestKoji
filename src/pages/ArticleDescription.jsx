import React from "react";
import { Link } from "react-router-dom";

const ArticleDescription = ({ history }) => {
  const { data } = history.location.state;

  return (
    <li key={data.id} className="containerArticle">
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <Link to="/">Revenir à la liste</Link>
    </li>
  );
};

export default ArticleDescription;
