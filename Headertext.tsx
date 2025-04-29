import { useState } from 'react';
import { Link } from 'wouter';
import { Moon } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="relative z-10 px-4 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Moon className="text-[#FFD700] w-6 h-6 mr-2" />
          <h1 className="text-white text-xl md:text-2xl font-bold">Celestial Earnings</h1>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-white hover:text-[#FFD700] transition duration-300">About</a>
          <a href="#zodiac" className="text-white hover:text-[#FFD700] transition duration-300">Zodiac Signs</a>
          <a href="#calculator" className="text-white hover:text-[#FFD700] transition duration-300">Calculate</a>
        </nav>
        <button 
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#4A148C] bg-opacity-90 backdrop-blur-md z-50 py-4 border-t border-[#FFD700]">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-white hover:text-[#FFD700] transition duration-300 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#zodiac" 
              className="text-white hover:text-[#FFD700] transition duration-300 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Zodiac Signs
            </a>
            <a 
              href="#calculator" 
              className="text-white hover:text-[#FFD700] transition duration-300 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Calculate
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
