import React, { useState } from 'react';
import ArticleForm from '../../components/ArticleForm/ArticleForm';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import ContentSection from '../../components/ContentSection/ContentSection';
import Hero from '../../components/Hero/Hero';

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const [expandedArticle, setExpandedArticle] = useState(null);

  const handleFormSubmit = (newArticle) => {
    setArticles([...articles, newArticle]);
  };

  const handleCardClick = (article) => {
    setExpandedArticle(article);
  };

  const handleCloseExpanded = (e) => {
    if (e.target.className === 'expanded-article55') {
      setExpandedArticle(null);
    }
  };

  return (
    <div className="">
      <Hero
        title="Welcome to Articles"
        paragraph="
          Here you can find articles on pet care, helpful tips for looking after your pets, 
          and amusing stories that celebrate the bond with our animal companions."
        backgroundImage="/images/high-angle-elderly-people-with-cat.jpg"
      />

      <div className="">
        <ContentSection
          title="How can I post an article?"
          paragraph="You can post as many articles as you like, by filling this form and publishing them,
          so other users can see it and interact with them"
          image="/images/friends-enjoying-their-holiday-together.jpg"
          reverse={true}
        />
        
        {/* The ArticleForm is now always visible */}
        <ArticleForm onSubmit={handleFormSubmit} />

        <ContentSection
          title="Where can I find articles?"
          paragraph="Articles will be displayed on this section, 
          where you can find information on pet care, useful tips for pet owners,
          and entertaining stories. You can scroll through to see every article available,
          ensuring you don't miss any advice or fun anecdotes about our furry friends."
          image="/images/hands-holding-downloading-mobile-phone-with-coffee-cup-beverage.jpg"
          reverse={false}
        />

        <div className="articles-container55">
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
          <div className="expanded-article55" onClick={handleCloseExpanded}>
            <div className="expanded-content55">
              <img
                src={expandedArticle.bannerImage}
                alt={`${expandedArticle.title} banner`}
                className="expanded-banner-img55"
              />
              <h2>{expandedArticle.title}</h2>
              <p>{expandedArticle.body}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlesPage;
