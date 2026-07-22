import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components
import Nav from './components/Nav';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Certificates from './pages/Certificates';
import Contacts from './pages/Contacts';
import './App.css';

function App() {
return (
    <BrowserRouter>
      <div className="flex min-h-screen font-sans">
        <Nav />
        <main className="flex-1 ml-20 lg:ml-64 p-8 lg:p-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;