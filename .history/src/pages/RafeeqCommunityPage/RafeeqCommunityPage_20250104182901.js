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
                title="Why Join Us?"
                paragraph="Become part of a vibrant community that cares for animals and promotes their welfare."
                image="/images/medium-shot-women-with-cute-cat.jpg"
                reverse={false}
            />
  </div>
);
}

export default RafeeqCommunityPage;
