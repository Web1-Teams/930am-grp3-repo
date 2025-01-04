import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArticleForm from "../../components/ArticleForm/ArticleForm";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import ContentSection from "../../components/ContentSection/ContentSection";
import Hero from "../../components/Hero/Hero";
import "../ArticlesPage/ArticlesPage.css";
/*import Nav from '../components/Nav';*/

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]); // Articles created using the form
  const [expandedArticle, setExpandedArticle] = useState(null);

  const handleFormSubmit = (newArticle) => {
    setArticles([...articles, newArticle]); // Add new articles to the existing array
  };

  const handleCardClick = (article) => {
    setExpandedArticle(article);
  };

  const handleCloseExpanded = (e) => {
    if (e.target.className === "expanded-article") {
      setExpandedArticle(null);
    }
  };

  return (
    <div className="articles-page">
      {/* <Nav /> */}
      <Hero
        title="Welcome to Articles"
        paragraph="
              Here you can find articles on pet care, helpful tips for looking after your pets, 
              and amusing stories that celebrate the bond with our animal companions."
        backgroundImage="/images/high-angle-elderly-people-with-cat.jpg"
      />

      <ContentSection
        title="How can I post an article?"
        paragraph="You can post as many articles as you like, by filling this form and publishing them,
                so other users can see it and interact with them"
        image="/images/friends-enjoying-their-holiday-together.jpg"
        reverse={true}
      />

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

      <div className="articles-container">
        {/* Render dynamically created articles */}
        {articles.map((article, index) => (
          <div
            key={`dynamic-${index}`}
            onClick={() => handleCardClick(article)}
            style={{ cursor: "pointer" }}
          >
            <ArticleCard {...article} />
          </div>
        ))}

        {/* Render hardcoded articles */}
        <div
          onClick={() =>
            handleCardClick({
              category: "Rescue",
              bannerImage:
                "https://via.placeholder.com/800x400/32CD32?text=Rescue+Banner",
              hashtags: "#rescue #adoption",
              title: "How to Rescue a Dog",
              description:
                "This article provides a step-by-step guide to rescuing a dog.",
              authorName: "Jane Doe",
            })
          }
          style={{ cursor: "pointer" }}
        >
          <ArticleCard
            category="Rescue"
            bannerImage="https://via.placeholder.com/800x400/32CD32?text=Rescue+Banner"
            hashtags="#rescue #adoption"
            title="How to Rescue a Dog"
            description="This article provides a step-by-step guide to rescuing a dog."
            authorName="Jane Doe"
          />
        </div>

        <div
          onClick={() =>
            handleCardClick({
              category: "Training",
              bannerImage:
                "https://via.placeholder.com/800x400/FF4500?text=Training+Banner",
              hashtags: "#training #dogs",
              title: "Training Your Dog: A Complete Guide",
              description:
                "Learn the best training techniques for your dog in this comprehensive guide.",
              authorName: "John Smith",
            })
          }
          style={{ cursor: "pointer" }}
        >
          <ArticleCard
            category="Training"
            bannerImage="https://via.placeholder.com/800x400/FF4500?text=Training+Banner"
            hashtags="#training #dogs"
            title="Training Your Dog: A Complete Guide"
            description="Learn the best training techniques for your dog in this comprehensive guide."
            authorName="John Smith"
          />
        </div>
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

export default ArticlesPage;
