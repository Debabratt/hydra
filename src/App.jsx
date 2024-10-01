// src/App.jsx

import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home';
import Events from './Components/Events';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="flex flex-col">
        <Home />
        <Events />
        <Gallery />
        <About />
        
        <Contact />
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
