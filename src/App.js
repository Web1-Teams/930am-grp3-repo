
import Nav from "./components/Nav/Nav.js";
import Banner from "./components/Banner/Banner.js";
import Adopt from "./components/Adopt/Adopt.js";
import HowCanHelp from "./components/HowCanHelp/HowCanHelp.js";
import Elementor from "./components/ElementorHome/Elementor";





//<Card title="jarusalem" des="osaid is man 20 y old"/>
//<Card title="ramallah"/>
//<Card title="qalqilia" name2="jamel"/>

function App() {
  return (
    <div>
      <Nav/>
      <Banner/>
      <Adopt/>
      <Elementor title="Volunteer" des="If you have a passion for animals and are looking to  make a difference,  Animal Care Centers of Nablus  (RAFEQ) needs your help."/> 
      <HowCanHelp/>
</div>
  );
}

export default App;
