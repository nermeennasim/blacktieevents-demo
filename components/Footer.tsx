import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6">
        {/* Top - Links */}
        <div className="flex flex-col items-center space-y-2 text-sm">
          <Link href="/about" className="hover:text-purple-400 transition">
            About Us
          </Link>
          <Link
            href="/privacy-policy"
            className="hover:text-purple-400 transition"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Middle - Social Media */}
        <div className="flex space-x-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaInstagram
              className="text-purple-500 hover:text-purple-400 transition"
              size={20}
            />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaFacebookF
              className="text-purple-500 hover:text-purple-400 transition"
              size={20}
            />
          </a>
          <a
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaWhatsapp
              className="text-purple-500 hover:text-purple-400 transition"
              size={20}
            />
          </a>
        </div>

        {/* Bottom - Copyright */}
        <div className="text-xs text-gray-400 text-center">
          &copy; {currentYear} Black Tie Events. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
