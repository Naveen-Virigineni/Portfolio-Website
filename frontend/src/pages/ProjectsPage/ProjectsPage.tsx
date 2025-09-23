
import ProjectCard from "./components/ProjectCard.tsx";
import projectsData from "./components/ProjectsData.tsx";

const ProjectsPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-gray-900 text-slate-800 dark:text-slate-200 font-sans transition-colors duration-300">
            <div className="container mx-auto p-4 sm:p-6 lg:p-8">
                <main className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">

                    {/* --- PROJECTS SECTION --- */}
                    <section id="projects">
                        <h2 className="text-4xl font-extrabold text-center mb-12 text-slate-800 dark:text-slate-100">
                            My Projects
                        </h2>
                        
                        {/* Grid container for project cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {projectsData.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    title={project.title}
                                    description={project.description}
                                    technologies={project.technologies}
                                    liveLink={project.liveLink}
                                    repoLink={project.repoLink}
                                />
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default ProjectsPage;