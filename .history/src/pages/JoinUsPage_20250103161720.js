import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleForm from '../components/ArticleForm/ArticleForm';
import ArticleCard from '../components/ArticleCard/ArticleCard';
import ContentSection from '../components/ContentSection/ContentSection';
import Hero from '../components/Hero/Hero';
/*import Nav from '../components/Nav/Nav';*/
import SignUp from '../components/signUp/SignUp';


const JoinUsPage = () =>{ 
  return (
  <div>
    {/*<Nav/>*/}
    <Hero 
        title="Are you not one of us yet?"
        paragraph="If you'd like to join the community, fill out the form below."
        backgroundImage="/images/elderly-people-with-cat-pet.jpg"  // Correct path relative to the public folder
      />
      <h1>Sign up through this form to join us</h1>
      <SignUp/>
  </div>
);
}

export default JoinUsPage;
