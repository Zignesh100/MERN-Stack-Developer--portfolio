import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";


const AnimatedHeader = () => {
  const canvasRef = useRef(null);
  const headerRef = useRef(null);
  const target = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  let points = [];
  let animateHeader = true;
  let width = window.innerWidth;
  let height = window.innerHeight;
  let ctx;

  useEffect(() => {
    initHeader();
    initAnimation();
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("scroll", scrollCheck);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", scrollCheck);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const initHeader = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    headerRef.current.style.height = `${height}px`;

    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext("2d");

    points = [];
    for (let x = 0; x < width; x += width / 20) {
      for (let y = 0; y < height; y += height / 20) {
        const px = x + Math.random() * (width / 20);
        const py = y + Math.random() * (height / 20);
        const p = { x: px, originX: px, y: py, originY: py };
        points.push(p);
      }
    }

    points.forEach((p1) => {
      const closest = points
        .filter((p2) => p1 !== p2)
        .sort((a, b) => getDistance(p1, a) - getDistance(p1, b))
        .slice(0, 5);
      p1.closest = closest;
      p1.circle = new Circle(p1, 2 + Math.random() * 2);
    });
  };

  const mouseMove = (e) => {
    target.current.x = e.pageX;
    target.current.y = e.pageY;
  };

  const scrollCheck = () => {
    animateHeader = document.body.scrollTop <= height;
  };

  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    headerRef.current.style.height = `${height}px`;
    canvasRef.current.width = width;
    canvasRef.current.height = height;
  };

  const initAnimation = () => {
    animate();
    points.forEach(shiftPoint);
  };

  const animate = () => {
    if (animateHeader && ctx) {
      ctx.clearRect(0, 0, width, height);
      points.forEach((p) => {
        const dist = Math.abs(getDistance(target.current, p));
        p.active =
          dist < 4000 ? 0.3 : dist < 20000 ? 0.1 : dist < 40000 ? 0.02 : 0;
        p.circle.active = p.active * 2;
        drawLines(p);
        p.circle.draw();
      });
    }
    requestAnimationFrame(animate);
  };

  const shiftPoint = (p) => {
    const duration = 1000 + 1000 * Math.random();
    const newX = p.originX - 50 + Math.random() * 100;
    const newY = p.originY - 50 + Math.random() * 100;
    const startX = p.x;
    const startY = p.y;
    const startTime = performance.now();

    const animateShift = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      p.x = startX + (newX - startX) * easeInOutCirc(progress);
      p.y = startY + (newY - startY) * easeInOutCirc(progress);
      if (progress < 1) {
        requestAnimationFrame(animateShift);
      } else {
        shiftPoint(p);
      }
    };

    requestAnimationFrame(animateShift);
  };

  const drawLines = (p) => {
    if (!p.active) return;
    p.closest.forEach((closeP) => {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(closeP.x, closeP.y);
      ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
      ctx.stroke();
    });
  };

  class Circle {
    constructor(pos, radius) {
      this.pos = pos;
      this.radius = radius;
      this.active = 0;
    }

    draw() {
      if (!this.active) return;
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = `rgba(156,217,249,${this.active})`;
      ctx.fill();
    }
  }

  const getDistance = (p1, p2) => (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;
  const easeInOutCirc = (t) =>
    t < 0.5
      ? (1 - Math.sqrt(1 - 4 * t * t)) / 2
      : (Math.sqrt(1 - (2 * t - 2) ** 2) + 1) / 2;

  return (
    <div ref={headerRef} className="large-header" id="large-header">
      <canvas ref={canvasRef} id="demo-canvas"></canvas>

    

      <motion.div
        className="main-title flex flex-col items-center justify-center text-center gap-4"
        transition={{ duration: 1, delay: 0.6 }}
      >
        <motion.h1
          className="text-3xl xs:text-4xl md:text-6xl font-extrabold text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Hi, I'm <span className="text-[#2701fd]">Zignesh</span>
        </motion.h1>

        <motion.p
          className="text-sm xs:text-sm md:text-3xl  font-semibold text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          I develop Full Stack Web Applications, using
        </motion.p>

        <motion.p
          className="text-lg xs:text-2xl md:text-3xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <span className="text-[#2701fd]">MERN</span>{" "}
          <span className="text-white">Stack</span>
        </motion.p>

        {/* Animated MERN Stack Icons */}
        <motion.div
          className="flex flex-row items-center justify-center gap-8 mt-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* MongoDB */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col items-center"
          >
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-10 h-10 mb-1" />
            <span className="text-green-400 text-xs font-semibold mt-1">MongoDB</span>
          </motion.div>
          {/* Express */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col items-center"
          >
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" alt="Express" className="w-10 h-10 mb-1 bg-white rounded-full p-1" />
            <span className="text-gray-200 text-xs font-semibold mt-1">Express</span>
          </motion.div>
          {/* React */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col items-center"
          >
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" className="w-10 h-10 mb-1" />
            <span className="text-blue-400 text-xs font-semibold mt-1">React</span>
          </motion.div>
          {/* Node.js */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col items-center"
          >
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-10 h-10 mb-1" />
            <span className="text-green-300 text-xs font-semibold mt-1">Node.js</span>
          </motion.div>
        </motion.div>
      </motion.div>




















      
    </div>
  );
};

export default AnimatedHeader;
