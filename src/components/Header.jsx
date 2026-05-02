import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="w-full border-b border-gray-300 bg-white sticky top-0 z-50">
      <div className="flex justify-between items-center px-5 md:px-10 py-3 md:py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">DibiEdu</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-semibold hover:text-blue-600 transition">
            Home
          </Link>
          {isAuthenticated && (
            <Link to="/users" className="font-semibold hover:text-blue-600 transition">
              Users
            </Link>
          )}
          <a href="#about" className="font-semibold hover:text-blue-600 transition">
            About
          </a>
          <a href="#contact" className="font-semibold hover:text-blue-600 transition">
            Contact
          </a>

          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">{user?.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white font-bold px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Login
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-300 px-5 py-4 flex flex-col gap-4">
          <Link
            to="/"
            className="font-semibold hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          {isAuthenticated && (
            <Link
              to="/users"
              className="font-semibold hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Users
            </Link>
          )}
          <a href="#about" className="font-semibold hover:text-blue-600">
            About
          </a>
          <a href="#contact" className="font-semibold hover:text-blue-600">
            Contact
          </a>

          {isAuthenticated ? (
            <>
              <p className="text-sm font-medium">{user?.name}</p>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white font-bold py-2 rounded-md hover:bg-red-600 transition w-full"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition text-center"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </header>
  );
};
