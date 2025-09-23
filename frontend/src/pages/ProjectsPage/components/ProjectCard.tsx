
import type { Project } from './ProjectsData.tsx'; // Import the type
 // Import the type

const ProjectCard = ({ title, description, technologies, liveLink, repoLink }: Project) => {
  return (
    <div className="bg-slate-50 dark:bg-gray-800 p-6 rounded-lg border border-slate-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Project Title */}
      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">{title}</h3>

      {/* Project Description */}
      <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">{description}</p>
      
      {/* Technology Tags */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-slate-200 dark:bg-gray-700 text-slate-800 dark:text-slate-200 text-xs font-medium px-2.5 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="mt-auto pt-4 border-t border-slate-200 dark:border-gray-700 flex items-center gap-4">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 font-semibold transition-colors duration-300"
          >
            Live Demo →
          </a>
        )}
        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-semibold transition-colors duration-300"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;