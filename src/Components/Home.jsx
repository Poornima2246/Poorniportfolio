// import React from 'react';
//  import back from '../Assets/backimg.png';
// import '../Components/Home.css';
//  import Navbar from './Navbar.jsx';
//  import { motion } from 'framer-motion';

// function Home() {
 

//   return (
//     <div className=' z-[1] '>
//     <div className=' grid justify-center items-center bg-black'  id='home'>   
//     <div className='relative mt-20 mb-4 0'>
//      {/* Image Container */}
//      <motion.img 
//     //  initial={{opacity:0, y :-350}}
//     //  animate={{opacity:1, y:0}}
//     //  transition={{delay:0.2, duration:2}}
//      className=' w-full h-96 md:h-auto' src={back} alt="Background" />

//       {/* Positioned H1 */}
//       <div 
//       className='absolute top-10 sm:top-24 md:top-44 lg:top-60 left-20 sm:left-36 md:left-40 lg:left-44 transform -translate-x-1/2 -translate-y-1/2 '>

//       <motion.h1 
//        initial ={{opacity:0, x:-250 }}
//        whileInView ={{opacity:1, x:0 }}
//        viewport={{ once:true}}
//        transition={{delay:0.5, duration: 0.5}}
//       className='sm:text-balance lg:text-2xl  text-white'>
//         I'm Poornima,
//          {/* <span className='text-xl'>   I’m Poornima,</span>  */}
//         </motion.h1>

//         <motion.h2 
//           initial ={{opacity:0, x:-250 }}
//           animate ={{opacity:1, x:0 }}
//           transition={{delay:0.6, duration:1}}className=' sm:text-2xl lg:text-3xl font-bold bg-gradient-to-tr text-purple-400  '> Web Developer,  </motion.h2>
 
      
//         </div>

//         {/* <div className='top-24 sm:top-36 md:top-48  lg:top-60  lg:mt-10 left-10 md:left-12 lg:left-16 absolute'> */}
//         <div className='absolute flex top-20 sm:top-36 md:top-52 lg:top-72 left-5 sm:left-16'> 
//         <motion.p
//          initial ={{opacity:0, x:-250 }}
//          animate ={{opacity:1, x:0 }}
//          transition={{delay:0.7, duration:1.5}} 
//         className='text-white text-sm md:text-base flex-wrap w-48 md:w-96 lg:w-1/2    lg:leading-7'>Greetings! I'm Poornima, a passionate and innovative Front-end Developer. With a focus on crafting immersive and engaging web experiences, I bring designs to life using modern technologies. Welcome to my portfolio—where creativity meets code!</motion.p>
         
//              <motion.div 
//               initial ={{opacity:0, x:-250 }}
//               animate ={{opacity:1, x:0 }}
//               transition={{delay:0.8, duration:2}} 
//              className='gap-2 absolute top-48  lg:top-24 flex mt-3 text-white'>
//           <button className='border-purple-500 border-2 mt-4 w-20 md:w-28 p-2  rounded-xl bg-transparent hover:bg-purple-700 transition-all   ease-in-out duration-500 font-extralight'>HIRE ME</button>
//           <button className='border-purple-500 border-2 mt-4 w-20 md:w-28 p-2  bg-transparent  rounded-xl  hover:bg-purple-700 transition-all   ease-in-out  duration-500 font-extralight'>CV</button>
//         </motion.div>
        
//         </div>
   
//      </div>
//     </div>    
//      </div> 
//   )
// }

// export default Home;


 

import React from 'react';
import back from '../Assets/backimg.png';
import CV from '../Assets/PoornimaCV.pdf';
import { IoDownloadOutline } from "react-icons/io5";
 import { animate, delay, motion } from 'framer-motion';

function Home() {
 const moto =(delay) => ({
  initial:{x: -250, opacity:0 },
  animate: {
    x: 0, 
    opacity: 1,
    transition:{duration: 1 , delay : delay},
  }
 })
  return (
    <div className="z-[1]">
      <div className="grid justify-center items-center bg-black" id="home">
        <div className="relative mt-20 mb-4">
          {/* Image Container */}
          <motion.img
            initial={{ opacity: 0, y: -350 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.4 }}
            viewport={{once:true}}
            className="w-full h-96 md:h-auto"
            src={back}
            alt="Background"
          />

          {/* Positioned H1 */}
          <div className="absolute top-10 sm:top-24 md:top-32 lg:top-52 left-20 sm:left-36 md:left-40 lg:left-44 transform -translate-x-1/2 -translate-y-1/2 items-center">
            <motion.h1
              variants={moto(0.6)}
              initial = "initial"
              animate="animate"
              viewport={{once:true}}
              className="sm:text-balance lg:text-2xl text-white"
            >
              I'm Poornima,
            </motion.h1>

            <motion.h2
              // initial={{ opacity: 0, x: -250 }}
              // whileInView={{ opacity: 1, x: 0 }}
              // viewport={{ once: true }}
              // transition={{ delay: 0.6, duration: 1 }}
              variants={moto(0.8)}
              initial = "initial"
              animate="animate"
              viewport={{once:true}}
              className="sm:text-2xl lg:text-3xl font-bold bg-gradient-to-tr  from-blue-200 to-purple-900 text-transparent inline-block  bg-clip-text"
            >
              Web Developer,
            </motion.h2>
          </div>

          <div className="absolute flex top-20 sm:top-32 md:top-40 lg:top-64 left-5 sm:left-14">
            <motion.p
               variants={moto(1)}
               initial = "initial"
               animate="animate"
               viewport={{once:true}}
 
              // initial={{ opacity: 0, x: -250 }}
              // whileInView={{ opacity: 1, x: 0 }}
              // viewport={{ once: true }}
              // transition={{ delay: 0.7, duration: 1.5 }}
              className="text-white text-sm md:text-base flex-wrap w-48 md:w-96 lg:w-1/2 lg:leading-7"
            >
              Greetings! I'm Poornima, a passionate and innovative Front-end Developer. With a focus on crafting immersive and engaging web experiences, I bring designs to life using modern technologies. Welcome to my portfolio—where creativity meets code!
            </motion.p>

            <motion.div
             variants={moto(1.3)}
             initial = "initial"
             animate="animate"
              // initial={{ opacity: 0, x: -250 }}
              // whileInView={{ opacity: 1, x: 0 }}
              // viewport={{ once: true }}
              // transition={{ delay: 0.8, duration: 2 }}
              className="gap-2 absolute top-48 sm:top-44 md:top-24 lg:top-24 flex mt-3 text-white"
            >
          
              <a href={CV} download ={CV}>
              <button className="flex border-purple-500 border-2 mt-4 w-20 md:w-28 p-2 bg-transparent rounded-xl bg-purple-800 hover:bg-purple-700 transition-all ease-in-out duration-500 font-extralight justify-evenly">
                  CV   
              </button>
              </a>
              <button class="border-purple-500 border-2 mt-4 w-20 md:w-28 p-2 rounded-xl bg-transparent hover:bg-purple-700 transition-all ease-in-out duration-500 font-extralight" href="mailto:poornimapoyyamozhi22@gmail.com">Contact</button>
              {/* <a href="mailto:poornima220500@gmail.com">
              <button className="border-purple-500 border-2 mt-4 w-20 md:w-28 p-2 rounded-xl bg-transparent hover:bg-purple-700 transition-all ease-in-out duration-500 font-extralight">
             Contact
             </button>
             </a> */}

            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
