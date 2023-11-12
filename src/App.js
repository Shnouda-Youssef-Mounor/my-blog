import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Slidebar } from './Component/Slidbar/slidebar';
import {Home} from './Component/Home/home'
import { About } from './Component/About/about';
import { Skills } from './Component/Skills/skills';
import { Resume } from './Component/resume/resume';
import { Contactus } from './Component/Contact/contactus';
import { Protfolio } from './Component/protfolio/portfolio';
function App() {
  return (


    <div className="App">
      <div className='slid'>
        <Slidebar />

      </div>
      <Routes>
        <Route to='#home' />
      </Routes>
      <div className='section' id='Home'>
        <Home />

      </div>
      <div className='section' id="Skills">
        <Skills />
      </div>
      <div className='section' id='About'>

        <About />
      </div>
      <div className='section' id="Resume">
        <Resume/>
      </div>
      <div className='section' id="Portfolio">
        <Protfolio/>
      </div>
      <div id="ContactUs">
        <Contactus/>
      </div>
      
    </div>


  );
}

export default App;
