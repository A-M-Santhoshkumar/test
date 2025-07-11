import { CgWebsite } from "react-icons/cg";
import { TbWorldWww } from "react-icons/tb";
import { RiSeoLine } from "react-icons/ri"; // ✅ Import missing icon

import bgimg from "../../assets/images/section3.webp"; // ✅ Correct import

function Section3() {
  const project = [
    {
      name: "Website design",
      link: "",
      about: "",
      icons: CgWebsite,
      bgicon: bgimg,
       projectCount:"28 Project"
    },
    {
      name: "Hosting and Domain",
      link: "",
      about: "",
      icons: TbWorldWww,
      bgicon: bgimg,
      projectCount:"17 Project"
    },
    {
      name: "SEO",
      link: "",
      about: "",
      icons: RiSeoLine,
      bgicon: bgimg,
       projectCount:"17 Project"
    },
  ];

  return (
 <section>


       

         <div className="flex container py-10 justify-between gap-5  ">
        {project.map((item, index) => {
        
          return (
         <div className="relative group w-full h-auto" key={index}>

  <div className="absolute inset-0 animation-bg-move -z-10 rounded-lg"></div>
  <div className="p-5 border-slate-900 border-2 border-solid w-full h-auto bg-white 
                  transition-transform duration-200 transform group-hover:translate-x-2 group-hover:translate-y-2 
                  rounded-lg">
            <div
  className="w-[18%] h-[63px] flex items-center justify-center"
  style={{
    backgroundImage: `url(${item.bgicon})`,
   
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}>
  <item.icons className="text-2xl animation-move" />
</div>


    <p>{item.projectCount}</p>
    <h2 className="text-3xl font-bold">{item.name}</h2>
  </div>
</div>

          );
        })}
      </div>




        </section>   

  );
}

export default Section3;
