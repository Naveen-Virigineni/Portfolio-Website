const CallToAction = ()=>{
    return (
        <section className="mt-12 p-6 bg-blue-50 dark:bg-gray-700/50 rounded-lg text-center">
               <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
                   Let's Build Something Amazing
               </h2>
               <p className="mt-2 text-slate-600 dark:text-slate-300">
                   I'm currently seeking a new role where I can contribute to impactful projects with a collaborative team.
               </p>
               <a 
                   href="mailto:your-email@example.com"
                   className="mt-4 inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
               >
                   Get in Touch
               </a>
        </section>
    );
}
export default CallToAction;