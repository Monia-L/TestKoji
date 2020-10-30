import React, { useEffect, useState } from "react";
import Axios from "axios";
import ArticleCard from "./ArticleCard";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    const posts = await Axios.get("https://jsonplaceholder.typicode.com/posts");
    const { data } = posts;
    setArticles(data);
  };
  useEffect(() => {
    getArticles();
  }, []);
  return (
    <>
      <ul className="containerArticles">
        {articles.map((article) => (
          <ArticleCard article={article} />
        ))}
      </ul>
    </>
  );
};

export default ArticlesList;
