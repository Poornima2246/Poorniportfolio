//  import React from 'react';
// import pro from '../Assets/pro.jpg';
// import { div } from 'framer-motion/client';

// function Project() {
//   return (
//   <div className='bg-black flex z-[1]' >
//     <div class="  justify-center w-full h-full bg-black text-center grid grid-cols-2">
//     <div class=" justify-center flex items-center ">
//       <h1 class="text-3xl font-bold text-white ">My project</h1>
//     </div>
//     <div class= "w-40 h-20 ">
//         <div className='flex'>
//         <img className=' ' src={pro} alt="" />
//         <img src={pro} alt="" />
//         </div> 

//         <div className='flex mt-6'>
//         <img src={pro} alt="" />
//         <img src={pro} alt="" />
//         </div>
//     </div>
//   </div>
//   </div>
// )
// }

// export default Project


// import React from 'react';
// import pro from '../Assets/pro.jpg';
// import { motion } from 'framer-motion';

// function Project() {
//   return (
//     <motion.div 
//     viewport={{ once: true, margin: "-200px" }}
//     initial={{ opacity: 0, y: 100 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 1 }}
//     className="flex z-[1]">
//       <div className="w-full grid grid-cols-1 sm:grid-cols-2 justify-center bg-black text-center">
//         <div className="flex items-center justify-center order-1 sm:order-1">
//           <h1 className="text-5xl ml-14 font-bold text-white">My project</h1>
//         </div>

//         <div className="order-2 sm:order-2">
//           <div className="my-5 lg:flex justify-start gap-2">
//             {/* Images row 1 */}
//             <motion.img 
//               initial={{ opacity: 0, y: 150 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1, duration: 1.5 }}
//               viewport={{ once: true }}
//               src={pro} 
//               alt="" 
//               className="rounded-2xl w-full md:w-60 lg:w-60" 
//             />
//             <motion.img
//               initial={{ opacity: 0, y: 150 }}
//                viewport={{ once: true }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1, duration: 1.5 }}
//               src={pro} 
//               alt="" 
//               className="p-2 rounded-3xl w-full md:w-60 lg:w-60 mt-6" 
//             />
//           </div>

//           <div className="lg:flex justify-start gap-2">
//             {/* Images row 2 */}
//             <motion.img 
//               initial={{ opacity: 0, y: 150 }}
//               viewport={{ once: true }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1, duration: 1 }}
//               src={pro} 
//               alt="" 
//               className="p-2 rounded-3xl w-full md:w-60 lg:w-60" 
//             />
//             <motion.img 
//               initial={{ opacity: 0, y: 150 }}
//               viewport={{ once: true }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1, duration: 1 }}
//               src={pro} 
//               alt="" 
//               className="rounded-3xl w-full md:w-60 lg:w-60" 
//             />
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default Project;


 



import React, { useMemo } from 'react';
import pro from '../Assets/pro.jpg';
import img1 from '../Assets/car.jpg';
import { motion } from 'framer-motion';





function Project() {
  // Memoizing the images array to avoid unnecessary re-creation on each render
  const projectImages = useMemo(() => {
    return [
      { id: 1, src: img1, alt: 'Project Image 1' },
    
    
     ];
  }, []);

  return (
    <motion.div 
      viewport={{ once: true, margin: "-100px" }}  // Adjusted for earlier trigger
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}  // Smoother easing
      className="flex z-[1] bg-black py-10"
    >
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 justify-center text-center">
        {/* Title Section */}
        <div className="flex items-center justify-center order-1 sm:order-1">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            viewport={{once: true}}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="text-5xl ml-14 font-bold text-white"
          >
            My Project
          </motion.h1>
        </div>

        {/* Images Section */}
        <div className="order-2 sm:order-2">
          {/* Row 1 */}
          <div className="my-5 lg:flex justify-start gap-2">
            {projectImages.slice(0, 2).map((image, index) => (
              <motion.img 
                key={image.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.3, duration: 1.1, ease: 'easeInOut' }}
                viewport={{ once: true }}
                src={image.src}
                alt={image.alt}
                className={`rounded-2xl w-full md:w-60 lg:w-60 ${index === 1 ? 'p-2 mt-6' : ''}`}
              />
            ))}
          </div>

          {/* Row 2 */}
          <div className="lg:flex justify-start gap-2">
            {projectImages.slice(2).map((image, index) => (
              <motion.img 
                key={image.id}
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.5, duration: 1.2, ease: 'easeInOut' }}
                viewport={{ once: true }}
                src={image.src}
                alt={image.alt}
                className="p-2 rounded-3xl w-full md:w-60 lg:w-60"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
