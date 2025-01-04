import React from 'react';
import Nav from "../src/components/Nav";
import SignUp from "../src/components/SignUp";
import Login from "../src/components/Login";
import ArticleCard from "./components/ArticleCard";
import ArticleForm from "./components/ArticleForm";

const App = () => {
  const handleFormSubmit = (formData) => {
    console.log('Form Data:', formData);
    // Perform actions with the form data (e.g., send it to a server)
  };

  return (
    <div>

      {/* Navigation Bar */}
      <Nav />

      <h1>Article Submission</h1>
      <ArticleForm onSubmit={handleFormSubmit} />

       {/* Articles*/}
       <ArticleCard
        category="Popular"
        bannerImage="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        hashtags="#webdevelopment #frontend"
        title="What is the future of front end development?"
        description="My thoughts on the future of front end web development"
        authorImage="https://images.unsplash.com/photo-1554780336-390462301acf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        authorName="Maya Eleanor Peña"
        authorFollowers="1.2k"
      />

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
};

export default App;