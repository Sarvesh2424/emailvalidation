import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Dashboard from './Dashboard';

function App() {
  const [emailsList, setEmailsList] = useState([]);
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home setEmailsList={setEmailsList}/>} />
          <Route path="/dashboard" element={<Dashboard emailsList={emailsList}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;