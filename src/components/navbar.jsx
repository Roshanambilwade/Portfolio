import React, { useState } from 'react'
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
        <div className='container mx-auto flex justify-between items-center'>
        <div>
            <a href="#" className='text-3xl font-bold text-white'>
                Roshan
                <span className='text-purple'>.dev</span>
               
            </a>
        </div>
        <div className='hidden md:flex space-x-10'>
            <a href="#home" className='relative text-white/80 transition duration-300 hover:text-purple group'>
              <span>Home</span>
              <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
            </a>

             <a href="#about" className='relative text-white/80 transition duration-300 hover:text-purple group'>
              <span>About</span>
              <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
            </a>

             <a href="#skills" className='relative text-white/80 transition duration-300 hover:text-purple group'>
              <span>Skills</span>
              <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
            </a>

             <a href="#projects" className='relative text-white/80 transition duration-300 hover:text-purple group'>
              <span>Projects</span>
              <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
            </a>

             <a href="#experience" className='relative text-white/80 transition duration-300 hover:text-purple group'>
              <span>Experience</span>
              <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
            </a>

             <a href="#contact" className='relative text-white/80 transition duration-300 hover:text-purple group'>
              <span>Contact</span>
              <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
            </a>
        </div>
        {/* mobile view */}

        <div className='md:hidden'>
          {isOpen ? (<FaXmark  onClick={() => setIsOpen(false)} className='text-2xl cursor-pointer'/>):(<FaBars onClick={() => setIsOpen(true)} className='text-2xl cursor-pointer'/>)}
        
        
       </div>
        </div>

      {/* mobile menu */}

       {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-white">

          {["home","about","skills","projects","experience","contact"].map((item)=>(
            <a key={item}
              href={`#${item}`}
              onClick={()=>setIsOpen(false)}
              className="hover:text-purple transition"
            >
              {item}
            </a>
          ))}

        </div>
      )}
    </nav>
  )
}

export default Navbar