import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Certificates from './pages/Certificates';
import Contacts from './pages/Contacts';

function App() {
  return (
    <BrowserRouter>
      {/* Permanent Dark Theme Base */}
      <div className="flex min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-zinc-100 selection:text-zinc-900">
        
        <Nav />
        
        <main className="flex-1 ml-20 lg:ml-64 p-8 lg:p-12 overflow-y-auto">
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