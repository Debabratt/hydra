// src/components/Navbar.jsx

import { navLinks } from '../constants/index.js'; // Update the path to where navLinks is defined

const Navbar = () => {
  return (
    <div className="bg-black">
      <nav className="container mx-auto py-2 flex flex-col md:flex-row items-center">
        {/* Logo on the left (visible only on larger screens) */}
        <div className="hidden md:flex flex-shrink-0 mr-2">
          <img
            src="hy.jpg" // Replace with your logo URL
            alt="Logo"
            className="h-20 px-8" // Adjust height as needed
          />
        </div>

        {/* Centered Links and Video */}
        <div className="flex-grow flex flex-col md:flex-row items-center justify-center">
          {/* Links on the left side */}
          <ul className="flex space-x-6 md:mr-4">
            {navLinks.slice(0, 2).map(link => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="text-gold font-semibold text-2xl hover:text-gradient"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Video in the middle with margin */}
          <div className="flex-shrink-0 mx-4 my-4 md:my-0">
            <video
              className="rounded-full w-28 h-28 object-cover"
              src="hydra.mp4" // Replace with your video URL
              autoPlay
              loop
              muted
            />
          </div>

          {/* Links on the right side */}
          <ul className="flex space-x-6 md:ml-4">
            {navLinks.slice(2).map(link => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="text-gold font-semibold text-2xl hover:text-gradient"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
