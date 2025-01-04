import React, { useState } from 'react';
import Hero from '../../components/Hero/Hero';
import ContentSection from '../../components/ContentSection/ContentSection';

const RafeeqCommunityPage = () => {
  return(
  <div>
    <Hero
      title="Welcome to Rafeeq Community55"
      paragraph="We’re so glad you’re here! The Refeeq Community is a warm and welcoming space for cat lovers
       and pet enthusiasts, dedicated to celebrating the joy of adopting and caring for rescued cats. Here, members 
       can dive into a treasure trove of articles, heartwarming stories, and helpful tips about cats and their needs."
      backgroundImage="/images/5361.jpg"   
    />

    <ContentSection 
                    title="Articles" 
                    paragraph="Discover interesting stories and tips about pets." 
                    image="/images/medium-shot-woman-working-with-cute-dog.jpg" 
                    reverse={false} 
                    showButton={true} 
                    buttonText="Go to Articles" 
                    navigateTo="/Articles" 
                />
    <ContentSection 
                    title="Join us!" 
                    paragraph="What are you waiting for, sign up and be one of us so you can post articles and share your stories." 
                    image="/images/medium-shot-kid-hugging-cat.jpg" 
                    reverse={true} 
                    showButton={true} 
                    buttonText="Go to join us" 
                    navigateTo="/JoinUs" 
                />            
  </div>
);
}

export default RafeeqCommunityPage;
