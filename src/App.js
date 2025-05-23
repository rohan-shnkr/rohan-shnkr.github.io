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
import { Helmet, HelmetProvider } from 'react-helmet-async';

const projects = [
  {
    id: 1,
    title: "Customer Authentication Decision Engine",
    description: "A centralized platform to monitor fraudulent activity",
    techStack: ["Technical Product Management", "Stakeholder Management", "System Design"],
    link: "/customer-authentication-decision-engine"
  },
  {
    id: 2,
    title: "SMB Credit Collection Model",
    description: "A Machine Learning model to estimate credit risk",
    techStack: ["Data Science", "Machine Learning", "Risk Management"],
    link: "/smb-credit-collection-model"
  },
  {
    id: 3,
    title: "Market Research AI Agent",
    description: "A ChatGPT-enabled intelligent marketing agent to find leads",
    techStack: ["Generative AI", "Web Scraping", "Automation"],
    link: "/generative-ai-marketing-agent"
  },
  {
    id: 4,
    title: "Securing Digital Identities",
    description: "A vendor-based approach to solving authentication",
    techStack: ["Digital Fingerprinting", "Security", "Machine Learning"],
    link: "/device-fingerprinting"
  },
  {
    id: 5,
    title: "Call Classification with NLP",
    description: "NLP-model to help accelerate customer service",
    techStack: ["Machine Learning", "Customer Support", "AI Automation"],
    link: "/call-classification"
  },
  {
    id: 6,
    title: "Optimizing Revenue in Semi-Luxury Retail",
    description: "A price indexing tool for dynamic pricing in stores",
    techStack: ["Machine Learning", "Pricing Optimization", "Retail Analytics"],
    link: "/price-optimization-in-offline-retail"
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
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>Rohan Srivastava</title>
        </Helmet>
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
                  <p className="text-xl text-gray-600 mb-8">Innovate. Execute. Deliver.</p>
                  <p className="text-gray-600 max-w-7xl mx-auto">
                  Welcome to my portfolio! I'm Rohan Srivastava, a seasoned product manager with a passion for innovation and technology. 
                  With 5+ years in product management and data science, I've driven by innovation at scale. From launching Apple Card and GM Card at Goldman Sachs, to helping generative AI infrastructure startups like Braintrust Data find target customers, I enjoy working on novel problems that require innovation and immaculate execution. 
                  This website is a collection of my work, and my thoughts on the future of technology as seen from a product manager's perspective.
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
                      <p className="mb-4">Coming Soon...</p>
                      <a href="#" className="text-blue-600 hover:underline">Don't Read more →</a>
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
                    <a href={`mailto:${process.env.REACT_APP_CONTACT_EMAIL}`} className="text-blue-600 hover:underline">
                      Email
                    </a>
                    <a href="https://www.linkedin.com/in/srivastava-rohan/" target="_blank" rel="noopener noreferrer noreferrer" className="text-blue-600 hover:underline">
                      LinkedIn
                    </a>
                    <a href="https://github.com/rohan-shnkr" target="_blank" rel="noopener noreferrer noreferrer" className="text-blue-600 hover:underline">
                      GitHub
                    </a>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="bg-gray-50 py-8">
                <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
                  <p>© 2024 Rohan Srivastava. All rights reserved.</p>
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
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;