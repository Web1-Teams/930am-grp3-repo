import { BrowserRouter, Route, Routes } from "react-router-dom";
import RafeeqCommunityPage from '../src/RC/pages/RafeeqCommunityPage/RafeeqCommunityPage';
import JoinUsPage from '../src/RC/pages/JoinUsPage/JoinUsPage';
import ArticlesPage from '../src/RC/pages/ArticlesPage/ArticlesPage';

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