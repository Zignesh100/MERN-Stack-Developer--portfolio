import React from 'react';

const Nav = () => {
  return (
    <nav className="bg-black text-gray-200 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-white text-lg tracking-wide mb-2 sm:mb-0">
          <span className="text-xl sm:text-2xl font-extrabold">Zv</span>
          <span>
            <span className="text-[#037BFE]">MERN </span> Stack Developer
          </span>
        </div>
        
        {/* Add additional navigation links here if needed */}
        <div className="flex space-x-4">
          <a href="#about" className="hover:text-[#037BFE] transition duration-300">About</a>
          <a href="#skills" className="hover:text-[#037BFE] transition duration-300">Skills</a>
          <a href="#projects" className="hover:text-[#037BFE] transition duration-300">Projects</a>
          <a href="#contact" className="hover:text-[#037BFE] transition duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

