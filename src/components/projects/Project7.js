import React from 'react';

const Project7 = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Project Header */}
          <h1 className="text-4xl font-bold mb-4">Carbon Footprint Reduction in Multi-Modal Supply Chain</h1>
          <div className="flex gap-2 mb-8">
            {['React', 'Node.js', 'MongoDB'].map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>

          {/* Project Content */}
          <div className="prose max-w-none">
            <h2>Overview</h2>
            <p>Detailed project description...</p>

            <h2>Key Features</h2>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>

            <h2>Technical Implementation</h2>
            <p>Technical details...</p>

            {/* Add more sections as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project7;