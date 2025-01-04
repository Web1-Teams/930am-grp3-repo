import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RafeeqCommunityPage from '../src/pages/RafeeqCommunityPage/RafeeqCommunityPage';
import JoinUsPage from '../src/pages/JoinUsPage/JoinUsPage';
import ArticlesPage from '../src/pages/ArticlesPage/ArticlesPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<RafeeqCommunityPage />} />
        <Route path="/RafeeqCommunity" element={<RafeeqCommunityPage />} />
        <Route path="/JoinUs" element={<JoinUsPage />} />
        <Route path="/Articles" element={<ArticlesPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
