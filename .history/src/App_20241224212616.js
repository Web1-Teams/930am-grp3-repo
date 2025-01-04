import React from "react";
import Nav from "../src/components/Nav";
import SignUp from "../src/components/SignUp";
import Login from "../src/components/Login";
import ArticleForm from './ArticleForm';
import ArticleCard from './ArticleCard';


function App() {
  const handleFormSubmit = (data) => {
    console.log('Article submitted:', data);
    // You can pass the data to ArticleCard or save it elsewhere
  };
  return (
    <div>
      {/* Navigation Bar */}
      <Nav />

      {/* Articles*/}
      <div>
      <ArticleForm onSubmit={handleFormSubmit} />
    </div>

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