import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
     {
  title: 'Frontend Guru',
  description: 'A modern frontend learning platform with interactive video tutorials, AI assistant, and payment integration',
  image: './frontendguru.png',
  tech: [
    'React',
    'Vite',
    'Tailwind CSS',
    'shadcn/ui',
    'Magic UI',
    'Firebase',
    'Clerk Auth',
    'Razorpay',
    'React Query',
    'React Router DOM',
    'Framer Motion',
    'EmailJS',
    'ChatGPT',
    '11Labs AI'
  ],
  liveLink: 'https://frontend-guru.netlify.app/', // replace with your actual live URL
  githubLink: 'https://github.com/yourusername/frontend-guru', // replace with your GitHub repo link
},
{
  title: 'Meditate Me',
  description: 'A soothing meditation app featuring guided sessions, image carousels, and seamless user experience',
  image: './meditateme.png',
  tech: [
    'React',
    'Vite',
    'Tailwind CSS',
    'shadcn/ui',
    'Magic UI',
    'DaisyUI',
    'Embla Carousel',
    'React Router DOM',
    'Clerk Auth',
    'Supabase'
  ],
  liveLink: 'https://meditate-me.netlify.app/', // replace with your actual live URL
  githubLink: 'https://github.com/yourusername/meditate-me', // replace with your GitHub repo link
},
{
  title: 'MyCertifolio',
  description: 'A personal digital portfolio to showcase certificates, academic thesis, and achievements with a clean, animated UI',
  image: './mycertifolio.png',
  tech: [
    'React',
    'Vite',
    'TypeScript',
    'Tailwind CSS',
    'shadcn/ui',
    'Magic UI',
    'Embla Carousel',
    'React Router DOM',
    'Framer Motion',
    'Zod',
    'React Hook Form',
    'TanStack React Query',
    'Lucide React',
    'Supabase',
    'Radix UI',
    'Sonner'
  ],
  liveLink: 'https://mycertifolio.netlify.app/', // replace with your actual deployed link
  githubLink: 'https://github.com/yourusername/mycertifolio', // replace with your actual repo
},
{
  title: 'Creative Portfolio',
  description: 'An interactive 3D portfolio built with Next.js showcasing projects, contact form, animations, and visual effects for a stunning developer presence',
  image: './portfolio.png',
  tech: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Framer Motion',
    'Three.js',
    'React Three Fiber',
    'Drei',
    'ThreeJS Toys',
    'React Hook Form',
    'Lucide React',
    'React TSParticles',
    'EmailJS',
    'Sonner'
  ],
  liveLink: 'https://your-portfolio.netlify.app/', // replace with actual deployed URL
  githubLink: 'https://github.com/yourusername/nextjs-creative-portfolio' // replace with actual repo
},



    {
      title: 'Albert AI',
      description: 'An virtual assistant that interacts with users through voice',
      image: './albert.png',
      tech: ['Javascript', 'Bootstrap', 'Siriwave', 'ParticlesJS', 'Speech Recognition API'],
      liveLink: 'https://albert-ai-three.vercel.app/',
      githubLink: 'https://github.com/trustN12/AlbertAI.git',
    },
    {
      title: 'CodeQuest App',
      description: 'A web-app with a coding quiz and live javascript editor.',
      image: './codequest.png',
      tech: ['React', 'Tailwind CSS', 'React-Ace', 'React-Router', 'Framer-motion'],
      liveLink: 'https://code-quest-mu.vercel.app/',
      githubLink: 'https://github.com/trustN12/CodeQuest.git',
    },
    {
      title: 'Oceana',
      description: 'A visually engaging and interactive web platform dedicated to raising awarness about marine life and ocean protection.',
      image: './oceana.png',
      tech: ['React', 'Tailwind CSS', 'GSAP', 'clip-path'],
      liveLink: 'https://oceana-six.vercel.app/',
      githubLink: 'https://github.com/trustN12/Oceana.git',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-tertiary rounded-lg overflow-hidden neon-border"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/50 hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 neon-text">{project.title}</h3>
                  <p className="text-textSecondary mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-secondary text-sm px-2 py-1 bg-secondary/10 rounded neon-text"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveLink}
                      className="btn-primary text-sm py-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      className="btn-primary text-sm py-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
