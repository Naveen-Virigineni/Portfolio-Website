import profilePic from "../../../assets/Virigineni Naveen.jpg";
import MailIcon from "../../../assets/mail.png";
import GithubIcon from "../../../assets/github-mark-white.png";
import LinkedinIcon from "../../../assets/icons8-linkedin-96.png";
import  LeetCodeIcon  from "../../../assets/leetcode.png";

type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors duration-300"
  >
    {icon}
  </a>
);

const socialLinks: SocialLinkProps[] = [
    { href: 'https://github.com/Naveen-Virigineni', icon: <img src={GithubIcon} width={23} height={23}/>, label: 'GitHub Profile' },
    { href: 'https://www.linkedin.com/in/naveen-vitap/', icon: <img src={LinkedinIcon} width={27} height={27}/>, label: 'LinkedIn Profile' },
    {href: 'https://leetcode.com/u/Naveen_VIT-AP/' , icon: <img src={LeetCodeIcon} width={23} height={23}/>, label: 'Leetcode Proile'},
    { href: 'mailto:naveenvitap@gmail.com', icon: <img src={MailIcon} width={27} height={27}/>, label: 'Email Me' },
  ];

const RightImageComponent = ()=>{
    return (
        <div className="lg:w-1/3 text-center lg:sticky lg:top-12">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-white dark:border-slate-700">
                  <img
                      src={profilePic}
                      /*alt="A professional headshot of Virigineni Naveen"*/
                      className="w-full h-full object-cover"
                  />
              </div>
              <h1 className="mt-6 text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                Virigineni Naveen
              </h1>
              <p className="mt-2 text-lg font-medium text-slate-600 dark:text-slate-300">
                Software Developer
              </p>
              <div className="mt-6 flex justify-center gap-5">
                {socialLinks.map((link) => (
                  <SocialLink key={link.label} {...link} />
                ))}
            </div>
        </div>
    );
}
export default RightImageComponent;