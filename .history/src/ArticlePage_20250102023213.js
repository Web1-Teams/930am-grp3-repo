import React from 'react';
import { useParams } from 'react-router-dom';

const ArticlePage = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find((art) => art.id.toString() === id);

  if (!article) return <p>Article not found.</p>;

  return (
    <div>
      <img src={article.bannerImage} alt={article.title} />
      <h1>{article.title}</h1>
      <p><strong>Category:</strong> {article.category}</p>
      <p><strong>Author:</strong> {article.authorName}</p>
      <p><strong>Body:</strong></p>
      <div>{article.body}</div>
    </div>
  );
};

export default ArticlePage;
