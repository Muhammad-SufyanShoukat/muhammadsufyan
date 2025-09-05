'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin,  Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 2000);
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'muhammadsufyan1520@gmail.com', href: 'mailto:muhammadsufyan1520@gmail.com', color: 'from-blue-500 to-cyan-500' },
    { icon: Phone, title: 'Phone', value: '+923079480215', href: 'tel:+923079480215', color: 'from-green-500 to-emerald-500' },
    { icon: MapPin, title: 'Location', value: 'Lahore, PK', href: '#', color: 'from-purple-500 to-pink-500' },
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', href: 'https://github.com/Muhammad-SufyanShoukat', color: 'hover:text-white' },
    { icon: Linkedin, name: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammad-sufyan12/', color: 'hover:text-blue-600' },
  ];

  return (
    <section id="contact" className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 w-full items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h2>
              <h3 className="text-2xl font-bold text-white mb-4 sm:mb-6">
  Let&apos;s Start a Conversation
              </h3>
              <p className="text-gray-300 mb-6 sm:mb-8">
  Ready to bring your ideas to life? Let&apos;s discuss your next project and how I can help you achieve your goals.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-3 sm:p-4 bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 group w-full min-w-0"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{info.title}</h4>
                    <p className="text-gray-300 break-all">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-white mb-3">Follow Me</h4>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 sm:mb-6">
                Send Me a Message
              </h3>
              <p className="text-gray-300 mb-6 sm:mb-8">
  I&apos;m always excited to work on new projects and collaborate with amazing people. Feel free to reach out!
              </p>
            </div>
            <form onSubmit={handleSubmit} className="w-full space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name *"
                  required
                  className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white transition-all duration-200 min-w-0"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email *"
                  required
                  className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white transition-all duration-200 min-w-0"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject *"
                required
                className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white transition-all duration-200 min-w-0"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                placeholder="Message *"
                required
                className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white transition-all duration-200 resize-none min-w-0"
              />

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-3 px-4 rounded-lg font-semibold text-white ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg'
                }`}
              >
                {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Message Sent!' : 'Send Message'}
              </motion.button>

              {submitStatus === 'success' && (
                <div className="text-center text-green-400 text-sm sm:text-base">
                  Thank you! I&apos;ll get back to you within 24 hours.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
