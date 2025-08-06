import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
// Add fade-in and bounce animation keyframes

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
    <div className="relative w-full  bg-black flex flex-col justify-center px-5  pb-10 sm:px-8 md:px-24">
      <div className="px-4 py-10 sm:px-6 md:px-10 lg:px-16">
        <h3 className="text-white font-black text-[30px] xs:text-[40px] sm:text-[50px] md:text-[60px] text-center">
          Skills
        </h3>

        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {/* Skill Item Template */}
          {[
            {
              src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
              label: "MongoDB",
              color: "text-green-400",
            },
            {
              src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
              label: "Express",
              color: "text-gray-200",
              extraClass: "bg-white rounded-full p-1",
            },
            {
              src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
              label: "React",
              color: "text-blue-400",
            },
            {
              src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
              label: "Node.js",
              color: "text-green-300",
            },
            {
              src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
              label: "Redux",
              color: "text-purple-600",
            },
            {
              src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
              label: "Git",
              color: "text-orange-600",
            },
            {
              src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
              label: "GitHub",
              color: "text-white",
            },
            {
              src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
              label: "HTML",
              color: "text-orange-500",
            },
            {
              src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
              label: "CSS",
              color: "text-blue-600",
            },
            {
              src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
              label: "JavaScript",
              color: "text-yellow-500",
            },
            {
              src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg",
              label: "Material UI",
              color: "text-blue-800",
            },
            {
              src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
              label: "SQL",
              color: "text-blue-600",
            },
            {
              src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
              label: "Bootstrap",
              color: "text-purple-600",
            },
          ].map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col items-center w-[80px] sm:w-[90px] md:w-[100px] transition-transform duration-300 hover:scale-110"
            >
              <div
                className={`relative transition duration-300 hover:shadow-lg hover:shadow-${
                  skill.color.split("-")[1]
                }-500`}
              >
                <img
                  src={skill.src}
                  alt={skill.label}
                  className={`w-12 h-12 mb-1 ${
                    skill.extraClass || ""
                  } transition duration-300`}
                />
                <div
                  className={`absolute inset-0 rounded-full bg-${
                    skill.color.split("-")[1]
                  }-500 opacity-0 transition-opacity duration-300 hover:opacity-50`}
                />
              </div>
              <span
                className={`text-xs font-semibold mt-1 text-center ${skill.color}`}
              >
                {skill.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .hover\\:shadow-lg:hover {
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        }
      `}</style>

      <style jsx>{`
        .hover\\:shadow-lg:hover {
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        }
      `}</style>

      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start py-10 gap-12">
        {/* Left Side: Introduction */}
        {/* <div className="flex-1">
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
        </div> */}
        <div className="flex-border border p-8 rounded-lg shadow-lg">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4 mb-6"
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-10, 0, -10] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="w-5 h-5 rounded-full bg-[#2701fd]"
            />
            <h1 className="text-3xl font-extrabold text-white">
              Introduction <span className="text-[#2701fd]">Overview</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-lg font-medium leading-relaxed"
          >
            I'm a skilled <span className="text-[#2701fd]">JavaScript</span>{" "}
            developer with expertise in{" "}
            <span className="text-[#2701fd]">React, Node.js, Express.js</span>,
            and <span className="text-[#2701fd]">MongoDB</span>. I build
            efficient, scalable, and user-friendly applications that solve
            real-world problems. Let's work together to bring your ideas to
            life!
          </motion.p>
        </div>

        {/* Right Side: Contact Links */}
        {/* <div className="w-full max-w-md bg-[#100D25] rounded-lg py-10 px-6 sm:px-10">
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
        </div> */}

        <div className="w-full max-w-md bg-gray-800 rounded-lg py-8 px-6 shadow-md">
          <h2 className="text-white text-2xl font-bold mb-4 text-center">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-center mb-6">
            Feel free to reach out through any of the platforms below.
          </p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <a
              href="mailto:jigu4200@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-white bg-blue-600 border border-blue-600 rounded-md px-4 py-3 hover:bg-blue-500 transition-colors duration-300 w-full"
            >
              Email <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Zignesh100"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-white bg-gray-700 border border-gray-700 rounded-md px-4 py-3 hover:bg-gray-600 transition-colors duration-300 w-full"
            >
              Github <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/zignesh-v55"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-white bg-blue-700 border border-blue-700 rounded-md px-4 py-3 hover:bg-blue-600 transition-colors duration-300 w-full"
            >
              LinkedIn <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      <div className=" py-10  ">
        <p className="text-white text-xl font-bold sm:text-xl">
          I also share Full Stack development tutorials and tips on my
          Instagram.
          <span className="text-pink-600 text-xl"> Follow me here:</span>
        </p>
        <div className="mt-4 ">
          <a
            href="https://www.instagram.com/code_ki_pathshala/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white  hover:text-[#037BFE] font-semibold"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram Logo"
              className="h-6 w-6 mr-2 "
            />
            @code_ki_pathshala
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
