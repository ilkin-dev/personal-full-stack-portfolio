import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import CreateTask from './pages/CreateTask/CreateTask';
import EditTask from './pages/EditTask/EditTask';
import ViewTask from './pages/ViewTask/ViewTask';

function App() {
  return (
    <Router>
      <Routes>
        <Route element="/"><Home /></Route>
        <Route element="/create"><CreateTask /></Route>
        <Route element="/view/:id"><ViewTask /></Route>
        <Route element="/edit/:id"><EditTask /></Route>
      </Routes>
    </Router>
  );
}

export default App;
