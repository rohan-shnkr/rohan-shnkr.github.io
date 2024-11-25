import React, { useState } from 'react';
import profilePic from './images/base-profile-picture.JPG';
import Journey from './components/Journey';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Project1 from './components/projects/Project1';
import Project2 from './components/projects/Project2';
import Project3 from './components/projects/Project3';
import Project4 from './components/projects/Project4';
import Project5 from './components/projects/Project5';
import Project6 from './components/projects/Project6';
import Project7 from './components/projects/Project7';

const projects = [
  {
    id: 1,
    title: "Customer Authentication Decision Engine",
    description: "A centralized platform to monitor fraudulent activity",
    techStack: ["React", "Node.js", "MongoDB"],
    link: "/customer-authentication-decision-engine"
  },
  {
    id: 2,
    title: "SMB Credit Collection Model",
    description: "A Machine Learning model to estimate credit risk",
    techStack: ["React", "Node.js", "MongoDB"],
    link: "/smb-credit-collection-model"
  },
  {
    id: 3,
    title: "Generative AI Marketing Agent",
    description: "A ChatGPT-enabled intelligent marketing agent to find leads",
    techStack: ["React", "Node.js", "MongoDB"],
    link: "/generative-ai-marketing-agent"
  },
  {
    id: 4,
    title: "Digital Fingerprinting",
    description: "A vendor-based approach to solving authentication",
    techStack: ["React", "Node.js", "MongoDB"],
    link: "/device-fingerprinting"
  },
  {
    id: 5,
    title: "Call Classification",
    description: "NLP-model to help accelerate customer service",
    techStack: ["React", "Node.js", "MongoDB"],
    link: "/call-classification"
  },
  {
    id: 6,
    title: "Price Optimization in Offline Retail",
    description: "A price indexing tool for dynamic pricing in stores",
    techStack: ["React", "Node.js", "MongoDB"],
    link: "/price-optimization-in-offline-retail"
  },
  {
    id: 7,
    title: "Carbon Footprint Reduction in Multi-Modal Supply Chain",
    description: "A route optimization for large-scale supply chain to reduce carbon footprint",
    techStack: ["React", "Node.js", "MongoDB"],
    link: "/carbon-footprint-reduction"
  }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleProjectScroll = (direction) => {
    if (direction === 'right' && currentIndex + 3 < projects.length) {
      setCurrentIndex(prev => prev + 1);
    } else if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };
  
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={
          <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-sm sticky top-0">
              <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold">Welcome!</span>
                  <div className="space-x-6">
                    <a href="#about" className="hover:text-blue-600">About</a>
                    <a href="#experience" className="hover:text-blue-600">My Journey</a>
                    <a href="#projects" className="hover:text-blue-600">Projects</a>
                    <a href="#blog" className="hover:text-blue-600">Blog</a>
                    <a href="#contact" className="hover:text-blue-600">Contact</a>
                  </div>
                </div>
              </div>
            </nav>

            {/* Hero Section */}
            <section id="about" className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <img 
                  src={profilePic}
                  alt="Profile" 
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover object-right"
                />
                <h1 className="text-4xl font-bold mb-4">Rohan Srivastava</h1>
                <p className="text-xl text-gray-600 mb-8">Chasing the Why in The How</p>
                <p className="text-gray-600 max-w-2xl mx-auto">
                I'm thrilled to be an MBA candidate at Chicago Booth, focusing on Entrepreneurship and Analytics! 
                With 5+ years in product management and data science, I've driven amazing results – from managing a $250B+ fraud prevention platform at Goldman Sachs to achieving 1000% efficiency gains with GenAI at Braintrust Data. 
                I'm passionate about ML, NLP, and LLMs, ready to drive innovation!
                </p>
              </div>
            </section>

            {/* My Journey Section */}
            <section id="experience" className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4"> {/* Changed from max-w-5xl to max-w-7xl */}
                <h2 className="text-3xl font-bold mb-8 text-center">My Journey</h2>
                <Journey />
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          
                <div className="relative">
                  {/* Left Navigation Button */}
                  <button 
                    onClick={() => handleProjectScroll('left')}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 disabled:opacity-50"
                    disabled={currentIndex === 0}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Projects Container */}
                  <div className="overflow-hidden px-12">
                    <div 
                      className="flex gap-6 transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(calc(-${currentIndex * (100 / 3)}% - ${currentIndex * 24}px))` }}
                    >
                      {projects.map((project) => (
                        <Link 
                          key={project.id}
                          to={project.link}
                          className="flex-shrink-0 w-1/3 bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
                        >
                          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                          <p className="text-gray-600 mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, index) => (
                              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Right Navigation Button */}
                  <button 
                    onClick={() => handleProjectScroll('right')}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 disabled:opacity-50"
                    disabled={currentIndex >= projects.length - 3}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </section>

            {/* Blog Section */}
            <section id="blog" className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-2">Blog Post Title</h3>
                    <p className="text-gray-600 mb-4">Date</p>
                    <p className="mb-4">Brief excerpt from your blog post...</p>
                    <a href="#" className="text-blue-600 hover:underline">Read more →</a>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <p className="text-gray-600 mb-6">
                  Feel free to reach out for collaborations or just a friendly hello
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="mailto:your@email.com" className="text-blue-600 hover:underline">
                    Email
                  </a>
                  <a href="#" className="text-blue-600 hover:underline">
                    LinkedIn
                  </a>
                  <a href="#" className="text-blue-600 hover:underline">
                    GitHub
                  </a>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-50 py-8">
              <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
                <p>© 2024 Your Name. All rights reserved.</p>
              </div>
            </footer>
          </div>
        } />

        {/* Project Routes */}
        <Route path="/customer-authentication-decision-engine" element={<Project1 />} />
        <Route path="/smb-credit-collection-model" element={<Project2 />} />
        <Route path="/generative-ai-marketing-agent" element={<Project3 />} />
        <Route path="/device-fingerprinting" element={<Project4 />} />
        <Route path="/call-classification" element={<Project5 />} />
        <Route path="/price-optimization-in-offline-retail" element={<Project6 />} />
        <Route path="/carbon-footprint-reduction" element={<Project7 />} />
      </Routes>
    </Router>
  );
}

export default App;