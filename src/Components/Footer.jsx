import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function Footer(){
    
  const FotterNav = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About", link: "/" },
    { id: 3, title: "Contact", link: "/" },
  ];
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
    return(
       <footer>
        <div className="container bg-slate-200">
         <div className="justify-between flex py-4">
            <h2 className="text-2xl">Santhosh</h2>
             <ul className="flex gap-4 py-4">
                {
                    FotterNav.map((item)=>{
                   return(
                    <li className="text-5 " key={item.id}>
                    <a href={item.link}>{item.title}</a>
                    </li>
                   )
                    })
                }
            </ul>

         </div>
         <div>
         <div className="justify-between flex  items-center">
              <p className="text-center"> Copyright © {new Date().getFullYear()} Santhosh. All Rights Reserved.</p>

              <div className="flex gap-3 py-4">
                {
                    icons.map((item,index)=>{
                    return(
                      <div className="bg-white p-3 icons-fotter-bg mt-1" key={index}>
                         <item.icon className="text-xl hover:text-white icons-fotter "/>
                          </div>
                    
                    )
                    })
                }
              </div>
           </div>
         </div>
        </div>
       </footer>
    )
}
export default Footer;