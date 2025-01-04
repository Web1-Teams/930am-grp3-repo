import React, { useState } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import ArticleForm from '../../components/ArticleForm/ArticleForm';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import ContentSection from '../../components/ContentSection/ContentSection';
import Hero from '../../components/Hero/Hero';
/*import Nav from '../components/Nav/Nav';*/
import SignUp from '../../components/signUp/SignUp';


const JoinUsPage = () =>{ 
  return (
    <div className="join-us-page">
    {/*<Nav />*/}

    <Hero
      title="Join Rafeeq Community"
      paragraph="Sign up now to become part of a compassionate community"
      backgroundImage="/images/elderly-people-with-cat-pet.jpg" // Update with your image path    
    />

    <div className="content-section">
    <ContentSection
                title="Why Join Us?"
                paragraph="Become part of a vibrant community that cares for animals and promotes their welfare."
                image="/images/medium-shot-women-with-cute-cat.jpg"
                reverse={false}
            />
                <ContentSection
                title="What we provide"
                paragraph="By joining us, you will be able to share youre stories with other people that have similar mindset, to read articles that is helpful and many more."
                image="/images/friends-enjoying-their-holiday-together.jpg"
                reverse={true}
            />
    </div>

    <div className="form-section">
        <SignUp />
    </div>

    {/*<Footer />*/}
</div>
);
}

export default JoinUsPage;
    //   title="Are you not one of us yet?"
      //   paragraph="If you'd like to join the community, fill out the form below."
      //   backgroundImage="/images/elderly-people-with-cat-pet.jpg"  // Correct path relative to the public folder
      //  />
      // <h1>Sign up through this form to join us</h1>
      // <SignUp/>