import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

import './App.css';

function App() {
  return (
    <Router>
      <div className='bg'>
      </div>
      <div 
      className="flex-column justify-flex-start content" 

      >
        <Header />
        <div className="container">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route 
              path="/skills"
              element={<Skills />}
            />
            <Route 
              path="/projects"
              element={<Projects />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
