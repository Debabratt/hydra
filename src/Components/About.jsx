import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="relative flex flex-col md:flex-row h-auto scroll-smooth">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('your-background-image.jpg')" }} 
      />
      
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70" />

      {/* Left Side Text Section */}
      <div className="flex flex-col items-center relative z-10 p-4 order-1 md:w-1/2">
        <div className="text-gold px-5 py-8 mb-4">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">ABOUT</h1>
          
          {/* First Paragraph */}
          <p className="text-lg md:text-xl font-semibold mb-4 leading-relaxed mt-10">
            Welcome to HYDRA, where the vibrant spirit of nightlife meets the elegance of luxury. 
            As the premier party destination, we redefine the clubbing experience with top-tier 
            entertainment and a lively atmosphere that keeps you coming back for more.
          </p>

          {/* Add spacing here for visual separation */}
          <div className="mb-4"></div>

          {/* Second Paragraph */}
          <p className="text-lg md:text-xl font-semibold mb-4 leading-relaxed">
            Dive into a world of electrifying live music, breathtaking light displays, and a wide 
            range of premium spirits and cocktails. With culinary offerings that blend Asian, 
            North Indian, and Continental flavors, every visit is a delight.
          </p>
          <p className="text-lg font-semibold md:text-xl leading-relaxed">
            Join us on the dance floor as our talented DJs keep the energy high every night 
            is a celebration at HYDRA!
          </p>
        </div>
      </div>

      {/* Right Side Video Section */}
      <div className="flex flex-col items-center relative z-10 p-7 order-2 md:w-1/2">
        <motion.video
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          src="v.mp4" // Your main video source
          autoPlay
          loop
          muted
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        
        <div className="flex flex-row items-start mb-4 space-x-4">
          {/* Video 1 */}
          <div className="flex flex-col items-center">
            <div className="border-l-4 border-black h-12 md:h-16" />
            <motion.video
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg shadow-lg clip-star"
              src="v3.mp4"
              autoPlay
              loop
              muted
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>

          {/* Video 2 */}
          <div className="flex flex-col items-center">
            <div className="border-l-4 border-black h-12 md:h-16" />
            <motion.video
              className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-lg shadow-lg clip-star"
              src="k.mp4"
              autoPlay
              loop
              muted
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>

          {/* Video 3 */}
          <div className="flex flex-col items-center">
            <div className="border-l-4 border-black h-12 md:h-16" />
            <motion.video
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg shadow-lg clip-star"
              src="v3.mp4"
              autoPlay
              loop
              muted
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      {/* Include this in your global CSS or a separate CSS file */}
      <style>{`
        .clip-star {
          clip-path: polygon(
            50% 0%, 
            61% 35%, 
            98% 35%, 
            68% 57%, 
            79% 91%, 
            50% 70%, 
            21% 91%, 
            32% 57%, 
            2% 35%, 
            39% 35%
          );
        }

        .rounded-lg {
          border-radius: 0.5rem; /* Adjust the border radius as needed */
        }
      `}</style>
    </div>
  );
};

export default About;
 