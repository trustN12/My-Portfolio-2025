import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "JavaScript (ES6+)",
    "React18,19",
    "React Router",
    "Clerk Auth",
    "Shadcn UI",
    "Daisy UI",
    "Magic UI",
    "11Labs AI Agent",
    "Razorpay",
    "Chat Gpt",
    "Node.js",
    "Tailwind CSS",
    "Bootstrap",
    "VScode",
    "Redux",
    "Firebase",
    "EmailJS",
    "Git & Github",
    "API",
    "Framer-motion",
    "Unit testing",
    "Generative AI",
    "React-Query",
    "Next-JS",
    "Netlify",

  ];

  return (
    <section id="about" className="py-20 bg-tertiary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-textSecondary mb-4">
                Hello! I'm Nabarun, a passionate software developer with a love
                for creating beautiful and functional web applications. My
                journey in web development started back in 2023, and I've been
                hooked ever since.
              </p>
              <p className="text-textSecondary mb-4">
                Though I've had the opportunity to work on a couple of
                internships, I'm primarily self-taught, always eager to learn
                new technologies and frameworks to improve my skills. My focus
                is on building accessible, inclusive, and user-friendly digital
                experiences. Every project I take on, no matter the size, is an
                opportunity for me to grow and contribute to the community.
                Currently, I'm actively seeking new opportunities to continue
                building on my knowledge and collaborate with like-minded
                individuals who are just as passionate about technology as I am.
              </p>
              <p className="text-textSecondary">
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="grid grid-cols-2 gap-2 mt-4">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center text-textSecondary"
                  >
                    <span className="text-secondary mr-2">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative group">
                <div className="w-72 h-72 rounded-md overflow-hidden">
                  <img
                    src="./ProfilePic.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 border-2 border-secondary rounded-md -translate-x-3 -translate-y-3 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
