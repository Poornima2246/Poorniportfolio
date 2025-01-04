 
 
import React from 'react';
import car from '../Assets/car.jpg';
import cake from '../Assets/caes.jpg';
import { motion   } from 'framer-motion';

function Project1() {
  const projects = [
    {
      title: 'Sg-Cars',
      stack: 'React.js, Swiper.js, UI/UX Design',
      image: car,
      link: 'https://poornima2246.github.io/Cars/',
    },
    {
      title:  " cak'es ",
      stack: 'React.js, UI/UX Design, Node.js MongoDB - Fullstack project',
      image:  cake,
      link: 'https://poornima2246.github.io/Cake/',
    },
  ];

  return (
    <div className='z-[1] w-full flex justify-center items-center bg-black'>
      <div className='text-center w-full px-4 md:px-10 lg:px-20'>
        <div className='text-white'>
          <motion.h1 
          initial ={{y: -150 , opacity : 0}}
          whileInView={{y: 0 , opacity :1 }}
          transition={{delay:1, duration: 1}}
          viewport={{ once: true}}
          className='text-3xl sm:text-4xl lg:text-5xl font-semibold  bg-clip-text bg-gradient-to-tl from-cyan-300 to-purple-600   inline-block text-transparent'>
            My <span className='bg-clip-text text-transparent bg-gradient-to-tr from-sky-300 to-purple-600 font-semibold'>Project</span>
          </motion.h1>
        </div>

        {projects.map((project, index) => (
          <motion.div 
          initial ={{y: -150 , opacity : 0}}
          whileInView={{y: 0 , opacity :1 }}
          transition={{delay:2, duration: 1}}
          viewport={{ once: true}}
          key={index} className='flex flex-col md:flex-row justify-center items-center w-full md:gap-12 py-4 mt-10'>
            {/* Image Section */}
    
       <div   
       
       class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl  ">
        <div   
          
        class=" w-full  ">
          <img class="w-[500px] h-[300px] transition-transform duration-500 group-hover:-hue-rotate-30rotate-3 group-hover:scale-125 group-hover:opacity-70" src= {project.image} alt="" />
        </div>
 
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div> 

        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center p-5 text-center transition-all duration-500 group-hover:translate-y-0">
       <a href={project.link} target="_blank" rel="noopener noreferrer">
        <button class="bg-gradient-to-tr from-cyan-300 to bg-purple-900 mb-3 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-2 rounded-lg">View Project</button>
        </a>
        </div>  
      </div>


            {/* Description Section */}
            <div className='flex flex-col mt-4 md:mt-0 text-center md:text-left '>
              <h1 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-3  '>{project.title}</h1>
              <h2 className='text-white text-sm sm:text-base lg:text-lg w-80'>
                <span className='font-bold'>Stack:</span> {project.stack}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Project1;
