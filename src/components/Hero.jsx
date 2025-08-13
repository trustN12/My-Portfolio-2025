import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 hero-grid"></div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-hero-pattern"></div>
      
      {/* Floating circles decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-secondary/5 rounded-full floating"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-secondary/10 rounded-full floating" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-secondary/5 rounded-full floating" style={{ animationDelay: '-4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <p className="text-secondary mb-4 neon-text">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 neon-text">
            Nabarun Biswas
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-textSecondary mb-6">
            I build things for the web.
          </h2>
          <p className="text-textSecondary text-lg md:text-xl max-w-2xl mb-8 bg-primary/50 p-4 rounded-lg backdrop-blur-sm">
            I'm a fullstack software developer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#projects" className="btn-primary inline-block">
              Check out my work!
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;