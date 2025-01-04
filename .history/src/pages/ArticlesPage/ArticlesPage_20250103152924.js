import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleForm from '../components/ArticleForm/ArticleForm';
import ArticleCard from '../components/ArticleCard/ArticleCard';
import ContentSection from '../components/ContentSection/ContentSection';
import Hero from '../components/Hero/Hero';
import Nav from '../components/Nav';


const ArticlesPage = () => {
  return(
  <div>
    <h2>Articles Page</h2>
    <p>Here are some articles about our community.</p>
  </div>)
};

export default ArticlesPage;
