import React from 'react';
import { Plus } from 'lucide-react';

interface GameCardProps {
  title: string;
  image: string;
  description: string;
}

export default function GameCard({ title, image, description }: GameCardProps) {
  return (
    <div className="bg-white/5 rounded-3xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-2xl mb-6" />
      <h3 className="font-slackey text-xl mb-3">{title}</h3>
      <p className="text-white/70 mb-6">{description}</p>
      <button className="w-10 h-10 rounded-full bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center transition-all">
        <Plus className="w-6 h-6 text-black" />
      </button>
    </div>
  );
}