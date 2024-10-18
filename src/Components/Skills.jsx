 

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import Ui from '../Assets/ui.png';
// import react from '../Assets/react.png';
// import js from '../Assets/js.png';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import { EffectCoverflow, Pagination } from 'swiper/modules';
// import '../Components/Skills.css';
// import { animate, motion } from 'framer-motion';

// function Skills() {
//   const moto =(delay ,duration) =>({
//     initial: {opacity: 0, x: -200},
//     visualViewport:{once: true},
//     animate: {
//       x: 0 ,
//       opacity: 1,
//       transition :{
//         duration: duration ,
//         delay: delay,
//         ease: 'anticipate' ,
        
//       }
//     }
    
//   })
//   return (
//     <div 
//       // viewport={{ once: true, margin: "-100px" }}  // Adjust the margin to  
//       // whileInView={{ opacity: 1, y: 0 }}
//       // initial={{ opacity: 0, y: 100 }}
//       // transition={{ duration: 1.2, ease: 'easeInOut' }}  // Smoother easing
//       className='bg-black justify-center' 
//     >
//       <h1 className='text-white justify-center text-center pt-5 text-2xl font-bold'>
//         My Skills
//       </h1>
//       <Swiper   
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={'auto'}
//         initialSlide={1}
//         spaceBetween={30}
//         coverflowEffect={{
//           rotate: 10,
//           stretch: 2,
//           depth: 0,
//           modifier: 5,
//           slideShadows: false,
//         }}
//         pagination={false}
//         modules={[EffectCoverflow, Pagination]}
//         className="mySwiper bg-black gap-50"
//       >
//         <div className=''>
//           <SwiperSlide>
//             <motion.img 
//             variants={moto(0.3 ,1.5)}
//              initial="initial"
//              whileInView= "animate"
//              viewport="visualViewport"
//               // initial={{ opacity: 0, x: -100 }}
//               // whileInView={{ opacity: 1, x: 0 }}
//               // transition={{ delay: 0.3, duration: 1.5, ease: 'anticipate' }}  // Faster & smoother transition
//               src={Ui} alt='' 
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <motion.img 
//               variants={moto(0.5 ,1.7)}
//               initial="initial"
//               whileInView= "animate"
//               viewport="visualViewport"
//               // initial={{ opacity: 0, x: -200 }}
//               // whileInView={{ opacity: 1, x: 0 }}
//               // transition={{ delay: 0.5, duration: 1.7, ease: 'anticipate' }}
//               src={react} alt="" 
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <motion.img 
//              variants={moto(0.7 ,2 )}
//              initial="initial"
//              whileInView= "animate"
//               viewport={{once: true}}
//               // initial={{ opacity: 0, x: -200 }}
//               // whileInView={{ opacity: 1, x: 0 }}
//               // transition={{ delay: 0.7, duration: 1.8, ease: 'anticipate' }}
//               src={js} alt="" 
//             />
//           </SwiperSlide>
//         </div>
//       </Swiper>
//     </div>
//   );
// }

// export default Skills;



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Ui from '../Assets/ui.png';
import react from '../Assets/react.png';
import js from '../Assets/js.png';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import '../Components/Skills.css';
import { animate, motion } from 'framer-motion';

function Skills() {
  const moto = (delay, duration) => ({
    initial: { opacity: 0, x: -200 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: 'anticipate',
      },
    },
  });

  return (
    <div className="bg-black justify-center">
      <div className='justify-center flex'>
      <motion.h1 
      initial={{y:-50,
        opacity : 0}}
        whileInView ={{y: 0 , opacity: 1 }}
        transition={{delay:1, duration: 1}}
        viewport={{ once: true}}
      className="text-transparent items-center   text-center pt-5  font-bold text-3xl bg-gradient-to-r from-purple-800   to-blue-300 inline-block bg-clip-text">
        My Skills
      </motion.h1></div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={1}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 10,
          stretch: 2,
          depth: 0,
          modifier: 5,
          slideShadows: false,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper bg-black gap-50"
      >
        <div className="">
          <SwiperSlide>
            <motion.img
              variants={moto(0.3, 1.5)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              src={Ui}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <motion.img
              variants={moto(0.5, 1.7)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              src={react}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <motion.img
              variants={moto(0.7, 2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              src={js}
              alt=""
            />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}

export default Skills;
