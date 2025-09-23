import MenuIcon from './MenuIcon';
import CloseIcon from './CloseIcon';
// Define the types for the props the component will receive
type HeaderProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  onScrollToHome: () => void;
  onScrollToAbout: () => void;
  onScrollToProjects: () =>void;
  onScrollToExperience: () =>void;
  onScrollToContact: () =>void;
};

const Header = ({ isMenuOpen, toggleMenu, onScrollToHome, onScrollToAbout, onScrollToProjects, onScrollToExperience, onScrollToContact } : HeaderProps) => {
  return (
    <div className="relative container mx-auto px-6 md:px-12 py-8">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wider">Virigineni Naveen</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={onScrollToHome} className="text-white font-semibold transition-colors duration-300">Home</button>
          <button onClick={onScrollToAbout} className="text-gray-400 hover:text-white transition-colors duration-300">About Me</button>
          <button onClick={onScrollToExperience} className="text-gray-400 hover:text-white transition-colors duration-300">Experience</button>
          <button onClick={onScrollToProjects} className="text-gray-400 hover:text-white transition-colors duration-300">Projects</button>
          <button onClick={onScrollToContact} className="text-gray-400 hover:text-white transition-colors duration-300">Contact</button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="p-2 rounded-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden" onClick={toggleMenu}>
          <MenuIcon />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-sm flex flex-col items-center pt-20 space-y-6 md:hidden">
          <button onClick={toggleMenu} className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white" aria-label="Close menu">
            <CloseIcon />
          </button>
          <button onClick={onScrollToHome} className="text-2xl text-white font-semibold">Home</button>
          <button onClick={onScrollToAbout} className="text-2xl text-gray-400 hover:text-white">About Me</button>
          <a href="#experience" onClick={toggleMenu} className="text-2xl text-gray-400 hover:text-white">Experience</a>
          <button onClick={onScrollToProjects} className="text-2xl text-gray-400 hover:text-white">Projects</button>
          <a href="#contact" onClick={toggleMenu} className="text-2xl text-gray-400 hover:text-white">Contact</a>
        </div>
      )}

      {/* Main Hero Section Content */}
      <main className="grid md:grid-cols-2 gap-16 items-center mt-20 md:mt-32">
        <div className="md:col-span-2 flex flex-col gap-y-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            I build software with code and conversation
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            A software developer leveraging advanced prompt engineering to create intelligent and efficient applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:col-span-2">
            <button onClick={onScrollToProjects} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 shadow-lg">
              View My Projects
            </button>
            <a href="/VirigineniNaveenResume.pdf" download="Virigineni-Naveen-Resume.pdf" className="border border-gray-600 hover:bg-gray-800/50 text-white font-semibold py-3 px-8 rounded-lg transition-transform transform hover:scale-105">
              Download Resume
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Header;