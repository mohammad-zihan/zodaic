import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative z-10 py-12 md:py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="hero-title text-4xl md:text-6xl font-bold text-white mb-6">Discover Your Financial Destiny</h1>
        <p className="text-xl text-white mb-10 max-w-3xl mx-auto">Unlock the secrets of your earning potential through the cosmic wisdom of your zodiac sign.</p>
        <div className="flex justify-center">
          <a 
            href="#calculator" 
            className="bg-[#FFD700] text-[#212121] font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300 shadow-lg flex items-center"
          >
            <Star className="mr-2 h-5 w-5" />
            Start Your Cosmic Journey
          </a>
        </div>
        
        <div className="mt-12 relative animate-float max-w-lg mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Zodiac Wheel" 
            className="rounded-full w-64 h-64 mx-auto object-cover border-4 border-[#FFD700] shadow-2xl"
          />
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#FFD700] rounded-full animate-twinkle opacity-75"></div>
          <div className="absolute top-10 -right-6 w-8 h-8 bg-[#FFD700] rounded-full animate-twinkle opacity-50" style={{ animationDelay: '700ms' }}></div>
          <div className="absolute -bottom-2 left-10 w-10 h-10 bg-[#FFD700] rounded-full animate-twinkle opacity-60" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </section>
  );
}
