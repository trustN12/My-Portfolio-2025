import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    // Log the form data for debugging
    console.log(form);

    // Send email using EmailJS
    const templateParams = {
      from_name: form.name,      // Sender's name
      from_email: form.email,    // Sender's email
      message: form.message,     // Message content
      to_name: "Recipient's Name", // Modify this as needed
    };

    emailjs.send(
      'service_4ut58mj',          // Replace with your EmailJS service ID
      'template_85v00dl',         // Replace with your template ID
      templateParams,             // Send form data as templateParams
      'ul_il-24zdzNZ6j_R'        // Replace with your EmailJS public key
    )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setForm({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        setLoading(false);
        setError('Something went wrong. Please try again later.');
        console.error('EmailJS Error:', error);
      });
  };

  return (
    <section id="contact" className="py-20 bg-tertiary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="section-title text-center">Get In Touch</h2>
          <p className="text-textSecondary text-center mb-8">
            I'm currently looking for new opportunities. Feel free to reach out if you have any questions!
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-textSecondary mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nabarun Biswas"
                required
                className="w-full px-4 py-2 bg-primary border border-textSecondary/20 rounded-md focus:outline-none focus:border-secondary text-textPrimary"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-textSecondary mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Nabarun@example.com"
                required
                className="w-full px-4 py-2 bg-primary border border-textSecondary/20 rounded-md focus:outline-none focus:border-secondary text-textPrimary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-textSecondary mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Hello, I'd like to talk about..."
                required
                rows={4}
                className="w-full px-4 py-2 bg-primary border border-textSecondary/20 rounded-md focus:outline-none focus:border-secondary text-textPrimary resize-none"
              />
            </div>

            <div className="text-center">
              <motion.button
                type="submit"
                disabled={loading}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </div>

            {success && (
              <p className="text-green-500 text-center mt-4">
                Message sent successfully!
              </p>
            )}

            {error && (
              <p className="text-red-500 text-center mt-4">
                {error}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
