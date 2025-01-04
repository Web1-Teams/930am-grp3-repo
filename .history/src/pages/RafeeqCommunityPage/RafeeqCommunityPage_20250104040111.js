import { Link, Route, Switch } from 'react-router-dom';
import ArticlesPage from './ArticlesPage';
import JoinUsPage from './JoinUsPage';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import ArticleForm from '../../components/ArticleForm/ArticleForm';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import ContentSection from '../../components/ContentSection/ContentSection';
import Hero from '../../components/Hero/Hero';
import Nav from '../components/Nav';


const RafeeqCommunityPage = () => {
  return(
  <div>
    <h1>Rafeeq Community Page</h1>
    <nav>
      <ul>
        <li>
          <Link to="/community/articles">Articles</Link>
        </li>
        <li>
          <Link to="/community/joinus">Join Us</Link>
        </li>
      </ul>
    </nav>

    {/* Nested Routes */}
    <Switch>
      <Route path="/community/articles" component={ArticlesPage} />
      <Route path="/community/joinus" component={JoinUsPage} />
    </Switch>
  </div>
);
}

export default RafeeqCommunityPage;
