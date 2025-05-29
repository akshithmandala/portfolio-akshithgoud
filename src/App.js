import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavBar = () => (
  <nav className="bg-white shadow p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">My Portfolio</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/about" className="hover:underline">About</Link>
      <Link to="/projects" className="hover:underline">Projects</Link>
      <Link to="/contact" className="hover:underline">Contact</Link>
    </div>
  </nav>
);

const Home = () => (
  <motion.div className="p-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h2 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h2>
    <p className="text-lg">Hello. I am Akshith Goud, I am pursuing Civil Engineering with minors in Management at IIT Gandhinagar.</p>
  </motion.div>
);

const About = () => (
  <motion.div className="p-10" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
    <h2 className="text-3xl font-bold mb-4">About Me</h2>
    <p className="text-lg">
      I'm Akshith Goud, a Civil Engineering undergraduate at IIT Gandhinagar with a keen interest in Structural Engineering and Construction Management. I am also pursuing a minor in Management, which complements my technical background by enhancing my strategic thinking and project management skills. 
      
      My experience includes hands-on internships, technical analysis roles, and water conservation projects, where I combined engineering and data-driven insights to deliver impactful solutions. I have also explored bionanotechnology, participated in case competitions, and led workshops on digital fabrication tools like 3D printing and laser cutting.

      I’m passionate about bridging engineering with innovation, and I enjoy mentoring, public speaking, and learning emerging technologies. This portfolio showcases the projects and achievements that reflect my growth, curiosity, and commitment to meaningful engineering solutions.
    </p>
  </motion.div>
);

const Projects = () => (
  <motion.div className="p-10" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
    <h2 className="text-3xl font-bold mb-4">Projects & Achievements</h2>
    <ul className="list-disc pl-5 space-y-2">
      <li>Portfolio Website - A modern, responsive personal site.</li>
      <li>Water Resource Management Project - Designed and assessed 5 check dams, improving conservation efficiency by 25%.</li>
      <li>Laser Fair Workshop - Organized and hosted sessions on laser cutting, 3D printing, and vinyl cutting for the campus community.</li>
      <li>TATA Nano Case Study - Analyzed engineering, financial, and marketing aspects for a strategic business review.</li>
      <li>Hackathon Finalist - Recognized for innovative thinking and collaborative problem-solving.</li>
    </ul>
  </motion.div>
);

const Contact = () => (
  <motion.div className="p-10" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
    <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
    <form className="space-y-4 max-w-md">
      <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
      <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
      <textarea placeholder="Your Message" className="w-full p-2 border rounded" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
    </form>
  </motion.div>
);

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
