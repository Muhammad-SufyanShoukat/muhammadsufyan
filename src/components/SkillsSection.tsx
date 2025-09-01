'use client';

import { motion, Variants } from 'framer-motion';
import { Code, Database, Server, Globe, Smartphone, Zap } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 90, color: 'bg-blue-500' },
        { name: 'Next.js', level: 85, color: 'bg-blue-600' },
        { name: 'TypeScript', level: 80, color: 'bg-blue-600' },
        { name: 'Tailwind CSS', level: 85, color: 'bg-teal-500' },
        { name: 'HTML5/CSS3', level: 95, color: 'bg-orange-500' },
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Express.js', level: 85, color: 'bg-green-600' },
        { name: 'Node.js', level: 80, color: 'bg-green-500' },
        { name: 'RESTful APIs', level: 90, color: 'bg-blue-500' },
        { name: 'GraphQL', level: 70, color: 'bg-pink-500' },
        { name: 'JWT Auth', level: 85, color: 'bg-purple-500' },
      ],
    },
    {
      title: 'Database Management',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', level: 85, color: 'bg-green-500' },
        { name: 'PostgreSQL', level: 80, color: 'bg-blue-600' },
        { name: 'MySQL', level: 75, color: 'bg-orange-500' },
        { name: 'Redis', level: 70, color: 'bg-red-500' },
        { name: 'Mongoose ODM', level: 85, color: 'bg-green-600' },
      ],
    },
    {
      title: 'Development Tools',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git/GitHub', level: 90, color: 'bg-red-500' },
        { name: 'Docker', level: 75, color: 'bg-blue-500' },
        { name: 'VS Code', level: 95, color: 'bg-blue-600' },
        { name: 'Postman', level: 85, color: 'bg-orange-500' },
        { name: 'npm/yarn', level: 90, color: 'bg-red-500' },
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
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
              Technical Skills
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Proficient in modern web technologies with 2 years of hands-on experience
            building scalable and performant applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mr-4`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className={`h-full ${skill.color} rounded-full relative overflow-hidden`}
                      >
                        <motion.div
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold mb-2">2+</div>
                <div className="text-blue-100">Years Experience</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-blue-100">Projects Completed</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold mb-2">7+</div>
                <div className="text-blue-100">Technologies Mastered</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;