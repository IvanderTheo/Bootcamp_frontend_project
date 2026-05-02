import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { usersAPI } from '../services/api';
import { Button } from '../components/Button';

export const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUserDetail();
  }, [id]);

  const fetchUserDetail = async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await usersAPI.getUserDetail(id);
      setUser(response.data.data);
    } catch (err) {
      setError(
        err.response?.data?.message || 'Failed to fetch user details'
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">Loading user details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-md max-w-md mb-4">
          {error}
        </div>
        <Link to="/users">
          <Button>Back to Users</Button>
        </Link>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <p className="text-xl font-semibold mb-4">User not found</p>
        <Link to="/users">
          <Button>Back to Users</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-5 py-12">
        <Link to="/users" className="text-blue-600 font-semibold mb-6 inline-block hover:underline">
          ← Back to Users
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-4xl font-bold">{user.name}</h1>
              <p className="text-gray-600 text-lg">{user.email}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    Full Name
                  </label>
                  <p className="text-lg">{user.name}</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    Email
                  </label>
                  <p className="text-lg break-all">{user.email}</p>
                </div>

                {user.phone && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                      Phone
                    </label>
                    <p className="text-lg">{user.phone}</p>
                  </div>
                )}

                {user.address && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                      Address
                    </label>
                    <p className="text-lg">{user.address}</p>
                  </div>
                )}

                {user.created_at && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                      Joined
                    </label>
                    <p className="text-lg">
                      {new Date(user.created_at).toLocaleDateString()}
                    </p>
                  </div>
                )}

                {user.id && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                      User ID
                    </label>
                    <p className="text-lg text-gray-500">{user.id}</p>
                  </div>
                )}
              </div>
            </div>

            <hr className="my-8" />

            <div className="flex gap-4">
              <Link to="/users">
                <Button>Back to Users</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
