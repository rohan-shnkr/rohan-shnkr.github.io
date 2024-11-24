import React from 'react';
import profilePic from './images/base-profile-picture.JPG';
import Journey from './components/Journey';

function App() {
  return (
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Project Name</h3>
              <p className="text-gray-600 mb-4">Brief project description</p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Tech Stack
                </span>
              </div>
            </div>
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
  );
}

export default App;