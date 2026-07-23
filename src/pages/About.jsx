import { motion } from 'framer-motion';
import about from "../assets/png/about.png";
import { User } from 'lucide-react';

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
    <section className="min-h-[85vh] w-full flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-6xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col order-2 lg:order-1">
            
            {/* Section Header */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl">
                <User className="text-zinc-100" size={24} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-50 tracking-tight">
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
                <p className="text-xl lg:text-2xl text-zinc-300 leading-relaxed font-light">
                  Hi, I am <span className="font-semibold text-zinc-100">SAMIR</span>, a Web Developer specializing in the MERN stack. I focus on building clean, scalable, and functional digital experiences.
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  Currently, I'm sharpening my logical thinking through Data Structures and Algorithms (DSA) and LeetCode. When I'm away from the keyboard, you'll likely find me playing chess—a game I love for its deep focus and strategic foresight.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Image with Floating Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center items-center order-1 lg:order-2"
          >
            <div className="absolute inset-0 bg-zinc-900 dark:bg-zinc-100 opacity-5 dark:opacity-10 blur-3xl rounded-full w-3/4 h-3/4 mx-auto z-0 transition-opacity duration-300" />
            
            <motion.img
              src={about}
              alt="Samir - Web Developer"
              className="w-full max-w-md lg:max-w-lg object-contain z-10 relative drop-shadow-2xl"
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