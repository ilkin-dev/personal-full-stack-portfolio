import './App.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import CreatePost from './pages/CreatePost/CreatePost';
import EditPost from './pages/EditPost/EditPost';
import ViewPost from './pages/ViewPost/ViewPost';

function App() {
  return (
    // Router component wraps the entire application to enable routing
    <Router>
      <div>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/create">Create Post</Link>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/view/:id" element={<ViewPost />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
