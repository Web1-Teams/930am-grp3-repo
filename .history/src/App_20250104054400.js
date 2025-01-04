import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RafeeqCommunityPage from '../pages/RafeeqCommunityPage/RafeeqCommunityPage';
import JoinUsPage from '../pages/JoinUsPage/JoinUsPage';
import ArticlesPage from '../pages/ArticlesPage/ArticlesPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RafeeqCommunityPage />} />
        <Route path="/RafeeqCommunity" element={<RafeeqCommunityPage />} />
        <Route path="/JoinUs" element={<JoinUsPage />} />npm 
        <Route path="/Articles" element={<ArticlesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
