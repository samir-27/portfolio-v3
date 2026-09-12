import { motion } from 'framer-motion';
import about from "../assets/png/about.png";
import { ArrowUpRight, User } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden py-8">
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-fullblur-3xl" />
      <div className="relative w-full max-w-6xl">
        
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          
          {/* Left Column: Text Content */}
          <div className="order-2 flex flex-col lg:order-1">
            
            {/* Section Header */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10 flex flex-col items-start gap-4"
            >
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                <span className="h-px w-8 bg-amber-300" />
                A little context
              </div>
              <h2 className="flex items-center gap-3 text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
                <User size={28} className="text-amber-200" />
                About Me
              </h2>
            </motion.div>

            {/* Reduced Paragraphs */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-6"
            >
              <motion.div variants={itemVariants}>
                <p className="text-xl font-light leading-relaxed text-zinc-300 lg:text-2xl">
                  Hi, I am <span className="font-semibold text-zinc-100">SAMIR</span>, a web developer specializing in the MERN stack. I focus on building clean, scalable, and functional digital experiences.
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <p className="text-base leading-7 text-zinc-400 lg:text-lg">
                  Currently, I'm sharpening my logical thinking through Data Structures and Algorithms (DSA) and LeetCode. When I'm away from the keyboard, you'll likely find me playing chess—a game I love for its deep focus and strategic foresight.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="mt-3 grid grid-cols-2 gap-3 border-t border-zinc-800 pt-5 sm:grid-cols-3">
                <div><p className="text-lg font-semibold text-zinc-100">MERN</p><p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">Core stack</p></div>
                <div><p className="text-lg font-semibold text-zinc-100">DSA</p><p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">Always learning</p></div>
                <div><p className="text-lg font-semibold text-zinc-100">Chess</p><p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">Off-screen mode</p></div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Image with Floating Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-1 flex items-center justify-center lg:order-2"
          >
            <div className="absolute h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
            <div className="absolute bottom-6 left-0 z-20 flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950/80 px-3 py-2 text-xs font-medium text-zinc-300 backdrop-blur-sm">
              <ArrowUpRight size={14} className="text-amber-200" />
              Curious by default
            </div>
            
            <motion.img
              src={about}
              alt="Samir - Web Developer"
              className="relative z-10 w-full max-w-md object-contain drop-shadow-2xl lg:max-w-lg"
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
      </div>
    </section>
  );
}