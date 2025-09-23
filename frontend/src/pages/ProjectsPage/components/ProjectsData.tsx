// 1. Define the type for a single project
export type Project = {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string; // Optional link to the live project
  repoLink?: string; // Optional link to the GitHub repository
};

// 2. Create and export the array of your projects
const projectsData: Project[] = [
  {
    title: 'Full Stack Secure Authentication Service',
    description:
      'A robust, full-stack user authentication service built from the ground up, providing a secure and seamless user access flow for modern web applications with JWT and Google OAuth 2.0.',
    technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'OAuth2.0'],
    repoLink: 'https://github.com/your-username/auth-service', // <-- Update this link
  },
  {
    title: 'Recursive Algorithm Explorer: Tower of Hanoi',
    description:
      'An interactive web application designed to demystify the classic Tower of Hanoi puzzle. This tool provides a step-by-step visual representation of the recursive algorithm, allowing users to select the number of disks and observe the optimal solution in real-time. It showcases a practical application of recursive logic and DOM manipulation to create an engaging educational experience.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://naveen-virigineni.github.io/Tower-of-hanoi/', // <-- Update this link
    repoLink: 'https://github.com/Naveen-Virigineni/Tower-of-hanoi', // <-- Update this link
  },
];

export default projectsData;