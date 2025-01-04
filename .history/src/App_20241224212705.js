

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
