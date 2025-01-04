import React from 'react';
import ArticleForm from './components/ArticleForm';

const App = () => {
  const handleFormSubmit = (formData) => {
    console.log('Form Data:', formData);
    // Perform actions with the form data (e.g., send it to a server)
  };

  return (
    <div>
      <h1>Article Submission</h1>
      <ArticleForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;