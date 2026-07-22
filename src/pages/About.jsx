import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function About() {
  // Framer Motion variants for smooth entrance
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
    <section className="min-h-[85vh] w-full flex items-center justify-center py-12">
      <div className="w-full max-w-3xl">
        
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

        {/* Text Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-8"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-xl lg:text-2xl text-zinc-300 leading-relaxed font-light">
              Hi, I am <span className="font-semibold text-zinc-100">SAMIR</span>, a passionate Web Developer focused on building clean and functional digital experiences.
            </p>
            
            <p className="text-lg text-zinc-400 leading-relaxed">
              I specialize in MERN stack web development, transforming ideas into robust and scalable web applications from the ground up. I am also currently expanding my knowledge by learning Data Structures and Algorithms (DSA) and actively solving problems on LeetCode to sharpen my logical thinking. When I'm not writing code, you can usually find me playing chess—a hobby I love for its strategy, deep focus, and how it constantly challenges me to think a few steps ahead!
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}