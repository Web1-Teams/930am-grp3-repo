import React, { useState } from 'react';
import Hero from '../../components/Hero/Hero';
import ContentSection from '../../components/ContentSection/ContentSection';

const RafeeqCommunityPage = () => {
  return(
  <div>
 <Hero
      title="Welcome to Rafeeq Community"
      paragraph="We’re so glad you’re here! The Refeeq Community is a warm and welcoming space for cat lovers
       and pet enthusiasts, dedicated to celebrating the joy of adopting and caring for rescued cats. Here, members 
       can dive into a treasure trove of articles, heartwarming stories, and helpful tips about cats and their needs."
      backgroundImage="/images/medium-shot-kid-hugging-cat.jpg"   
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
  </div>
);
}

export default RafeeqCommunityPage;
