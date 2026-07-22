import { NavLink } from 'react-router-dom';
import { Home, User, Code2, Award, Mail, FolderGit2 } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { path: '/', name: 'Home', icon: Home },
  { path: '/about', name: 'About', icon: User },
  { path: '/skills', name: 'Skills', icon: Code2 },
  { path: '/projects', name: 'Projects', icon: FolderGit2 },
  { path: '/contacts', name: 'Contact', icon: Mail },
];

export default function Nav() {
  return (
    <nav className="fixed left-0 top-0 h-screen w-20 lg:w-64 border-r border-zinc-800 bg-zinc-900 flex flex-col py-8 z-50">
      
      {/* Logo */}
      <div className="px-6 mb-10 flex justify-center lg:justify-start items-center gap-3">
        <div className="w-10 h-10 bg-zinc-100 text-zinc-900 rounded-xl flex items-center justify-center font-bold text-xl shadow-sm">
          S
        </div>
        <span className="hidden lg:flex font-bold text-lg text-zinc-100 tracking-tight">
          SAMIR
        </span>
      </div>

      {/* Links */}
      <ul className="flex flex-col gap-2 px-3">
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className="relative flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium outline-none group"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute inset-0 bg-zinc-100 rounded-xl -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  
                  <item.icon
                    size={20}
                    className={`shrink-0 transition-colors duration-200 ${
                      isActive 
                        ? 'text-zinc-900' 
                        : 'text-zinc-400 group-hover:text-zinc-100'
                    }`}
                  />
                  
                  <span
                    className={`hidden lg:block transition-colors duration-200 ${
                      isActive 
                        ? 'text-zinc-900 font-semibold' 
                        : 'text-zinc-400 group-hover:text-zinc-100'
                    }`}
                  >
                    {item.name}
                  </span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="mt-auto px-4 flex flex-col gap-4">
        <p className="text-xs text-zinc-500 hidden lg:block font-medium text-center lg:text-left px-2">
          © {new Date().getFullYear()} SAMIR
        </p>
      </div>
    </nav>
  );
}