import React from 'react';
import { Star, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen hero-bg flex items-center">
      <div className="relative max-w-7xl mx-auto px-6 pt-20">
        <div className="flex flex-col items-start space-y-10">
          <div className="flex items-center space-x-2 bg-black/20 px-4 py-2 rounded-full">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-white/90">Rated #1 Game of 2024</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-slackey text-white leading-tight max-w-3xl">
            UNLEASH THE <span className="text-gradient text-glow">LEGEND</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-xl font-zcool leading-relaxed">
            Embark on an epic journey through mystical realms. Battle fierce dragons, 
            forge powerful alliances, and become the hero you were destined to be.
          </p>
          
          <div className="flex items-center space-x-6">
            <button className="play-button group">
              <span className="relative z-10 flex items-center">
                PLAY NOW
                <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 rounded-full 
                            group-hover:scale-105 transition-transform duration-300"></div>
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i}
                    src={`https://images.unsplash.com/photo-${i === 1 ? '1535713875002-d1d0cf377fde' : i === 2 ? '1570295999919-56ceb5ecca61' : '1633332755192-727a05c4013d'}?auto=format&fit=crop&w=100&h=100`}
                    alt={`Player ${i}`}
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <span className="text-white/80">Join 10k+ players</span>
            </div>
          </div>
        </div>
        
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800" 
              alt="Game Character"
              className="w-[600px] h-[600px] object-cover rounded-full animate-float"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary via-transparent to-transparent opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
}