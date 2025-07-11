import ThemeBtn from "../ThemeBtn";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Resume from "../../assets/resume/Santhoshkumar.pdf";

function HeroSection() {
  const icons = [
    {
      name: "Linkedin",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/santhoshkumar-a-m-85a46627a/",
    },
    {
      name: "Gmail",
      icon: BiLogoGmail,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=amsanthoshkumar2@gmail.com",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      link: "https://github.com/A-M-Santhoshkumar",
    },
  ];
  return (
     <section>

      
    <div className="container mx-auto ">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
        {/* Left column */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h4 className="text-xl font-medium before-hero-gradient py-6"> Hy! I am Brian Miller</h4>
          <h1 className="text-3xl md:text-6xl font-bold font-syne"> Creative UI/UX Designer  </h1>
        
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            laborum voluptate tempora{" "}
          </p>

          <div>
            <a href={Resume} download target="_blank" rel="noopener noreferrer">
           
              <ThemeBtn icon={true}  isActive={true}  onClick={() => console.log("Download CV clicked")}>
              Download CV</ThemeBtn>
            </a>

            <div className="flex gap-3 py-6">
              Check out my:
              <div className="flex gap-2">
                {icons.map((item, index) => (
                  <a key={index}
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer" >
                    <item.icon size={24} className="text-gray-600 hover:text-gray-800 "/>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img src="src/assets/images/main.png"  alt="Main"  className="max-w-full h-auto"  />
        </div>
      </div>
    </div>
      </section>
  );
}

export default HeroSection;
