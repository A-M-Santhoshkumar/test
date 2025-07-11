import ThemeBtn from "../ThemeBtn";

function Section1(){


return(
   <section>

    <div className="container">
     <div className="bg-primary p-20 py-4 pb-40">
     <div>
          <h4 className="text-white text-xl font-medium before-hero-gradient py-8 "> ABOUT ME</h4>
      <h2 className="text-5xl text-white">My name is micael, I’m a Designer based in 
        Australia and this is a selection of my personal and professional work.</h2>
        <h6 className="text-white py-6">Over the past 12 years, I've worked with a diverse range of clients, from startups to fortune 500 companies. I love crafting interfaces that delight users and help businesses grow.
             lorem ipsum dolor sit amet, consectet adipiscing spendisse iperdiet.</h6>

  <div className="py-8 absolute z-10 ">

          <ThemeBtn 
  icon={false}
  isActive={false}
  onClick={() => console.log("Download CV clicked")}
>
  Download CV
</ThemeBtn>
     </div>
     </div>
     </div>
   

    </div>
    </section>

)
}
export default Section1;