import React from "react";
import Nav from "../src/components/Nav";
import SignUp from "../src/components/SignUp";
import Login from "../src/components/Login";
import ArticleCard from '../src/components/ArticleCard';

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <Nav />

      {/* Articles*/}
      <ArticleCard />

      {/* Main Content */}
      <div style={{ padding: "20px" }}>
        <h1>Welcome to the Rafeeq Community</h1>
        
        {/* SignUp Component */}
        <SignUp />

        {/* Login Component */}
        <Login />
      </div>
    </div>
  );
}

export default App;