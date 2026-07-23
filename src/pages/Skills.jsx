import { motion } from 'framer-motion';
import { Code2, Server, Database } from 'lucide-react';
import skills from "../assets/png/skills.png";

export default function Skills() {
  // Organized skill data with categories and Devicon logo URLs
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code2 className="text-zinc-400" size={24} />,
      skills: [
        { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      ],
    },
    {
      title: 'Backend',
      icon: <Server className="text-zinc-400" size={24} />,
      skills: [
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
        // Applying an 'invert' flag here because the default Express logo is black and would be invisible on our dark theme
        { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', invert: true },
      ],
    },
    {
      title: 'Database',
      icon: <Database className="text-zinc-400" size={24} />,
      skills: [
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      ],
    },
  ];

  // Framer Motion staggered entrance animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  };

  return (
    <section className="min-h-[85vh] w-full flex items-center justify-center py-12 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl items-center">
        
        {/* Left Column: Illustrative Image */}
        {/* ADDED: Framer Motion entrance animation to the wrapper div */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          {/* CHANGED: img to motion.img and ADDED: Continuous floating animation */}
          <motion.img
            src={skills}
            alt="Skills Illustration"
            className="w-full max-w-sm lg:max-w-md object-contain"
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

        {/* Right Column: Technical Skills Content */}
        <div className="flex flex-col">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-12"
          >
            <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl">
              <Code2 className="text-zinc-100" size={24} />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-50 tracking-tight">
              Technical Skills
            </h2>
          </motion.div>

          {/* Skill Categories Wrapper */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-10"
          >
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={itemVariants} className="flex flex-col gap-5">
                
                {/* Category Title */}
                <div className="flex items-center gap-3">
                  {category.icon}
                  <h3 className="text-xl lg:text-2xl font-semibold text-zinc-100 tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Flex Wrap */}
                <div className="flex flex-wrap gap-4 lg:gap-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className="group relative px-5 py-3 lg:px-6 lg:py-4 flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-fullshadow-sm overflow-hidden"
                    >
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className={`w-6 h-6 object-contain ${skill.invert ? 'invert opacity-80' : ''}`}
                      />
                      <span className="text-sm lg:text-base font-semibold text-zinc-100 tracking-wide">
                        {skill.name}
                      </span>
                    </motion.div>
                  
                  ))}
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}