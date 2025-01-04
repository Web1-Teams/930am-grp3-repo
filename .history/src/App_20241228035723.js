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
    setExpandedArticle(article); // Open the clicked article
  };

  const handleCloseExpanded = (e) => {
    if (e.target.className === 'expanded-article') {
      setExpandedArticle(null); // Close if clicked outside the content
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
            style={{ cursor: 'pointer' }}
          >
            <ArticleCard {...article} />
          </div>
        ))}
      </div>

      {expandedArticle && (
        <div className="expanded-article" onClick={handleCloseExpanded}>
          <div className="expanded-content">
            <img
              src={expandedArticle.bannerImage}
              alt={`${expandedArticle.title} banner`}
              className="expanded-banner-img" // Styled for fixed size
            />
            <h2>{expandedArticle.title}</h2>
            <p>{expandedArticle.body}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
