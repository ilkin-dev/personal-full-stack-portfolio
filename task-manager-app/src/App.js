import './App.css';
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import CreateTask from './pages/CreateTask/CreateTask';
import EditTask from './pages/EditTask/EditTask';
import ViewTask from './pages/ViewTask/ViewTask';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { AuthContext } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {

  const { user, logout } = useContext(AuthContext);

  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Home</Link>
        {user ? (
          <>
            <Link to="/create">Create Task</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<PrivateRoute><CreateTask /></PrivateRoute>} />
          <Route path="/edit/:id" element={<PrivateRoute><EditTask /></PrivateRoute>} />
          <Route path="/view/:id" element={<PrivateRoute><ViewTask /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
