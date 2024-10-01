import { motion } from 'framer-motion';
import { useState } from 'react';

const Home = () => {
  const [hovered, setHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    setHovered(true);
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => setHovered(false);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="relative h-screen flex flex-col md:flex-row"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('your-background-image.jpg')" }} // Replace with your image URL
      />
      
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70" />

      {/* Text Section */}
      <div className="flex-1 flex flex-col p-8 mt-16 text-gold md:w-1/2 relative z-10">
        <motion.h5
          className="text-6xl md:text-8xl mb-2 font-bold mt-20 text-center hover:text-gradient transition duration-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          HYDRA
        </motion.h5>
        <motion.p
          className="text-lg md:text-xl mb-2 text-center hover:text-gradient transition duration-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          CLUB & SKY LOUNGE
        </motion.p>
        <motion.p
          className="text-xl md:text-3xl mb-4 font-bold text-center hover:text-gradient transition duration-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          WHERE MUSIC MEETS MAGIC.
        </motion.p>
      </div>

      {/* Video Section */}
      <div className="flex-1 flex flex-col justify-center items-center p-4 md:w-1/2 relative z-10">
        <motion.video
          className="rounded-xl w-80 h-80 md:w-96 md:h-96 object-cover shadow-lg mb-2" // Adjusted margin
          src="hydra2.mp4" // Replace with your video URL
          autoPlay
          loop
          muted
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 5 }}
        />

        {/* Infinite Marquee Effect */}
        <div className="w-80 md:w-96 overflow-hidden  relative"> {/* Adjust width here for different screen sizes */}
          <div className="flex animate-infinite-marquee mb-4 whitespace-nowrap">
            <span className="text-gold text-xl md:text-2xl font-bold mx-4">Join us for unforgettable nights!</span>
            <span className="text-gold text-xl md:text-2xl font-bold mx-4">Live DJ sets, signature cocktails, and more!</span>
            <span className="text-gold text-xl md:text-2xl font-bold mx-4">Join us for unforgettable nights!</span>
            <span className="text-gold text-xl md:text-2xl font-bold mx-4">Live DJ sets, signature cocktails, and more!</span>
            {/* Duplicate content for seamless scrolling */}
            <span className="text-gold text-xl md:text-2xl font-bold mx-4">Join us for unforgettable nights!</span>
            <span className="text-gold text-xl md:text-2xl font-bold mx-4">Live DJ sets, signature cocktails, and more!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
