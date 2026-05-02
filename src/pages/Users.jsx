import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usersAPI } from '../services/api';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const fetchUsers = async (page) => {
    setIsLoading(true);
    setError('');

    try {
      const response = await usersAPI.getUsers(page);
      setUsers(response.data.data.data || []);
      setTotalPages(response.data.data.last_page || 1);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch users');
      setUsers([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-5 py-12">
        <h1 className="text-4xl font-bold mb-2">Users</h1>
        <p className="text-gray-600 mb-8">Browse all registered users on our platform</p>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mb-6">
            {error}
          </div>
        )}

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <p className="text-xl font-semibold">Loading users...</p>
          </div>
        ) : users.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <p className="text-xl font-semibold text-gray-600">No users found</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {users.map((user) => (
                <Link key={user.id} to={`/users/${user.id}`}>
                  <Card>
                    <div>
                      <h3 className="text-xl font-bold text-blue-600">{user.name}</h3>
                      <p className="text-gray-600">{user.email}</p>
                      {user.phone && (
                        <p className="text-gray-500 text-sm mt-2">{user.phone}</p>
                      )}
                      {user.address && (
                        <p className="text-gray-500 text-sm">{user.address}</p>
                      )}
                    </div>
                    <div className="text-blue-600 font-semibold hover:underline">
                      View Details →
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="secondary"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                ← Previous
              </Button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 rounded-md font-semibold transition ${
                        currentPage === page
                          ? 'bg-blue-600 text-white'
                          : 'bg-white border border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>

              <Button
                variant="secondary"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next →
              </Button>
            </div>

            <div className="text-center mt-6 text-gray-600">
              Page {currentPage} of {totalPages}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
