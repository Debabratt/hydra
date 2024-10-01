// src/App.jsx

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Events from './Components/Events';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <Home />
        <Events />
        <Gallery />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
