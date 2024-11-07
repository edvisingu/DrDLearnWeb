import React from 'react';
import { Sparkles, Star } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-indigo-50 to-white pt-24 pb-16 sm:pt-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[50%] top-0 h-[40rem] w-[140%] -translate-x-[50%] opacity-30"
             style={{
               backgroundImage: `radial-gradient(closest-side, rgba(79, 70, 229, 0.15), transparent)`,
             }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 mb-8">
            <Sparkles className="h-4 w-4 text-indigo-600 mr-2" />
            <span className="text-sm font-medium text-indigo-600">New courses available!</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-8">
            Learning today,
            <span className="block text-indigo-600">leading tomorrow</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10">
            Empower your child's future with interactive courses, engaging content, and a 
            gamified learning experience that makes education fun and rewarding.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="inline-flex items-center px-6 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
              Start Learning Now
              <Star className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-6 py-3 rounded-full bg-white text-indigo-600 font-medium border-2 border-indigo-600 hover:bg-indigo-50 transition">
              Explore Courses
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-gray-900">1M+</div>
              <div className="text-sm text-gray-600">Active Learners</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Interactive Courses</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}