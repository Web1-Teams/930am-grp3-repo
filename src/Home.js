
import Nav from '../src/components/Nav/Nav';
import JoinHome from '../src/components/JoinHome/JoinHome';
import FindHome from './components/FindHome/FindHome';
//import ElemHome from './components/ElemHome/ElemHome';
import BannerHome from './components/BannerHome/BannerHome';
import ElemAll from './components/ElemAll/ElemAll';
//import HelpHome from './components/HelpHome/HelpHome';
import HelpAll from './components/HelpAll/HelpAll';









function Home() {
  return (
    <div>
      <Nav/>
      <BannerHome/>
      <JoinHome title="Join Our Pack!" des="RAFEEQ is hiring for our newly built Queens Care Center!" dess="Are you passionate about making a difference in the lives of animals?  Join  RAFEQ and be part of a movement making a real difference!" btnTitle="Apply" />
      <FindHome btnTitle="Find"/>
      <ElemAll/>
      <JoinHome title="Emergency Placement" des="Heroes Needed" dess="Emergency Placement Heroes Needed Many of our Partners have been very open about their need to focus more on the emergency cases and pull those animals with the greatest needs. With RAFEQ having so many animals in care, it is challenging for our partners to know which animals they should focus their efforts on." btnTitle="Hero"/>
      <HelpAll/>
    </div>
  );
}

export default Home;
/*<HelpHome title="Volunteer" des3="Currently seeking highly experienced large dog handlers at all Care Center locations"/>
<HelpHome title="Foster" des3="Take your first steps with the RAFEQ Foster Team by signing up for one of our Virtual Foster Orientations"/>
<HelpHome title="Donate" des3="Support homeless animals, achieve your charitable goals"/>
<HelpHome title="Events" des3="Find an upcoming Fundraising Event near you"/>*/