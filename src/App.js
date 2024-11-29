import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './store/userSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';
import "./App.css"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
