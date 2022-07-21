import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import Events from './pages/Events';
import EventOrganizer from './pages/EventOrganizer';
import Blog from './pages/Blog';
import Privacy from './pages/Privacy';
import Header from './components/header/Header';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    document.title = "Ahun Clone"
 }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"  element={<Home/>}   />
          <Route path="/events" element={<Events/>} />
          <Route path="/eventorganizer" element={<EventOrganizer />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy"  element={<Privacy/>}   />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
