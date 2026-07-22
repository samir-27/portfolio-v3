import { motion } from 'framer-motion';
import { Monitor } from 'lucide-react';
import job from "../assets/home.png"
import resume from "../assets/resume.png"
import stepzone from "../assets/stepzone.png"
import weather from "../assets/weather.png"

export default function Projects() {
  const projects = [
    {
      title: 'Job Portal',
      image: job,
      liveLink: null,
      githubLink: '#',
    },
    {
      title: 'e-commerce',
      image: stepzone,
      liveLink: null, 
      githubLink: '#',
    },
    {
      title: 'Weather App',
      image: weather,
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Resume builder',
      image: resume,
      liveLink: null,
      githubLink: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <section className="min-h-[85vh] w-full flex flex-col py-12 relative overflow-hidden">
      
      {/* Optional: Subtle background glow to break up the solid black */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14 border-b border-zinc-800/50 pb-6 flex items-center justify-between"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-50 tracking-tight">
            Something I've Built
          </h2>
          {/* Decorative dash */}
          <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-zinc-800/50 to-transparent ml-8" />
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              // Card Wrapper: Adds background, padding, and hover lift
              className="group flex flex-col bg-zinc-900/30 hover:bg-zinc-900/60 border border-zinc-800/50 hover:border-zinc-700/80 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/5"
            >
              
              {/* Image Container: Perfectly constrained to 16:9 */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-950 mb-5 border border-zinc-800/50">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  // w-full h-full object-cover ensures it fills the box without distortion
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle overlay that fades out on hover */}
                <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-zinc-100 text-center mb-5 tracking-wide group-hover:text-indigo-400 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 w-full mt-auto">
                {project.liveLink && (
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    // Modern glassy indigo button
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 hover:border-indigo-500/40 text-indigo-400 text-sm font-semibold rounded-lg transition-all duration-300"
                  >
                    <Monitor size={16} />
                    Live
                  </a>
                )}

                {project.githubLink && (
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    // Sleek secondary button
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-zinc-800/50 hover:bg-zinc-700 border border-zinc-700/50 hover:border-zinc-600 text-zinc-300 hover:text-zinc-50 text-sm font-semibold rounded-lg transition-all duration-300"
                  >
             
                    Code
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}