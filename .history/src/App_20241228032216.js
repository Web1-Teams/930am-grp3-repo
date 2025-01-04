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
    if (expandedArticle === article) {
      setExpandedArticle(null); // Close if already expanded and double-clicked
    } else {
      setExpandedArticle(article); // Open the clicked article
    }
  };

  return (
    <div className="app-container">
      <ArticleForm onSubmit={handleFormSubmit} />
      <div className="articles-container">
        {articles.map((article, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(article)}
            onDoubleClick={() => setExpandedArticle(null)} // Close on double-click
            style={{ cursor: 'pointer' }}
          >
            <ArticleCard {...article} expanded={expandedArticle === article} />
          </div>
        ))}
      </div>

      {expandedArticle && (
        <div className="expanded-article">
          <div className="expanded-content">
            <h2>{expandedArticle.title}</h2>
            <img
              src={expandedArticle.bannerImage}
              alt={`${expandedArticle.title} banner`}
              className="expanded-banner-img" // Styled for fixed size
            />
            <p>{expandedArticle.body}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
