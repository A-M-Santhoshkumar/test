
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'; // <-- import Navigation module
import ThemeBtn from '../ThemeBtn'


import image1 from '../../assets/images/Projects/Projects1.webp'
import image2 from '../../assets/images/Projects/Projects2.webp'
import image3 from '../../assets/images/Projects/Projects3.webp'
import image4 from '../../assets/images/Projects/Projects4.webp'
import image5 from '../../assets/images/Projects/Projects5.webp'
import image6 from '../../assets/images/Projects/Projects6.webp'
function Section4(){
    const projectData = [
        {nameComponey:"BRANDING",details:"We build great things",img:image1,link:""},
        {nameComponey:"BRANDING",details:"We build great things",img:image2,link:""},
        {nameComponey:"BRANDING",details:"We build great things",img:image3,link:""},
        {nameComponey:"BRANDING",details:"We build great things",img:image4,link:""},
        {nameComponey:"BRANDING",details:"We build great things",img:image5,link:""},
        {nameComponey:"BRANDING",details:"We build great things",img:image6,link:""},
    ]
return(
  <section>

<div className='container flex justify-between items-center py-4 '>
         <div className='w-1/2'>
          <h4 className="text-xl font-medium before-hero-gradient py-6"> Past Projects</h4>
          <h2 className="text-3xl md:text-6xl font-bold font-syne"> The work I did for client. </h2>
         </div>

          <div>
              <ThemeBtn icon={true}  isActive={true}  onClick={() => console.log("Download CV clicked")}>
            All Projects</ThemeBtn>
          </div>
</div>

 <div className="w-full h-[450px] relative py-4">
  {/* Custom Buttons */}
  <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 text-white bg-black p-2 rounded-full cursor-pointer">
    ‹
  </div>
  <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 text-white bg-black p-2 rounded-full cursor-pointer">
    ›
  </div>

  <Swiper
    modules={[Navigation]}
    navigation={{
      prevEl: '.swiper-button-prev-custom',
      nextEl: '.swiper-button-next-custom',
    }}
    keyboard={false}
    mousewheel={false}
    autoplay={false}
    spaceBetween={20}
    breakpoints={{
      0: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
  >
    {projectData.map((item, index) => (
      <SwiperSlide key={index}>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={item.img}
          alt={item.nameComponey}
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>





  </section>
)
}
export default Section4;