import React from 'react';
import { Clock, Star, Users } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      title: "Mathematics Adventure",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
      rating: 4.9,
      students: 2500,
      duration: "4 weeks"
    },
    {
      title: "Science Explorer",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
      rating: 4.8,
      students: 1800,
      duration: "6 weeks"
    },
    {
      title: "Creative Writing",
      level: "All Levels",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
      rating: 4.7,
      students: 3200,
      duration: "8 weeks"
    }
  ];

  return (
    <div className="bg-gray-50 py-24" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Featured Courses
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover our most popular interactive learning experiences
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="relative h-48">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-indigo-600">
                  {course.level}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>

                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students.toLocaleString()} students
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    {course.rating}
                  </div>
                </div>

                <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 font-medium rounded-full hover:bg-indigo-50 transition">
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
}