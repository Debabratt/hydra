import { FaEnvelope, FaTwitter, FaInstagram  } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-black text-white p-8 flex flex-col items-center">
      {/* Social Media Icons */}
      <div className="flex space-x-4 mb-4">
        <a href="hydraclubandskyloungebbsr@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-2xl hover:text-gray-400 transition" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl hover:text-blue-400 transition" />
        </a>
        <a href="https://www.instagram.com/clubhydrabbsr?igsh=MTcwb3NhaDQzYWttNA==" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl hover:text-pink-500 transition" />
        </a>
       
      </div>

      {/* Copyright Information */}
      <p className="text-center text-sm">
        &copy; {new Date().getFullYear()} HYDRA. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
