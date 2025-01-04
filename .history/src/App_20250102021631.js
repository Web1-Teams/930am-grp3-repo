import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticleForm from './components/ArticleForm';
import ArticlePage from './components/ArticlePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArticleForm />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
};

export default App;
