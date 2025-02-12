import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io'; // Corrected import for the phone icon

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/trustN12' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/nabarun-biswas-102bb118a' },
    { icon: IoIosCall, url: 'tel:+919679188394' }, // Updated link format for phone number
  ];

  return (
    <footer className="bg-primary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-secondary transition-colors duration-300"
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
          <p className="text-textSecondary text-sm">
            Designed & Built by Nabarun Biswas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
