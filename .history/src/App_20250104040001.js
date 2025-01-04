import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleForm from '../src/components/ArticleForm/ArticleForm'
import ArticleCard from '../src/components/ArticleCard/ArticleCard'
import ContentSection from '../src/components/ContentSection/ContentSection';
import Hero from './components/Hero/Hero';
import './styles/App.css';
import RafeeqCommunityPage from './pages/RafeeqCommunityPage/RafeeqCommunityPage';
import ArticlesPage from './pages/ArticlesPage/ArticlesPage';
import JoinUsPage from './pages/JoinUsPage/JoinUsPage';
import NoPage from './pages/NoPage/NoPage';

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

      <BrowserRouter>
      <Routes>
        <Route index element={<RafeeqCommunityPage/>}/>
        <Route path="/RafeeqCommunity" element = { <RafeeqCommunityPage/>}/>
        <Route path = "/JoinUs" element = {<JoinUsPage/>}/>
        <Route path = "/Articles" element = {<ArticlesPage/>}/>
        <Route path = "*" element = {<NoPage/>} />
      </Routes>
      </BrowserRouter>

      <Hero 
        title="Welcome to My Website"
        paragraph="This is the best place to explore amazing content."
        backgroundImage="/images/elderly-people-with-cat-pet.jpg"  // Correct path relative to the public folder
      />
   

      <ContentSection
                title="First Section"
                paragraph="This is the first content section with an image on the left."
                image="/images/elderly-people-with-cat-pet.jpg"
                reverse={false}
            />
            <ContentSection
                title="Second Section"
                paragraph="This is the second content section with an image on the right."
                image="/images/elderly-people-with-cat-pet.jpg"
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

