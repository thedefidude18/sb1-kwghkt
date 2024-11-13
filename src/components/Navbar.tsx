import React from 'react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-3xl font-slackey bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
          TO
        </div>
        <div className="hidden md:flex space-x-12 font-zcool text-lg">
          <a href="#games" className="text-white hover:text-yellow-400">Games</a>
          <a href="#about" className="text-white hover:text-yellow-400">About</a>
          <a href="#awards" className="text-white hover:text-yellow-400">Awards</a>
          <a href="#contact" className="text-white hover:text-yellow-400">Contact</a>
        </div>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-slackey px-6 py-2 rounded-full text-sm transition-all">
          SIGN IN
        </button>
        <button className="md:hidden">
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>
    </nav>
  );
}