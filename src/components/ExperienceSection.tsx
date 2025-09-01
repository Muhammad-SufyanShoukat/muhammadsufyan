'use client';

import { motion, Variants } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Award, TrendingUp } from 'lucide-react';

const ExperienceSection = () => {
 const experiences = [
  {
    id: 1,
    title: 'Senior MERN Stack Developer',
    company: 'CodeMiners IT & Consultancy',
    location: 'Lahore, Pakistan',
    period: 'Nov 2024 – Aug 2025',
    duration: '10 months',
    type: 'Full-time',
    description:
      'Led development of production-level MERN applications from architecture to deployment, ensuring scalability and performance.',
    achievements: [
      'Built scalable full-stack solutions using React, Node.js, Express.js, and MongoDB/PostgreSQL',
      'Mentored junior developers and conducted code reviews, improving overall team code quality',
      'Integrated authentication, APIs, and optimized databases for better performance',
      'Delivered production-ready applications meeting business and client requirements',
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'TypeScript',
      'AWS',
    ],
    color: 'from-blue-500 to-purple-500',
  },
  {
    id: 2,
    title: 'MERN Stack Developer Intern',
    company: 'Khawarizmi IT Technologies',
    location: 'Lahore, Pakistan (Remote)',
    period: 'Apr 2024 – Oct 2024',
    duration: '6 months',
    type: 'Internship',
    description:
      'Assisted in developing and maintaining full-stack applications, collaborating with senior developers in an Agile environment.',
    achievements: [
      'Worked on RESTful APIs, authentication systems, and database integrations (PostgreSQL & MySQL)',
      'Contributed to feature development, bug fixing, and code optimization',
      'Improved team productivity through effective collaboration and Agile practices',
      'Delivered client-ready solutions under senior developer guidance',
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'JavaScript',
    ],
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 3,
    title: 'Trainee – Full Stack Development',
    company: 'PNY Trainings',
    location: 'Lahore, Pakistan',
    period: 'Oct 2023 – Apr 2024',
    duration: '6 months',
    type: 'Training',
    description:
      'Completed hands-on training in MERN stack and modern web development, building multiple capstone projects.',
    achievements: [
      'Built multiple capstone projects demonstrating skills in full-stack development and deployment',
      'Gained practical experience in React, Node.js, Express.js, MongoDB, and SQL',
      'Developed a solid foundation in full-stack architecture and best practices',
      'Enhanced skills in deploying and managing applications effectively',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'SQL', 'HTML/CSS'],
    color: 'from-orange-500 to-red-500',
  },
];


  const skills = [
    { name: 'Problem Solving', level: 95 },
    { name: 'Team Collaboration', level: 90 },
    { name: 'Project Management', level: 85 },
    { name: 'Code Review', level: 88 },
    { name: 'Technical Documentation', level: 82 },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
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
              Professional Experience
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey as a MERN stack developer, showcasing growth, achievements,
            and the impact I've made in various organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative mb-12 last:mb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-blue-500 rounded-full z-10" />

                  {/* Experience Card */}
                  <div className="ml-20">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                    >
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mb-2">
                            <Briefcase size={16} />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <span className={`px-3 py-1 text-sm font-medium text-white rounded-full bg-gradient-to-r ${exp.color}`}>
                          {exp.type}
                        </span>
                      </div>

                      {/* Meta Information */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{exp.period} ({exp.duration})</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <Award size={16} className="text-yellow-500" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: i * 0.1 }}
                              className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                            >
                              <span className="text-green-500 mt-1">•</span>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Skills & Stats Sidebar */}
          <div className="space-y-8">
            {/* Professional Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <TrendingUp className="text-blue-500" size={20} />
                Professional Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Career Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-6">Career Highlights</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">2+</div>
                  <div className="text-blue-100 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">18+</div>
                  <div className="text-blue-100 text-sm">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-blue-100 text-sm">Companies Worked</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-blue-100 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;