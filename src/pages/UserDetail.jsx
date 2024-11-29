import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.users.find((user) => user.id === parseInt(id))
  );

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-500">User not found</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-gray-100">
      <div className="w-full max-w-lg bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-4">{user.name}</h1>
        <div className="space-y-3">
          <p className="text-gray-400">
            <span className="font-semibold text-gray-200">Email:</span> {user.email}
          </p>
          <p className="text-gray-400">
            <span className="font-semibold text-gray-200">Phone:</span> {user.phone}
          </p>
          <p className="text-gray-400">
            <span className="font-semibold text-gray-200">Website:</span>{' '}
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              {user.website}
            </a>
          </p>
          <p className="text-gray-400">
            <span className="font-semibold text-gray-200">Company:</span> {user.company.name}
          </p>
          <p className="text-gray-400">
            <span className="font-semibold text-gray-200">Address:</span> {`${user.address.suite}, ${user.address.street}, ${user.address.city}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
