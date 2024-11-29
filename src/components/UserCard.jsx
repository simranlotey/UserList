import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  return (
    <div className="p-6 bg-gray-800 text-gray-100 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
      <p className="text-gray-300 mb-1">
        <span className="font-medium text-gray-400">Email:</span> {user.email}
      </p>
      <p className="text-gray-300 mb-1">
        <span className="font-medium text-gray-400">Phone:</span> {user.phone}
      </p>
      <p className="text-gray-300 mb-4">
        <span className="font-medium text-gray-400">Company:</span> {user.company.name}
      </p>
      <Link
        to={`/user/${user.id}`}
        className="inline-block bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors duration-300"
      >
        View Details
      </Link>
    </div>
  );
};

export default UserCard;
