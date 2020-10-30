// import React, { useState, useEffect } from "react";
// import Axios from "axios";
// import Article from "./Article";

// const DetailsArticle = () => {
//   const [currentArticle, setCurrentArticle] = useState([]);

//   const getDataCurrentArticle = async (e) => {
//     const idPost = e.target.dataset.id;
//     const post = await Axios.get(
//       `https://jsonplaceholder.typicode.com/posts/${idPost}`
//     );
//     const { data } = post;
//     setCurrentArticle(data);
//   };
//   console.log(currentArticle, "currentArticle");

//   return <Article currentArticle={getDataCurrentArticle} />;
// };

// export default DetailsArticle;
