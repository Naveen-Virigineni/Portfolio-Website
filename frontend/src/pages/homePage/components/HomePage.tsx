import { useState,useRef } from "react";
import ConnectingDotsAnimation from "./ConnectingDotsAnimation.tsx";
import AboutPage from "../../AboutPage/AboutPage.tsx";
import Header from "../components/Header.tsx";
import ExperiencePage from "../../ExperiencePage/ExperiencePage.tsx";
import ProjectsPage from "../../ProjectsPage/ProjectsPage.tsx";
import ContactPage from "../../ContactPage/ContactPage.tsx";
const HomePage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const aboutRef = useRef<HTMLDivElement>(null);
    const homeRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScrollToHome = () => {
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleScrolltoAbout = () => {
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleScrolltoProjects = () => {
        projectRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleScrolltoExperience = () => {
        experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleScrolltoContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    
    return (
        <div ref={homeRef} className="text-gray-100 min-h-screen font-sans overflow-hidden">
            <ConnectingDotsAnimation />
            {/* This container is ONLY for the Home section content */}
            <Header 
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
                onScrollToHome={handleScrollToHome}
                onScrollToAbout={handleScrolltoAbout}
                onScrollToProjects={handleScrolltoProjects}
                onScrollToExperience={handleScrolltoExperience}
                onScrollToContact={handleScrolltoContact}
            />

            {/* ✅ FIX: About section is now OUTSIDE the container, allowing it to be full-width */}
            <div ref={aboutRef} className="w-full mt-32 md:mt-48 bg-black/40 backdrop-blur-sm py-0 px-6">
                {/* This inner div keeps the content centered, matching the container above */}
                <AboutPage />
                <div ref={experienceRef}><ExperiencePage /></div>
                <div ref={projectRef} ><ProjectsPage/></div>
                <div ref={contactRef}><ContactPage/></div>
            </div>
            
        </div>
    );
};

export default HomePage;