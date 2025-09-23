type EducationItem = {
  degree: string;
  institution: string;
  years: string;
  achievements : string[]
};
const educationHistory: EducationItem[] = [
    {
      degree: 'Bachelor of Technology in Computer Science and enginnering',
      institution: 'Vellore Institute of Technology',
      years: '2021 - 2025',
      achievements: ['Major in computer science and engineering', 'Graduated with a CGPA: 8.44/10.00', 'Secured free seat in the collage']
    },
    {
      degree: 'High School',
      institution: 'Bhashyam Intermediate College',
      years: '2018 - 2020',
      achievements: ['Major in Maths, Physics, Chemistry', 'Graduated with a CGPA: 9.36/10.00', 'Secured 90.9 percentile in JEE MAINS', 'Secured 5168 rank in AP-EAMCET']
    },
  ];
const Education = ()=>{
    return(
        <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 border-b-2 border-blue-500/30 pb-2">
                Education
              </h2>
              <div className="space-y-4">
                {educationHistory.map((edu, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">{edu.institution}</h3>
                      <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
                        {edu.years}
                      </p>
                    </div>
                    <p className="text-md text-slate-600 dark:text-slate-300">{edu.degree}</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-md text-slate-600 dark:text-slate-300">
                      {edu.achievements.map((point, index) => (
                          <li key={index}>
                            {point}
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
    );
}
export default Education;

  
  