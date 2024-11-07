import React from 'react';
import { Award, BookOpen, Crown, Gift, Rocket, Trophy } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Trophy className="h-6 w-6 text-indigo-600" />,
      title: "Achievement Badges",
      description: "Earn badges as you complete courses and master new skills"
    },
    {
      icon: <Rocket className="h-6 w-6 text-indigo-600" />,
      title: "Level Up System",
      description: "Progress through levels and unlock new content as you learn"
    },
    {
      icon: <Crown className="h-6 w-6 text-indigo-600" />,
      title: "Leaderboards",
      description: "Compete with peers and track your progress in real-time"
    },
    {
      icon: <Gift className="h-6 w-6 text-indigo-600" />,
      title: "Rewards Store",
      description: "Redeem points for exclusive content and physical rewards"
    },
    {
      icon: <Award className="h-6 w-6 text-indigo-600" />,
      title: "Virtual Stickers",
      description: "Collect digital stickers for completing challenges"
    },
    {
      icon: <BookOpen className="h-6 w-6 text-indigo-600" />,
      title: "Parent Dashboard",
      description: "Monitor progress and access detailed learning insights"
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Gamified Learning Experience
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Make learning fun and engaging with our interactive features
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-indigo-600 transition duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 p-3 bg-indigo-50 rounded-xl group-hover:bg-indigo-100 transition duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}