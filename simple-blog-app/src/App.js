import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import CreatePost from './pages/CreatePost/CreatePost';
import EditPost from './pages/EditPost/EditPost';
import ViewPost from './pages/ViewPost/ViewPost';

function App() {
  return (
    // Router component wraps the entire application to enable routing
    <Router>
      {/* Routes component contains all Route components */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<CreatePost />}></Route>
        <Route path='/edit/:id' element={<EditPost />}></Route>
        <Route path='/view/:id' element={<ViewPost />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
