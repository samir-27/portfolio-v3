import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, Code2, Award, Mail, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { path: '/', name: 'Home', icon: Home },
  { path: '/about', name: 'About', icon: User },
  { path: '/skills', name: 'Skills', icon: Code2 },
  { path: '/certificates', name: 'Certificates', icon: Award },
  { path: '/contacts', name: 'Contact', icon: Mail },
];

export default function Nav() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed left-0 top-0 h-screen w-20 lg:w-64 border-r border-border-line bg-secondary flex flex-col py-8 z-50">
      
      {/* Logo */}
      <div className="px-6 mb-10 flex items-center gap-3">
        <div className="px-4 h-10 bg-accent text-accent-txt rounded-xl flex items-center justify-center font-bold text-xl">
          Samir Sumara
        </div>
     
      </div>

      {/* Links */}
      <ul className="flex flex-col gap-2 px-3">
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink to={item.path} className="relative flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium group">
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div layoutId="active-nav" className="absolute inset-0 bg-accent rounded-xl -z-10" />
                  )}
                  <item.icon size={20} className={isActive ? 'text-accent-txt' : 'text-txt-muted group-hover:text-txt-main'} />
                  <span className={`hidden lg:block ${isActive ? 'text-accent-txt font-semibold' : 'text-txt-muted group-hover:text-txt-main'}`}>
                    {item.name}
                  </span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Theme Toggle */}
      <div className="mt-auto px-4">
        <button onClick={toggleTheme} className="flex items-center gap-3 w-full p-3 rounded-xl border border-border-line bg-dominant text-txt-main hover:bg-border-line/50 transition-all">
          {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
          <span className="hidden lg:block text-xs font-semibold uppercase">
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </span>
        </button>
      </div>
    </nav>
  );
}