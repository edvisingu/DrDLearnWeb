import React from 'react';
import { BookOpen, Crown, Menu, ShoppingCart, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">DrDLearn</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-gray-700 hover:text-indigo-600 transition">Courses</a>
            <a href="#store" className="text-gray-700 hover:text-indigo-600 transition">Store</a>
            <a href="#resources" className="text-gray-700 hover:text-indigo-600 transition">Resources</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition">About</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
            </button>
            <button className="hidden md:flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition">
              <Crown className="h-5 w-5" />
              <span>Subscribe</span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-6 w-6 text-gray-600" />
            </button>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}