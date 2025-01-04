import React, { useState } from 'react';
import ArticleForm from './components/ArticleForm';
import ArticleCard from './components/ArticleCard';
import './styles/App.css';

const App = () => {
  const [articles, setArticles] = useState([]); // State to store articles
  const [expandedArticle, setExpandedArticle] = useState(null); // State for expanded article

  const handleFormSubmit = (newArticle) => {
    setArticles([...articles, newArticle]); // Add the new article
  };

  const handleCardClick = (article) => {
    setExpandedArticle(article); // Set the clicked article as expanded
  };

  const handleCloseExpanded = () => {
    setExpandedArticle(null); // Close the expanded view
  };

  return (
    <div className="app-container">
      <ArticleForm onSubmit={handleFormSubmit} />
      <div className="articles-container">
        {articles.map((article, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(article)}
            style={{ cursor: 'pointer' }}
          >
            <ArticleCard {...article} />
          </div>
        ))}
      </div>

      {/* Expanded Article View */}
      {expandedArticle && (
        <div className="expanded-article">
          <div className="expanded-content">
            <h2>{expandedArticle.title}</h2>
            <img
              src={expandedArticle.bannerImage}
              alt={`${expandedArticle.title} banner`}
            />
            <p>{expandedArticle.body}</p>
            <button onClick={handleCloseExpanded}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
