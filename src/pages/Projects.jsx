import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, ExternalLink, FolderGit2, Monitor } from 'lucide-react';
import job from "../assets/home.png"
import resume from "../assets/resume.png"
import image from "../assets/image.png"
import weather from "../assets/weather.png"
import word from "../assets/word.png"

const technologyMarks = {
  React: 'R',
  'node.js': 'N',
  Express: 'EX',
  Nest: 'NE',
  MongoDB: 'DB',
  PostgreSQL: 'PG',
  tailwindcss: 'TW',
  websocket: 'WS',
  'Chart.js': 'CH',
};

const technologyColors = {
  React: 'text-cyan-300 bg-cyan-400/10 border-cyan-400/20',
  'node.js': 'text-lime-300 bg-lime-400/10 border-lime-400/20',
  Express: 'text-zinc-200 bg-zinc-400/10 border-zinc-400/20',
  Nest: 'text-rose-300 bg-rose-400/10 border-rose-400/20',
  MongoDB: 'text-emerald-300 bg-emerald-400/10 border-emerald-400/20',
  PostgreSQL: 'text-sky-300 bg-sky-400/10 border-sky-400/20',
  tailwindcss: 'text-blue-300 bg-blue-400/10 border-blue-400/20',
  websocket: 'text-amber-300 bg-amber-400/10 border-amber-400/20',
  'Chart.js': 'text-orange-300 bg-orange-400/10 border-orange-400/20',
};

function TechnologyBadge({ technology }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-xs font-medium ${technologyColors[technology] || 'text-zinc-300 bg-zinc-800 border-zinc-700'}`}>
      <span className="flex h-5 min-w-5 items-center justify-center rounded-md bg-current/15 px-1 text-[9px] font-bold tracking-tight">
        {technologyMarks[technology] || 'CO'}
      </span>
      {technology}
    </span>
  );
}

export default function Projects() {
  const projects = [
    {
      title: 'Word Imposter',
      image: word,
      githubLink: 'https://github.com/samir-27/word-imposter',
      description: 'A multiplayer word game built for quick matches and real-time interaction.',
      technologies: ['React', 'node.js', 'Express', 'MongoDB', 'tailwindcss', 'websocket'],
    },
    {
      title: 'Job Portal',
      image: job,
      liveLink: null,
      githubLink: 'https://github.com/samir-27/jobapp-frontend', 
      description: 'A focused hiring experience that connects candidates with their next opportunity.',
      technologies: ['React', 'node.js', 'Nest', 'MongoDB', 'tailwindcss'],
    },
    {
      title: 'e-commerce',
      image: image,
      liveLink: null, 
      githubLink: 'https://github.com/samir-27/stepzone-frontend',
      description: 'A modern storefront with a smooth product browsing and shopping flow.',
      technologies: ['React', 'node.js', 'Express', 'PostgreSQL', 'tailwindcss'],
    },
    {
      title: 'Weather App',
      image: weather,
      liveLink: 'https://myweather-27.netlify.app/',
      githubLink: 'https://github.com/samir-27/my-weather',
      description: 'A clean weather dashboard that turns live forecasts into useful visual insights.',
      technologies: ['React', 'tailwindcss', 'Chart.js'],
    },
    {
      title: 'Resume builder',
      image: resume,
      liveLink: null,
      githubLink: 'https://github.com/samir-27/resume-builder',
      description: 'A practical resume builder for shaping polished applications in less time.',
      technologies: ['React', 'node.js', 'Express', 'MongoDB', 'tailwindcss'],
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
    <section className="relative min-h-[85vh] w-full overflow-hidden pb-8">
      <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-cyan-400/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-24 h-64 w-64 rounded-full bg-amber-300/5 blur-3xl" />

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
              <span className="h-px w-8 bg-zinc-600" />
              Selected work
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
              Things I&apos;ve built
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
              A collection of products, experiments, and interfaces shaped around thoughtful user experiences.
            </p>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-xs font-medium text-zinc-400 sm:flex">
            <FolderGit2 size={15} className="text-zinc-200" />
            {projects.length} projects
          </div>
        </motion.div>

      <div className="relative w-full max-w-7xl">
        {/* Gallery Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900 hover:shadow-2xl hover:shadow-black/20"
            >
              
              {/* Image Container: Perfectly constrained to 16:9 */}
              <div className="relative mb-5 aspect-[1.65/1] w-full overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950/60 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-zinc-950/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-200 backdrop-blur-sm">
                  0{index + 1}
                </span>
              </div>

              <div className="flex flex-1 flex-col px-2 pb-2">
                <div className="mb-2 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold tracking-tight text-zinc-100 transition-colors duration-300 group-hover:text-cyan-200">
                    {project.title}
                  </h3>
                  <ArrowUpRight size={18} className="mt-1 shrink-0 text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />
                </div>
                <p className="mb-5 min-h-12 text-sm leading-6 text-zinc-400">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <TechnologyBadge key={technology} technology={technology} />
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-auto flex w-full items-center gap-2 border-t border-zinc-800 pt-3">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-cyan-300 px-3 py-2.5 text-sm font-semibold text-zinc-950 transition-colors duration-300 hover:bg-cyan-200"
                    >
                      <Monitor size={16} />
                      Live demo
                    </a>
                  )}

                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="flex items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/60 px-3 py-2.5 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-700 hover:text-zinc-50"
                    >
                      <Code2 size={16} />
                      <span className="hidden sm:inline">Source</span>
                      <ExternalLink size={13} className="text-zinc-500" />
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}