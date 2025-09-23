const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
const ContactPage = () => {
    return (
        <div className="bg-slate-50 dark:bg-gray-900 text-slate-800 dark:text-slate-200 font-sans transition-colors duration-300">
            <div className="container mx-auto p-4 sm:p-6 lg:p-8">
                <main className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">

                    {/* --- CONTACT SECTION --- */}
                    <section id="contact" className="text-center">
                        <h2 className="text-4xl font-extrabold text-slate-800 dark:text-slate-100">
                            Get In Touch
                        </h2>
                        
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
                            The best way to reach me is by email. I'm always open to discussing new projects and opportunities.
                        </p>

                        {/* Container for the email text, styled to be clean and prominent */}
                        <div className="mt-8 inline-flex items-center gap-3 bg-slate-100 dark:bg-gray-700 py-3 px-6 rounded-lg">
                            <MailIcon/>
                            <span className="text-lg font-medium text-slate-900 dark:text-slate-100">
                                naveenvitap@gmail.com
                            </span>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default ContactPage;