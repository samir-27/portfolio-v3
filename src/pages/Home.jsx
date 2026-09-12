import { motion } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';
import home from "../assets/png/home.png";
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/projects');
  };

  const handleResumeClick = () => {
    window.open('https://res.cloudinary.com/ddc3h3udr/image/upload/v1784774994/samir_sumra_1_zr333r.pdf', '_blank', 'noopener,noreferrer');
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden py-8 transition-colors duration-300">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full " />
      <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full" />
      <div className="relative grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        
        {/* Left Side: Text & Buttons */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
        >
          <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
            <span className="h-px w-8 bg-cyan-300" />
            Web developer & builder
          </motion.div>

          <motion.h1 variants={itemVariants} className="mb-5 text-5xl font-bold tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl">
            Hi, I'm <br className="hidden lg:block" />
            <span className="text-cyan-200">
              SAMIR
            </span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="mb-6 max-w-xl text-2xl font-semibold text-zinc-300 sm:text-3xl">
            Building useful things for the web.
          </motion.h2>

          <motion.p variants={itemVariants} className="mb-8 max-w-lg text-base leading-7 text-zinc-400 sm:text-lg">
            I craft clean, functional interfaces and full-stack experiences that make complex ideas feel simple to use.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
          
            <button onClick={handleClick} className="flex cursor-pointer items-center gap-2 rounded-lg bg-cyan-300 px-6 py-3.5 font-semibold text-zinc-950 transition-colors hover:bg-cyan-200">
              View My Work
              <ArrowRight size={18} />
            </button>
            
            <button onClick={handleResumeClick} className="flex cursor-pointer items-center gap-2 rounded-lg border border-zinc-700 px-6 py-3.5 font-semibold text-zinc-200 transition-colors duration-300 hover:border-zinc-500 hover:bg-zinc-900">
              View resume
            </button>
          </motion.div>

        </motion.div>

        {/* Right Side: Animated SVG Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-1 flex items-center justify-center lg:order-2"
        >
          <div className="absolute h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

          
          <motion.img
            src={home}
            alt="Web Developer Illustration"
            className="relative z-10 w-full max-w-md object-contain lg:max-w-lg"
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