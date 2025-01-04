import RafeeqCommunityPage from '../src/pages/RafeeqCommunityPage/RafeeqCommunityPage';
import JoinUsPage from '../src/pages/JoinUsPage/JoinUsPage';
import ArticlesPage from '../src/pages/ArticlesPage/ArticlesPage';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RafeeqCommunityPage from './pages/RafeeqCommunityPage/RafeeqCommunityPage';
import JoinUsPage from './pages/JoinUsPage/JoinUsPage';
import ArticlesPage from './pages/ArticlesPage/ArticlesPage';

const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<RafeeqCommunityPage />} />
        <Route path="/join-us" element={<JoinUsPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
      </Routes>
    </Router></div>
  );
};

export default App;
