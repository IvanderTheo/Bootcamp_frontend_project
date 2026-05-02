import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export const Landing = () => {
  const { isAuthenticated } = useAuth();

  const features = [
    {
      icon: '📚',
      title: 'Online Material',
      description: 'Access high-quality learning materials anytime, anywhere.',
    },
    {
      icon: '✅',
      title: 'Quizzes & Assignments',
      description: 'Test your knowledge with interactive quizzes and assignments.',
    },
    {
      icon: '🏆',
      title: 'Certificates',
      description: 'Earn certificates upon course completion.',
    },
  ];

  return (
    <main className="flex flex-col items-center bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center w-full max-w-6xl px-5 py-20 md:py-32 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-80"></div>

        <h1 className="text-white text-4xl md:text-5xl font-black text-center px-4 z-10 mb-6">
          Unlock Your Potential with DibiEdu
        </h1>

        <p className="text-white text-center max-w-2xl px-4 z-10 text-lg mb-8">
          Embark on a journey of knowledge and skill development with our comprehensive online courses.
        </p>

        {!isAuthenticated ? (
          <Link to="/register">
            <Button className="z-10 text-lg px-8 py-4">
              Start Learning
            </Button>
          </Link>
        ) : (
          <Link to="/users">
            <Button className="z-10 text-lg px-8 py-4">
              View Users
            </Button>
          </Link>
        )}
      </section>

      {/* Why Choose Section */}
      <section className="w-full max-w-6xl px-5 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-4">
          Why Choose DibiEdu?
        </h2>

        <p className="text-gray-600 mb-8 max-w-2xl">
          Our platform is designed to provide a seamless and effective learning experience for students of all levels.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <div className="text-5xl mb-2">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-6xl px-5 py-16 bg-blue-50 rounded-lg mb-16">
        <h2 className="text-3xl font-bold text-center mb-6">Ready to Get Started?</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {isAuthenticated ? (
            <Link to="/users">
              <Button className="text-lg px-8 py-3">
                Explore Users
              </Button>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <Button variant="primary" className="text-lg px-8 py-3">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="secondary" className="text-lg px-8 py-3">
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <p>&copy; 2024 DibiEdu. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};
