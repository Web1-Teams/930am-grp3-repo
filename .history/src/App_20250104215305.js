import { BrowserRouter, Route, Routes } from "react-router-dom";
import RafeeqCommunityPage from '../src/pages/RafeeqCommunityPage/RafeeqCommunityPage';
import JoinUsPage from '../src/pages/JoinUsPage/JoinUsPage';
import ArticlesPage from './RC/pages/ArticlesPage/ArticlesPage';

const app =() =>{
return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<RafeeqCommunityPage />} />
          <Route path="/JoinUs" element={<JoinUsPage />} />
          <Route path="/Articles" element={<ArticlesPage />} />
        </Routes>
      </BrowserRouter>
    </>
)
}

export default app;