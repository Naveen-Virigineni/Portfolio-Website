
// Define the properties the component will accept
interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  date: string;
  points: string[];
}

const ExperienceItem = ({ title, company, location, date, points }: ExperienceItemProps) => {
  return (
    // Timeline item container
    <div className="relative border-l-2 border-blue-500 pl-8 pb-8 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-500"></div>

      {/* Date */}
      <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-1">{date}</p>
      
      {/* Job Title */}
      <h3 className="text-xl font-bold text-teal-600 dark:text-blue-400">{title}</h3>
      
      {/* Company & Location */}
      <p className="text-md font-semibold text-slate-700 dark:text-slate-300 mt-1">
        {company} - <span className="font-normal italic text-slate-500 dark:text-slate-400">{location}</span>
      </p>

      {/* Description points */}
      <ul className="mt-4 list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;