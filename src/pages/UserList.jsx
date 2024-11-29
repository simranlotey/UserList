import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import UserCard from '../components/UserCard';
import SearchBar from '../components/SearchBar';

const UserList = () => {
  const { users, status, error } = useSelector((state) => state.users);
  const [search, setSearch] = useState('');

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-500">Loading...</p>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <SearchBar search={search} setSearch={setSearch} />
      {filteredUsers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center mt-10">
          <p className="text-lg text-gray-500">No users found for your search.</p>
        </div>
      )}
    </div>
  );
};

export default UserList;
