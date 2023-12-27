import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StickyNavbar from './components/navbar';
import About from './components/About/About';
import Footer from './components/Footer';
import GitHub from './components/Github/GitHub'

function App() {
  return (
    <Router>
      <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto">
          <StickyNavbar />
          <Routes>
            <Route path="/github" element={<GitHub/>} />
            <Route path="/" element={<About/>} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
