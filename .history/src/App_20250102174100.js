import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleForm from './components/ArticleForm';
import ArticleCard from './components/ArticleCard';
import './styles/App.css';

const App = () => {
        <Router>
            <Routes>
                <Route path="/articles" element={<Articles />} />
                <Route path="/questions" element={<Questions />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
  const [articles, setArticles] = useState([]); 
  const [expandedArticle, setExpandedArticle] = useState(null); 

  const handleFormSubmit = (newArticle) => {
    setArticles([...articles, newArticle]); 
  };

  const handleCardClick = (article) => {
    setExpandedArticle(article);
  };

  const handleCloseExpanded = (e) => {
    if (e.target.className === 'expanded-article') {
      setExpandedArticle(null); 
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
              className="expanded-banner-img" 
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

