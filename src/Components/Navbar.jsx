// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import    '../Components/Nav.css';

// function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//       setMenuOpen(!menuOpen);
//     };
//       return (
    
//     <div className='bg-black ' >
//     <nav class="w-1/2 mx-auto  sm:flex sm:items-center sm:justify-between bg-white p-4   bg-opacity-30" id='nav'>
 
//     <div class=" flex items-center justify-between  ">
//     {/* <h1 class=" font-semibold focus:outline-none focus:opacity-80 text-white" href="#" aria-label="Brand">
//        Portfolio
//     </h1> */}

//     {/* togglebutton */}
//       {/* Mobile menu button */}
//     {/* <div className="ml-auto   flex justify-end sm:hidden">
          
//             <button
//               type="button"
//               className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded={menuOpen}
//               onClick={toggleMenu}
//             >
//               <span className="absolute -inset-0.5"></span>
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`}
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                 />
//               </svg>
//               <svg
//                 className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`}
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//           */}
//    <div className=" justify-center items-center ml-auto   sm:hidden">
//             <button
//               type="button"
//               className="relative inline-flex items-center justify-center rounded-md p-2  text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded={menuOpen}
//               onClick={toggleMenu}
//             >
//               <span className="absolute -inset-0.5"></span>
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`}
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                 />
//               </svg>
//               <svg
//                 className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`}
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>


//   {/* Normalmenu */}
//   <div id="hs-navbar-example" class="hidden  overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-example-collapse">
//     <div class="flex flex-row gap-5  items-center justify-center">
    
//       <a className="font-medium  text-white  hover:text-gray-400 focus:outline-none focus:text-gray-400" href="#">Poject</a>
//       <a className="font-medium  text-white  hover:text-gray-400 focus:outline-none focus:text-gray-400" href="#">About Me</a>
//       <a className="font-medium text-white   hover:text-gray-400 focus:outline-none focus:text-gray-400" href="#">Contact Us</a>

//     </div>
//   </div>
//   </div>

//    {/* Mobilemenu */}
//   {/* <div className={`sm:hidden ${menuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
//         <div className="space-y-1 px-2 pb-3 pt-2 mr-20 bg-black">
//           <Link
//             to="/"
//             className="block rounded-md px-3 py-2 text-base font-medium text-center text-white hover:bg-black hover:text-white"
//             onClick={toggleMenu}
//           >
//             Poject
//           </Link>
//           <Link
//             to="/NavCollection"
//             className="block rounded-md px-3 py-2 text-base font-medium text-center text-white hover:bg-black hover:text-white"
//             onClick={toggleMenu}
//           >
//              About Me
//           </Link>
//           <Link
//             to="/Contact"
//             className="block rounded-md px-3 py-2 text-base font-medium text-center text-white hover:bg-black hover:text-white"
//             onClick={toggleMenu}
//           >
//             Contact Us
//           </Link>
//         </div>
//       </div> */}
//         <div className={`sm:hidden w-full absolute  z[1] ${menuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
//         <div className="space-y-1 px-2 pb-3 pt-2 mr-20 bg-black">
//           <a
//             href="/NavCollection"
//             className="block rounded-md px-3 py-2 text-base font-medium text-center text-white  hover:bg-black hover:text-white"
//           >
//             Collection
//           </a>
//           <a
//             href="/About"
//             className="block rounded-md px-3 py-2 text-base font-medium  text-center text-white  hover:bg-black hover:text-white"
//           >
//             About
//           </a>
//           <a
//             href="/Contact"
//             className="block rounded-md px-3 py-2 text-base font-medium text-center text-white  hover:bg-black hover:text-white"
//           >
//             Contact Us
//           </a>
//         </div>
//       </div>
  
// </nav>
// </div>
 
//   )
// }

// export default Navbar


import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";


function Navbar() {
  return (
    <div className="absolute z-[1] w-full">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 150 }}
        className="flex  justify-between items-center w-full max-w-4xl mx-auto p-4 bg-white bg-opacity-20 border-purple-400 border-2 rounded-bl-2xl rounded-br-2xl  "
      >
        <div className='justify-start'>
        <h1 className="text-transparent bg-gradient-to-br from-sky-200 to-purple-500 inline-block bg-clip-text font-semibold text-2xl">Portfolio</h1>
        </div>
        {/* menubar */}
        <div className=' '>
        <ul className="flex gap-5 font-thin text-purple-200 cursor-pointer transition duration-150">
          <li className="hover:text-black">About</li>
          <li className="hover:text-black">Project</li>
          <li className="hover:text-black">Contact</li>
        </ul>
        </div>
        <div className='flex justify-center'>
        <ul className=' flex gap-5 font-thin text-purple-400 cursor-pointer transition duration-150'>
         <li><a href="https://github.com/Poornima2246?tab=repositories"><FaGithub/></a></li>
         <li><a href=" https://wa.me/7010039610"><FaWhatsapp /></a></li>
          
        </ul>
        </div>
        
      </motion.div>
    </div>
  );
}

export default Navbar;