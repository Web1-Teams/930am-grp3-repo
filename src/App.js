
import Nav from '../src/components/Nav/Nav'
import SeqHome from '../src/components/SeqHome/SeqHome'
import FindHome from './components/FindHome/FindHome';
//import ElemHome from './components/ElemHome/ElemHome';
import BannerHome from './components/BannerHome/BannerHome';
import ElemAll from './components/ElemAll/ElemAll';










function App() {
  return (
    <div>
      <Nav/>
      <BannerHome/>
      <SeqHome title="Join Our Pack!" des="RAFEEQ is hiring for our newly built Queens Care Center!" dess="Are you passionate about making a difference in the lives of animals?  Join  RAFEQ and be part of a movement making a real difference!" btnTitle="Apply" />
      <FindHome btnTitle="Find"/>
      <ElemAll/>
      <SeqHome title="Emergency Placement" des="Heroes Needed" dess="Emergency Placement Heroes Needed Many of our Partners have been very open about their need to focus more on the emergency cases and pull those animals with the greatest needs. With RAFEQ having so many animals in care, it is challenging for our partners to know which animals they should focus their efforts on." btnTitle="Hero"/>
    </div>
  );
}

export default App;
