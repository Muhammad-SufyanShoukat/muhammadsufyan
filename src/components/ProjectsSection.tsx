'use client';

import { motion, Variants } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, Star } from 'lucide-react';
import { useState } from 'react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React.js frontend, Express.js backend, and MongoDB database. Features include user authentication, payment integration, and admin dashboard.',
      image: '/api/placeholder/600/400',
      technologies: ['React.js', 'Express.js', 'MongoDB', 'Stripe', 'JWT'],
      category: 'Full Stack',
      liveUrl: '#',
      githubUrl: '#',
      date: '2024',
      team: '3 developers',
      status: 'Completed',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Modern task management application built with Next.js and TypeScript. Features real-time updates, drag-and-drop functionality, and team collaboration tools.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Socket.io'],
      category: 'Frontend',
      liveUrl: '#',
      githubUrl: '#',
      date: '2024',
      team: 'Solo project',
      status: 'Completed',
    },
    {
      id: 3,
      title: 'Social Media API',
      description: 'RESTful API for social media platform with Express.js and MySQL. Includes user management, post creation, real-time messaging, and file upload functionality.',
      image: '/api/placeholder/600/400',
      technologies: ['Express.js', 'MySQL', 'JWT', 'Multer', 'Socket.io'],
      category: 'Backend',
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
      team: '2 developers',
      status: 'Completed',
    },
    {
      id: 4,
      title: 'Real-time Chat App',
      description: 'Real-time messaging application with React.js frontend and Node.js backend. Features include group chats, file sharing, and message encryption.',
      image: '/api/placeholder/600/400',
      technologies: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'JWT'],
      category: 'Full Stack',
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
      team: 'Solo project',
      status: 'In Progress',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website built with Next.js and TypeScript. Features smooth animations, dark mode, and SEO optimization.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'Frontend',
      liveUrl: '#',
      githubUrl: '#',
      date: '2024',
      team: 'Solo project',
      status: 'Completed',
    },
    {
      id: 6,
      title: 'Blog CMS',
      description: 'Content Management System for blogs with admin panel. Built with Express.js backend and React.js frontend with rich text editor.',
      image: '/api/placeholder/600/400',
      technologies: ['React.js', 'Express.js', 'PostgreSQL', 'Quill.js', 'AWS S3'],
      category: 'Full Stack',
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
      team: '4 developers',
      status: 'Completed',
    },
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Showcase of my recent work demonstrating expertise in MERN stack development,
            from concept to deployment.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600">
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  💻
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-white/90 rounded-full text-gray-700 hover:text-blue-600 transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-white/90 rounded-full text-gray-700 hover:text-gray-900 transition-colors"
                    aria-label="View source code"
                  >
                    <Github size={16} />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    project.status === 'Completed'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-md">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Project Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={12} />
                    <span>{project.team}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
         <motion.a
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
  href="https://github.com/Muhammad-SufyanShoukat"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto w-fit"
>
  <Github size={18} />
  View My GitHub Profile
</motion.a>

        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;