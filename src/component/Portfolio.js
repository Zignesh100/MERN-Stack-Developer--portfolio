import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
// Add fade-in and bounce animation keyframes
const fadeInStyle = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .fade-in {
    animation: fadeIn 1s ease-out;
  }
  @keyframes bounceDot {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  .bouncing-dot {
    animation: bounceDot 1s infinite;
  }
  @keyframes scrollMouse {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(20px); }
  }
  .scroll-mouse {
    animation: scrollMouse 1.5s infinite;
  }
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-60px); }
    to { opacity: 1; transform: translateX(0); }
  }
  .slide-in-left {
    animation: slideInLeft 1s cubic-bezier(0.4,0,0.2,1);
  }
  @keyframes slideInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .slide-in-up {
    animation: slideInUp 1s cubic-bezier(0.4,0,0.2,1);
  }
  .pulse-anim {
    animation: pulse 1.5s infinite;
  }
  @keyframes spotBounce {
    0%, 100% { transform: translateY(0); box-shadow: 0 0 12px #2701fd, 0 0 24px #2701fd44; }
    50% { transform: translateY(-16px); box-shadow: 0 0 24px #2701fd, 0 0 48px #2701fd88; }
  }
  .spot-bounce {
    animation: spotBounce 1.2s infinite;
  }
`;

const Portfolio = () => {
  // Typewriter effect for the title
  const fullTitle = "MERN Stack Developer";
  const [typedTitle, setTypedTitle] = useState("");

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      setTypedTitle(fullTitle.slice(0, current + 1));
      current++;
      if (current === fullTitle.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    // <div className="relative w-full my-24 bg-[#050816] flex flex-col justify-center px-4 sm:px-8 md:px-24">
    //   <div className="fixed inset-0 -z-10 bg-[#050816]"></div>

    //   <div className="flex w-full flex-col lg:flex-row justify-between items-center lg:items-start gap-6">
    //     {/* Left Side: Introduction */}
    //     <div className="flex-1">
    //       <motion.div
    //         initial={{ opacity: 0, x: -60 }}
    //         animate={{ opacity: 1, x: 0 }}
    //         transition={{ duration: 1 }}
    //         className="flex items-center gap-4 mb-8 "
    //       >
    //         <motion.div
    //           initial={{ y: 0 }}
    //           animate={{ y: [-10, 0, -10] }}
    //           transition={{ repeat: Infinity, duration: 1.2 }}
    //           className="w-4 h-4 rounded-full bg-[#2701fd]"
    //         />
    //         <h1 className="text-2xl sm:text-4xl  font-extrabold text-white">
    //           Introduction <span className="text-[#2701fd]">Overview.</span>
    //         </h1>
    //       </motion.div>

    //       <motion.p
    //         initial={{ opacity: 0, y: 40 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 1 }}
    //         className="max-w-2xl text-white text-left text-base sm:text-xl font-semibold leading-relaxed"
    //       >
    //         I'm a skilled JavaScript developer with expertise in{" "}
    //         <span className="text-[#2701fd]">React, Node.js, Express.js</span>,
    //         and <span className="text-[#2701fd]">MongoDB</span>. I build
    //         efficient, scalable, and user-friendly applications that solve
    //         real-world problems. Let's work together to bring your ideas to
    //         life!
    //       </motion.p>
    //     </div>

    //     {/* Right Side: Contact Links */}
    //     <div className=" bg-[#100D25]  rounded-lg py-10 px-4  m-4 ">
    //       <p className=" text-white md:text-2xl font-extrabold ">
    //         Get in touch <span className="text-[#2701fd]">Contact.</span>
    //       </p>
    //       <motion.div
    //         initial={{ opacity: 0, y: -20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 1, delay: 0.3 }}
    //         className="flex  py-8  gap-4"
    //       >
    //         <a
    //           href="mailto:jigu4200@gmail.com"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="flex items-center gap-2 text-white border border-[#037BFE] rounded-md px-4 py-2 hover:text-[#037BFE] transition-colors duration-300"
    //         >
    //           Email <Mail className="w-5 h-5" />
    //         </a>
    //         <a
    //           href="https://github.com/Zignesh100"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="flex items-center gap-2 text-white border border-[#037BFE] rounded-md px-4 py-2 hover:text-[#037BFE] transition-colors duration-300"
    //         >
    //           Github <Github className="w-5 h-5" />
    //         </a>
    //         <a
    //           href="https://www.linkedin.com/in/zignesh-v55"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="flex items-center gap-2 text-white border border-[#037BFE] rounded-md px-4 py-2 hover:text-[#037BFE] transition-colors duration-300"
    //         >
    //           LinkedIn <Linkedin className="w-5 h-5" />
    //           am,l
    //         </a>
    //       </motion.div>
    //     </div>
    //   </div>
    // </div>


     <div className="relative w-full py-16 sm:py-24 bg-[#050816] flex flex-col justify-center px-4 sm:px-8 md:px-24">
      <div className="fixed inset-0 -z-10 bg-[#050816]" />

      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">
        {/* Left Side: Introduction */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4 mb-6 sm:mb-10"
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-10, 0, -10] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="w-4 h-4 rounded-full bg-[#2701fd]"
            />
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
              Introduction <span className="text-[#2701fd]">Overview.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl text-white text-left text-base sm:text-lg md:text-xl font-medium leading-relaxed"
          >
            I'm a skilled JavaScript developer with expertise in{" "}
            <span className="text-[#2701fd]">React, Node.js, Express.js</span>,
            and <span className="text-[#2701fd]">MongoDB</span>. I build
            efficient, scalable, and user-friendly applications that solve
            real-world problems. Let's work together to bring your ideas to
            life!
          </motion.p>
        </div>

        {/* Right Side: Contact Links */}
        <div className="w-full max-w-md bg-[#100D25] rounded-lg py-10 px-6 sm:px-10">
          <p className="text-white text-xl sm:text-2xl font-extrabold mb-6">
            Get in touch <span className="text-[#2701fd]">Contact.</span>
          </p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4"
          >
            <a
              href="mailto:jigu4200@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-white border border-[#037BFE] rounded-md px-4 py-2 hover:text-[#037BFE] transition-colors duration-300 w-full sm:w-auto"
            >
              Email <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Zignesh100"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-white border border-[#037BFE] rounded-md px-4 py-2 hover:text-[#037BFE] transition-colors duration-300 w-full sm:w-auto"
            >
              Github <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/zignesh-v55"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-white border border-[#037BFE] rounded-md px-4 py-2 hover:text-[#037BFE] transition-colors duration-300 w-full sm:w-auto"
            >
              LinkedIn <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
