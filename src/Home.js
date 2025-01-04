
import JoinHome from './components/HomePage/JoinHome/JoinHome';
import FindHome from './components/HomePage/FindHome/FindHome';
import BannerHome from './components/HomePage/BannerHome/BannerHome';
import ElemAll from './components/HomePage/ElemAll/ElemAll';
import AdoptHome from './components/HomePage/AdoptHome/AdoptHome';
import HelpHomeComp from './components/HomePage/HelpHomeComp/HelpHomeComp';
import Footer from './components/HomePage/Footer/Footer';




function Home() {
  return (
    <div>
      <BannerHome/>
      <AdoptHome/>
      <JoinHome 
      title="Articles" 
      des="Do you like Articles?" 
      dess="Here you can find articles on pet care, helpful tips for looking after your pets, 
          and amusing stories that celebrate the bond with our animal companions" 
      btnTitle="Click" 
      image="../images/ARR.webp"
      Link="/Rescue_page2"/>
      <FindHome btnTitle="Find"/>
      <ElemAll/>
      <JoinHome 
      title="Emergency Placement" 
      des="Heroes Needed" 
      dess="Emergency Placement Heroes Needed Many of our Partners have been very open about their need to focus more on the emergency cases and pull those animals with the greatest needs. With RAFEQ having so many animals in care, it is challenging for our partners to know which animals they should focus their efforts on."
      btnTitle="Hero"
      image="../images/Hero.jpg"
      Link="/Rescue_page2"/>
      <HelpHomeComp/>
      <Footer/>
    </div>

  );
}

export default Home;
