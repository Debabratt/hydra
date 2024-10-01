// src/Components/Events.jsx

const Events = () => {
    const events = [
      { image: "riyhaa.jpg", date: "Oct 13, 2024 - 7 PM", alt: "Event 1" },
      { image: "harsh.jpg", date: "Oct  27, 2024 - 8 PM", alt: "Event 2" },
      { image: "pradeep.jpg", date: "Nov 3, 2024 - 6 PM", alt: "Event 3" },
      { image: "dj-3.avif", date: "Nov 10, 2024 - 9 PM", alt: "Event 4" },
    ];
  
    return (
      <div id="event" className="relative h-screen bg-black">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('bg-hydra.jpg')" }} // Replace with your background image URL
        >
          <div className="bg-black opacity-50 h-full w-full"></div> {/* Dark overlay */}
        </div>
  
        {/* Content Section */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-gold p-4">
          <h2 className="text-4xl font-bold mb-10">Upcoming Events</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
            {events.map((event, index) => (
              <div className="relative group" key={index}>
                <img
                  src={event.image}
                  alt={event.alt}
                  className=" object-cover h-full w-full transition-transform transform group-hover:scale-105" // Adjusted rounded corners
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 rounded-lg">
                  <span className="text-gold font-bold text-lg">{event.date}</span>
                </div>
              </div>
            ))}
          </div>
  
          {/* Additional Text */}
          <p className="mt-4 text-lg text-center">
            Join us for our upcoming events and make unforgettable memories!
          </p>
        </div>
      </div>
    );
  };
  
  export default Events;
