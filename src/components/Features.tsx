import React from 'react';
import { Gamepad2, Trophy, Gift, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Gamepad2 className="w-10 h-10" />,
    title: "IMMERSIVE GAMEPLAY",
    description: "Experience stunning visuals and dynamic combat in a vast open world filled with endless possibilities."
  },
  {
    icon: <Trophy className="w-10 h-10" />,
    title: "COMPETITIVE LEAGUES",
    description: "Join ranked matches, climb the leaderboards, and prove yourself against the best players worldwide."
  },
  {
    icon: <Gift className="w-10 h-10" />,
    title: "DAILY REWARDS",
    description: "Log in daily to claim exclusive rewards, rare items, and special character skins."
  }
];

export default function Features() {
  return (
    <div className="py-32 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,77,141,0.1),transparent_70%)]"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <span className="text-yellow-400 font-slackey">FEATURES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-slackey mb-6">WHY PLAYERS LOVE US</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">Join millions of players worldwide and discover why our game is the top choice for gaming enthusiasts.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group hover-lift">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-5 rounded-2xl w-20 h-20 
                            flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-slackey text-2xl mb-4">{feature.title}</h3>
              <p className="text-white/70 text-lg leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}