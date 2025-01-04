
// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaGithub } from "react-icons/fa6";
// import { FaWhatsapp } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";


// function Navbar() {
//   return (
//     <div className="absolute bg-black z-[1] w-full">
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ type: 'spring', stiffness: 150 }}
//         className="flex  justify-between items-center w-full max-w-4xl mx-auto p-4 bg-white bg-opacity-20 border-purple-400 border-2 rounded-bl-2xl rounded-br-2xl  "
//       >
//         <div className='justify-start'>
//         <h1 className="text-transparent bg-gradient-to-br from-sky-200 to-purple-500 inline-block bg-clip-text font-semibold text-2xl">Portfolio</h1>
//         </div>
//         {/* menubar */}
//         <div className=' '>
//         <ul className="flex gap-5 font-thin text-purple-200 cursor-pointer transition duration-150">
//           <li className="hover:text-black">About</li>
//           <li className="hover:text-black">Project</li>
//           <li className="hover:text-black">Contact</li>
//         </ul>
//         </div>
//         <div className='flex justify-center'>
//         <ul className=' flex gap-5 font-thin text-purple-400 cursor-pointer transition duration-150'>
//          <li><a href="https://github.com/Poornima2246?tab=repositories"><FaGithub/></a></li>
//          <li><a href=" https://wa.me/7010039610"><FaWhatsapp /></a></li>
//          <li><a href="tel:+7010039610"><FaPhoneAlt /></a></li>
//         </ul>
//         </div>
        
//       </motion.div>
//     </div>
//   );
// }

// export default Navbar;
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <div className="absolute bg-black z-[1] w-full">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ stiffness: 50 }}
        className="flex justify-between items-center w-full max-w-4xl mx-auto p-4 bg-white bg-opacity-20 border-purple-400 border-2 rounded-bl-2xl rounded-br-2xl"
      >
        <div className="justify-start">
          <h1 className="text-transparent bg-gradient-to-br from-sky-200 to-purple-500 inline-block bg-clip-text font-semibold text-2xl">
            Portfolio
          </h1>
        </div>
        {/* Menu bar */}
        <div>
          <ul className="flex gap-5 font-thin text-purple-200 cursor-pointer transition duration-150">
            <li>
              <Link to="home" smooth={true} duration={0} className="hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={0} className="hover:text-black">
                Skills
              </Link>
            </li>
            <li>
              <Link to="project" smooth={true} duration={2000} className="hover:text-black">
                Project
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <ul className="flex gap-5 font-thin text-purple-400 cursor-pointer transition duration-150">
            <li>
              <a href="https://github.com/Poornima2246?tab=repositories">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://wa.me/7010039610">
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a href="tel:+7010039610">
                <FaPhoneAlt />
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default Navbar;
