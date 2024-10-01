import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          setSuccessMessage('Thank you for your message 😃');
          setErrorMessage('');
          setForm({ name: '', email: '', message: '' });

          setTimeout(() => {
            setSuccessMessage('');
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setErrorMessage("I didn't receive your message 😢");
          setSuccessMessage('');
        },
      );
  };

  return (
    <div id='contact' className="relative bg-black h-screen overflow-hidden flex flex-col md:flex-row">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40" 
        style={{ backgroundImage: "url('kkk.jpg')" }} // Replace with your image URL
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-50" />

      {/* Left Side Image */}
      <div className="flex-shrink-0 w-full md:w-1/2 relative z-10 flex flex-col items-center justify-center p-4 md:p-8">
        <img 
          src="cheers.png" // Replace with your image URL
          alt="Chat"
          className="w-32 h-32 md:w-48 md:h-48 rounded-lg shadow-lg"
        />
        <h2 className="text-2xl md:text-3xl font-bold text-gold mb-4 text-center">Let's raise a glass together!</h2>
      </div>

      {/* Contact Form Section */}
      <div className="relative z-10 flex items-center justify-center h-full p-4 md:p-8 w-full md:w-1/2">
        <div className="p-4 md:p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="mb-4 text-3xl md:text-4xl font-bold relative text-transparent bg-clip-text" style={{
            backgroundImage: "url('gold.avif')", // Replace with your texture image URL
            backgroundSize: 'cover',
          }}>
            CONTACT US
          </h1>
          {successMessage && <p className="text-green-400 mb-4">{successMessage}</p>}
          {errorMessage && <p className="text-red-400 mb-4">{errorMessage}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 rounded bg-transparent text-white border border-gold focus:outline-none focus:ring focus:ring-gold"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 rounded bg-transparent text-white border border-gold focus:outline-none focus:ring focus:ring-gold"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 rounded bg-transparent text-white border border-gold focus:outline-none focus:ring focus:ring-gold"
                rows="4"
                required
              />
            </div>
            <button className="bg-gold text-black px-6 py-3 rounded hover:bg-gold-600 transition" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
