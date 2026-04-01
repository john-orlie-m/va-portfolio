import React from 'react';
import { motion } from 'motion/react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-surface-container-lowest" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-headline font-bold mb-16 text-center">Selected <span className="text-primary-fixed">Works</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;