
//import Nav from '../src/components/Nav/Nav';
import JoinHome from '../src/components/JoinHome/JoinHome';
import FindHome from './components/FindHome/FindHome';
import BannerHome from './components/BannerHome/BannerHome';
import ElemAll from './components/ElemAll/ElemAll';
//import HelpAll from './components/HelpAll/HelpAll';
import Footer from './components/Footer/Footer';
import AdoptHome from './components/AdoptHome/AdoptHome';
import HelpHomeComp from './components/HelpHomeComp/HelpHomeComp';
//import AdoptHome from './components/AdoptHome/AdoptHome';




function Home() {
  return (
    <div>
      <BannerHome/>
      <AdoptHome/>
      <JoinHome 
      title="Join Our Pack!" 
      des="RAFEEQ is hiring for our newly built Queens Care Center!" 
      dess="Are you passionate about making a difference in the lives of animals?  Join  RAFEQ and be part of a movement making a real difference!" 
      btnTitle="Apply" 
      image="../images/pack.jpg"/>
      <FindHome btnTitle="Find"/>
      <ElemAll/>
      <JoinHome 
      title="Emergency Placement" 
      des="Heroes Needed" 
      dess="Emergency Placement Heroes Needed Many of our Partners have been very open about their need to focus more on the emergency cases and pull those animals with the greatest needs. With RAFEQ having so many animals in care, it is challenging for our partners to know which animals they should focus their efforts on."
      btnTitle="Hero"
      image="../images/Hero.jpg"/>
      <HelpHomeComp/>
      <Footer/>
    </div>

  );
}

export default Home;
