import RightImageComponent from "./components/RightImageComponent.tsx";
import Education from "./components/Education.tsx";
import Skills from "./components/Skills.tsx";
import CallToAction from "./components/CallToAction.tsx";
import AboutMeComponent from "./components/AboutMeComponent.tsx";

const AboutPage = ()=> {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 text-slate-800 dark:text-slate-200 font-sans transition-colors duration-300">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <main className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="lg:flex lg:flex-row-reverse lg:items-start lg:gap-12">
            {/* --- RIGHT COLUMN (IMAGE & SOCIALS) --- */}
            <RightImageComponent/>

            {/* --- LEFT COLUMN (ABOUT ME) --- */}
            <AboutMeComponent/>
          </div>
          
          {/* --- FULL-WIDTH SECTIONS --- */}
          <div className="mt-10">
            {/* --- EDUCATION SECTION --- */}
            <Education  />
            {/* --- SKILLS & TECHNOLOGIES --- */}
                <Skills/>

             {/* --- CALL TO ACTION --- */}
             <CallToAction/>
          </div>
        </main>
      </div>
    </div>
  );
}
export default AboutPage;