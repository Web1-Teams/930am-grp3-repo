import React from 'react';
import HelpHome from '../HelpHome/HelpHome';
import './HelpHomeComp.css';

const HelpHomeComp = (props) => {
  const helpItems = [
    {
      Link:"../../hani_components/page2/rescue_page2/Rescue_page2",
      imageSrc: '../images/hands.png',
      title: 'Volunteer',
      description: 'Currently seeking highly experienced large dog handlers at all Care Center locations',
    },
    {
      link: '../page 2/adoption.html',
      imageSrc: '../images/foster1.webp',
      title: 'Foster',
      description: 'Take your first steps with the RAFEQ Foster Team by signing up for one of our Virtual Foster Orientations',
    },
    {
      link: '../page 2/adoption.html',
      imageSrc: '../images/donate1.png',
      title: 'Donate',
      description: 'Support homeless animals, achieve your charitable goals',
    },
    {
      link: '../page 2/adoption.html',
      imageSrc: '../images/tekit.png',
      title: 'Fundraising Events',
      description: 'Find an upcoming Fundraising Event near you',
    },
  ];

  return (
    <section className="sec-how-can-help25">
      <div className="contaner22225">
        <header>
          <h4>How You Can Help</h4>
          <h1>There are many ways to get involved</h1>
        </header>
        <img
          className="er25"
          src="../images/dooooooog.webp"
          alt="Illustration of help opportunities"

        />
      </div>
      <div className="con-how-can-help25">
        {helpItems.map((item, index) => (
          <HelpHome
            key={index}
            link={item.link}
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HelpHomeComp;
