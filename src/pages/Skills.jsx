import { motion } from 'framer-motion';
import { Code2, Server, Database } from 'lucide-react';

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
    <section className="min-h-[85vh] w-full flex items-center justify-center py-12">
      <div className="w-full max-w-4xl">
        
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-16"
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
          className="flex flex-col gap-12"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col gap-6">
              
              {/* Category Title */}
              <div className="flex items-center gap-3">
                {category.icon}
                <h3 className="text-2xl font-semibold text-zinc-100 tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-4 lg:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    // Framer Motion handles the shrinking hover effect
                    whileHover={{ scale: 0.85 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    // Group class allows us to trigger inner child animations on hover
                    className="group relative w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-2xl cursor-pointer shadow-sm overflow-hidden"
                  >
                    
                    {/* State 1: Logo (Visible by default, fades out on hover) */}
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className={`w-12 h-12 lg:w-14 lg:h-14 object-contain ${skill.invert ? 'invert opacity-80' : ''}`}
                      />
                    </div>

                    {/* State 2: Text (Hidden by default, fades in on hover) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-zinc-800">
                      <span className="text-sm lg:text-base font-semibold text-zinc-100 tracking-wide">
                        {skill.name}
                      </span>
                    </div>

                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}