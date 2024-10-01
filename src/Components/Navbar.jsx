// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-black">
      <nav className="container mx-auto py-2 flex items-center flex-wrap">
        {/* Logo on the left (visible only on larger screens) */}
        <div className="hidden md:flex flex-shrink-0 mr-2">
          <img
            src="hy.jpg" // Replace with your logo URL
            alt="Logo"
            className="h-20 px-8" // Adjust height as needed
          />
        </div>

        {/* Centered Links and Video */}
        <div className="flex-grow flex items-center justify-center space-x-6 flex-col md:flex-row">
          <ul className="flex space-x-6">
            <li>
              <Link to="/evengt" className="text-gold font-semibold text-2xl hover:text-gradient">EVENT</Link>
            </li>
            <li>
              <Link to="/gallery" className="text-gold font-semibold text-2xl hover:text-gradient">GALLERY</Link>
            </li>
          </ul>

          {/* Video in the middle with margin */}
          <div className="flex-shrink-0 mx-4"> {/* Added horizontal margin */}
            <video
              className="rounded-full w-28 h-28 object-cover"
              src="hydra.mp4" // Replace with your video URL
              autoPlay
              loop
              muted
            />
          </div>

          <ul className="flex space-x-6">
            <li>
              <Link to="/about" className="text-gold font-semibold text-2xl hover:text-gradient">ABOUT</Link>
            </li>
            <li>
              <Link to="/contact" className="text-gold font-semibold text-2xl hover:text-gradient">CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
