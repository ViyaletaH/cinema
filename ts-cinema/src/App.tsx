import './App.css';
import Admins from './components/Admins';
import Container from './components/Container'
import Error404 from './components/Error404';
import Movie from './components/Movie';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="movie" element={<Movie/>} />
        <Route path="admins" element={<Admins />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
