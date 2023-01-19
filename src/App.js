import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Home } from './pages/home';
import { Food } from './pages/food';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food">
            <Route default path="" element={<Food type="all" />} />
            <Route path="breakfast" element={<Food type="breakfast" />} />
            <Route path="lunch" element={<Food type="lunch" />} />
            <Route path="dinner" element={<Food type="dinner" />} />
            <Route path="veg" element={<Food type="veg" />} />
            <Route path="nonveg" element={<Food type="nonveg" />} />
          </Route>
          <Route path="*" element={<p className="display-1 text-danger">Error 404! Page not Found!</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
