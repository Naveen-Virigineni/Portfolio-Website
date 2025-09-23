import ExperienceItem from "./components/ExperienceItem.tsx";
import ExperienceData from "./components/ExperienceData.tsx";
// You can replace this with your actual work experience data

const ExperiencePage = () => {
    return (
        <div className=" bg-slate-50 dark:bg-gray-900 text-slate-800 dark:text-slate-200 font-sans transition-colors duration-300">
            <div className="container mx-auto p-4 sm:p-6 lg:p-8">
                <main className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">

                    {/* --- EXPERIENCE SECTION --- */}
                    <section id="experience">
                        <h2 className="text-4xl font-extrabold text-center mb-12 text-slate-800 dark:text-slate-100">
                            Work Experience
                        </h2>
                        {/* The container for the timeline */}
                        <div className="relative">
                           {/* The vertical line for the timeline */}
                           <div className="absolute left-[8px] h-full w-0.5 bg-blue-500 hidden sm:block"></div>
                           <div className="space-y-12">
                            {ExperienceData().map((job, index) => (
                                <ExperienceItem
                                    key={index}
                                    title={job.title}
                                    company={job.company}
                                    location={job.location}
                                    date={job.date}
                                    points={job.points}
                                />
                            ))}
                           </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default ExperiencePage;