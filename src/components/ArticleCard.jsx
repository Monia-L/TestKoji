import React from "react";
import { useHistory } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const history = useHistory();

  const goToCard = (id) => {
    history.push({
      pathname: `/article/${id}`,
      state: { data: article },
    });
  };
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <button onClick={() => goToCard(article.id)}> Voir l'article </button>
    </>
  );
};

export default ArticleCard;
