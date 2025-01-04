import React from "react";
import Nav from "../src/components/Nav";
import SignUp from "../src/components/SignUp";
import Login from "../src/components/Login";
import ArticleForm from './ArticleForm';
import ArticleCard from './ArticleCard';


import React from 'react';
import ArticleForm from './ArticleForm';
import ArticleCard from './ArticleCard';

function App() {
  const handleFormSubmit = (data) => {
    console.log('Article submitted:', data);
    // You can pass the data to ArticleCard or save it elsewhere
  };

  return (
    <div>
      <ArticleForm onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
