import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'
import Milk from './pages/milk';
import HomePage from './pages/main';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/milk" element={<Milk />} />
      </Routes>
    </Router>
  );
}

export default App;
