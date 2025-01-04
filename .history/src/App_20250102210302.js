import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleForm from './components/ArticleForm';
import ArticleCard from './components/ArticleCard';
import ContentSection from './components/ContentSection';
import './styles/App.css';

const App = () => {

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

      <ContentSection
                title="First Section"
                paragraph="This is the first content section with an image on the left."
                image="https://via.placeholder.com/400"
                reverse={false}
            />
            <ContentSection
                title="Second Section"
                paragraph="This is the second content section with an image on the right."
                image="https://via.placeholder.com/400"
                reverse={true}
            />

            
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

