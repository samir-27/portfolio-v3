import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    // If your App.jsx doesn't have a dark background, this section wrapper will ensure the Home page does.
    <section className="min-h-[85vh] w-full flex items-center justify-center rounded-3xl transition-colors duration-300">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Side: Text & Buttons */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 mb-6 transition-colors duration-300 shadow-sm">
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight mb-4 transition-colors duration-300">
            Hi, I'm <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-zinc-100 dark:to-zinc-500">
              SAMIR
            </span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-2xl lg:text-3xl font-semibold text-zinc-500 dark:text-zinc-400 mb-6 transition-colors duration-300">
            A Web Developer.
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-zinc-500 dark:text-zinc-400 max-w-md mb-8 leading-relaxed transition-colors duration-300">
            I craft clean, minimal, and highly functional user interfaces. Turning complex problems into elegant web solutions.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            {/* Primary Button */}
            <button className="flex items-center gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-7 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity">
              View My Work
              <ArrowRight size={18} />
            </button>
            
            {/* Secondary Button */}
            <button className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors duration-300">
              Download CV
              <Download size={18} />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Animated SVG Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center items-center order-1 lg:order-2"
        >
          {/* Subtle background glow effect behind the image */}
          <div className="absolute inset-0 bg-zinc-900 dark:bg-zinc-100 opacity-5 dark:opacity-10 blur-3xl rounded-full w-3/4 h-3/4 mx-auto z-0 transition-opacity duration-300" />
          
          <motion.img
            src="https://samirsumra.netlify.app/assets/hero-WzPEhUYt.svg"
            alt="Web Developer Illustration"
            className="w-full max-w-md lg:max-w-lg object-contain z-10 relative"
            animate={{ 
              y: [0, -20, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>

      </div>
    </section>
  );
}