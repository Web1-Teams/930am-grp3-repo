import Hanis_page from './components/hani_components/page1/rescue_page1/Rescue_page1.js';
import Nav from "./components/Nav.js";
import Hanis_page2 from "./components/hani_components/page2/rescue_page2/Rescue_page2.js"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Nav/> */}
        <Route path="/" element={<Hanis_page/>} />
            <Route path="/page" element={<Hanis_page/>} />
            <Route path="/lost" element={<Hanis_page2/>} />
            <Route path="/found" element={<Hanis_page2
             title = "Found Pet Information"
             title2="Place Found:"
             placeholder="Enter The Place Found" 
            />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;