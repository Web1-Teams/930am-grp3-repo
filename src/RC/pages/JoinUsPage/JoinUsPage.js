import React, { useState } from 'react';
import ContentSection from '../../components/ContentSection/ContentSection';
import Hero from '../../components/Hero/Hero';
import SignUp from '../../components/signUp/SignUp';
import Login from '../../components/Login/Login';
/*import Nav from '../components/Nav/Nav';*/

const JoinUsPage = () => {
  
  return (
    <div className="join-us-page55">
    {/*<Nav />*/}

    <Hero
      title="Join Rafeeq Community"
      paragraph="Sign up now to become part of a compassionate community"
      backgroundImage="/images/elderly-people-with-cat-pet.jpg"   
    />

    <div className="content-section55">
    <ContentSection
                title="Why Join Us?"
                paragraph="Become part of a vibrant community that cares for animals and promotes their welfare."
                image="/images/medium-shot-women-with-cute-cat.jpg"
                reverse={false}
            />
                <ContentSection
                title="What we provide"
                paragraph="By joining us, you will be able to share your stories with other people that have a similar mindset, read helpful articles, and much more."
                image="/images/friends-enjoying-their-holiday-together.jpg"
                reverse={true}
            />
    </div>

    <div className="form-section55">
        <SignUp/>
        <Login/>        
    </div>

    {/*<Footer />*/}
</div>
);
}

export default JoinUsPage;
