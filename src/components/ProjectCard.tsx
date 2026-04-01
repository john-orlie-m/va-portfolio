import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-surface shadow-xl flex flex-col group border border-outline-variant/10 hover:shadow-2xl transition-shadow duration-300">
      <div className="bg-surface-container-highest overflow-hidden" style={{ height: '200px' }}>
        <img
          alt={project.title}
          className="w-full h-full object-cover object-top"
          src={project.image}
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-8 grow flex flex-col">
        <span className="text-[9px] uppercase tracking-widest text-primary-fixed-dim border border-primary-fixed-dim/30 px-2 py-0.5 font-bold mb-4 w-fit">
          {project.category}
        </span>
        <h3 className="text-xl font-headline font-bold mb-3 min-h-15">{project.title}</h3>
        <p className="text-secondary text-sm mb-6 grow leading-relaxed min-h-24">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tools.map(tool => (
            <span key={tool} className="text-[10px] uppercase tracking-widest bg-surface-container-highest text-secondary border border-outline-variant/20 px-2 py-1 font-medium">
              {tool}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-fixed font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all group/btn"
        >
          View Project <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;