import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import GameCard from './components/GameCard';

function App() {
  const games = [
    {
      title: "PLAY BECAUSE YOU WANT TO",
      image: "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?auto=format&fit=crop&w=800",
      description: "Games to play for the future is now the best age"
    },
    {
      title: "COOL UNDER PRESSURE",
      image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=800",
      description: "Games to play for the future is now the best age"
    },
    {
      title: "REWARDS AWAIT YOU",
      image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=800",
      description: "Games to play for the future is now the best age"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Features />
      
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-slackey mb-4">MEET OUR APPS SERVICE</h2>
              <p className="text-white/70">Find various dungeons and complete missions</p>
            </div>
            <button className="hidden md:block bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-slackey">
              MORE GAMES
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <GameCard key={index} {...game} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;