import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <li key={article.id} className="containerArticle">
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <Link
        to={{
          pathname: "/article-description",
          state: { data: article },
        }}
      >
        Voir l'article
      </Link>
    </li>
  );
};

export default ArticleCard;
