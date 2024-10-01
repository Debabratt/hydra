import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Gallery = () => {
  const videos = [
    'gallery.mp4',
    'v1.mp4',
    'v6.mp4',
    'gall3.mp4',
    'v4.mp4',
    'v5.mp4',
  ];

  const audioFiles = [
    'dj3.mp3',
    'dj.mp3',
    'dj2.mp3',
    'dj4.mp3',
    'dj8.mp3',
    'dj6.mp3',
  ];

  const audioRefs = useRef(audioFiles.map(() => useRef(null)));
  const [activeAudioIndex, setActiveAudioIndex] = useState(null);

  useEffect(() => {
    // Preload audio elements
    audioRefs.current.forEach(ref => {
      if (ref.current) {
        ref.current.preload = "auto";
      }
    });
  }, []);

  const handleMouseEnter = (index) => {
    const audio = audioRefs.current[index].current;
    
    // Pause the previous audio if it was playing
    if (activeAudioIndex !== null && activeAudioIndex !== index) {
      const previousAudio = audioRefs.current[activeAudioIndex].current;
      if (previousAudio) {
        previousAudio.pause();
        previousAudio.currentTime = 0;
      }
    }

    // Play the current audio
    if (audio) {
      audio.currentTime = 0; // Reset to start
      audio.play().catch(error => console.error("Audio play failed:", error));
      setActiveAudioIndex(index);
    }
  };

  const handleMouseLeave = (index) => {
    const audio = audioRefs.current[index].current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0; // Reset to start
      setActiveAudioIndex(null);
    }
  };

  return (
    <div className="relative h-auto flex flex-col md:flex-row">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('your-background-image.jpg')" }} 
      />
      
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70" />

      {/* Top Images and Video Row */}
      <div className="flex flex-col items-center relative z-10 p-4">
        <div className="flex flex-row items-start mb-4">
          {/* Video 1 */}
          <div className="flex flex-col items-center mr-8">
            <div className="border-l-4 border-black h-40" style={{ marginTop: '-20px' }} />
            <motion.video
              className="rounded-full w-32 h-32 object-cover shadow-lg mt-2"
              src="v.mp4"
              autoPlay
              loop
              muted
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ borderRadius: '50%', marginTop: '-20px' }}
            />
          </div>

          {/* Video 2 */}
          <div className="flex flex-col items-center mx-8">
            <div className="border-l-4 border-black h-64" style={{ marginTop: '-20px' }} />
            <motion.video
              className="rounded-full w-48 h-48 object-cover shadow-lg mt-2"
              src="k.mp4"
              autoPlay
              loop
              muted
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ borderRadius: '50%', marginTop: '-20px' }}
            />
          </div>

          {/* Video 3 */}
          <div className="flex flex-col items-center ml-8">
            <div className="border-l-4 border-black h-40" style={{ marginTop: '-20px' }} />
            <motion.video
              className="rounded-full w-32 h-32 object-cover shadow-lg mt-2"
              src="v3.mp4"
              autoPlay
              loop
              muted
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ borderRadius: '50%', marginTop: '-20px' }}
            />
          </div>
        </div>
      </div>

      {/* Right Video Section (70%) */}
      <div className="flex-1 md:flex-[70%] flex flex-col justify-center items-center relative z-10 p-2">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 mb-4 w-full">
          {videos.map((video, index) => (
            <div className="relative" key={index}>
              <motion.video
                className="rounded-lg w-full h-96 object-cover shadow-lg"
                src={video}
                autoPlay
                loop
                muted
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                onMouseEnter={() => handleMouseEnter(index)}  // Play audio on hover
                onMouseLeave={() => handleMouseLeave(index)}  // Stop audio on leave
              />
            </div>
          ))}
        </div>
      </div>

      {/* Audio Elements */}
      {audioFiles.map((audioSrc, index) => (
        <audio key={index} ref={audioRefs.current[index]} src={audioSrc} preload="auto" />
      ))}
    </div>
  );
};

export default Gallery;
