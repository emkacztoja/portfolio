import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices and industry standards.',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Design Focus',
      description: 'Creating beautiful, intuitive interfaces that provide exceptional user experiences.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance',
      description: 'Optimizing applications for speed, efficiency, and seamless user interaction.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Passionate developer with a love for creating innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-primary to-blue-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-darkCard flex items-center justify-center overflow-hidden relative">
                {/* blurred gradient placeholder while image loads */}
                {!imgLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 animate-pulse filter blur-xl" />
                )}

                {!imgError ? (
                  <img
                    src="/profile.jpg"
                    alt="Profile photo"
                    className={`w-full h-full object-cover rounded-full transition-opacity duration-700 ease-out ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setImgLoaded(true)}
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="text-8xl">👨‍💻</div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 text-gray-700 dark:text-gray-300"
          >
            <p className="text-lg leading-relaxed">
              With over 5 years of experience in full-stack development, I specialize in building
              modern web applications that solve real-world problems. My journey in software development
              began with a curiosity about how things work and evolved into a passion for creating
              elegant solutions.
            </p>
            <p className="text-lg leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with the latest
              technologies and best practices. My expertise spans across frontend frameworks like React
              and Vue, backend technologies including Node.js, Python, Java and modern development tools.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source
              projects, or sharing knowledge with the developer community. I'm always excited to take on
              new challenges and collaborate on innovative projects.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-darkCard rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
