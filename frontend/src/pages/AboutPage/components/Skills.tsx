// --- TYPE DEFINITIONS ---
type Skill = string;

const SkillBadge = ({ skill }: { skill: Skill }) => (
  <span className="inline-block px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-200">
    {skill}
  </span>
);

const skills: Skill[] = [
    'React', 'Node.js', 'TypeScript', 'Python', 'LLM APIs', 'Tailwind CSS',
    'JavaScript (ES6+)', 'Next.js', 'PostgreSQL', 'Docker', 'AWS', 'GraphQL',
  ];

const Skills = ()=>{
    return(
        <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 border-b-2 border-blue-500/30 pb-2">
                Skills & Technologies
            </h2>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                ))}
            </div>
        </section>
    );
}
export default Skills;