import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-4 ">
      <div className="container  mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex items-center gap-2 font-bold text-white text-lg tracking-wide mb-2 sm:mb-0">
          <span className="text-xl sm:text-2xl font-extrabold">Zv</span>
          <span>
            <span className="text-[#037BFE]">MERN </span> Stack Developer
          </span>
        </div>
        <div className=" text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Zignesh. All rights reserved.
      </div>
       
      </div>
    
    </footer>
  );
};

export default Footer;
