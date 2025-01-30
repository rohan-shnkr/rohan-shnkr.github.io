import React, { useEffect } from 'react';

const Project3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Project Header */}
          <h1 className="text-4xl font-bold mb-4">AI Market Research Agent: Automating B2B Lead Generation</h1>
          <div className="flex gap-2 mb-8">
            {["Generative AI", "Web Scraping", "Automation"].map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>

          {/* Project Content */}
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              While working at <strong>Braintrust Data</strong>, a SaaS startup focused on AI observability, I encountered a major challenge:
              manually researching and qualifying B2B leads was slow and inefficient. Traditional methods couldn’t scale, so I built an
              AI-powered Market Research Agent to automate and accelerate the process. If you're interested, check out the project on <a href="https://github.com/rohan-shnkr/market-research-agent" target="_blank" className="text-blue-500">GitHub</a>.
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">2. The Problem: Scaling Lead Generation</h2>
            <p>
              Our product was highly technical, requiring companies with significant AI investments. Traditional lead generation
              tools provided firmographic data but lacked insights into real AI initiatives. The goal was to create an intelligent
              agent that could analyze company websites, extract relevant content, and score potential customers based on their
              engagement with AI.
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">3. Building the Research Agent</h2>
            <p>
              The system automates the entire research workflow:
            </p>
            <ul>
              <li>
                <strong>Web Scraping Engine</strong>: Crawls company websites and filters pages mentioning AI, machine learning, or NLP.
              </li>
              <li>
                <strong>Natural Language Processing</strong>: Extracts and structures key AI-related themes from web content.
              </li>
              <li>
                <strong>GPT-3.5 Analysis</strong>: Evaluates extracted content to determine the company’s AI engagement level.
              </li>
              <li>
                <strong>Scoring & Ranking</strong>: Assigns an AI relevance score, producing an ordered list of high-value leads.
              </li>
              <li>
                <strong>Excel Output</strong>: Generates structured reports for sales teams, ranking the best potential leads.
              </li>
            </ul>

            <p>
              This approach increased lead qualification speed by <strong>10x</strong>, allowing sales teams to focus on high-priority targets.
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">4. What I Learned About Generative AI Agents</h2>
            <p>
              Designing this system deepened my understanding of how generative AI can enhance automation. GPT-3.5 is most effective
              when paired with structured data pipelines—combining rule-based web scraping with AI-driven content analysis created
              a powerful synergy. The biggest takeaway? **LLMs are not standalone solutions; they are intelligence layers that thrive
              when integrated with robust data processing architectures.**
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">5. Final Thoughts</h2>
            <p>
              This project wasn’t just about automating lead generation—it was about proving that AI can transform business
              intelligence. By replacing hours of manual research with a smart, scalable agent, we unlocked **faster decision-making,
              better sales targeting, and deeper AI-driven insights**.
            </p>
            <p>
              Moving forward, I’m excited to explore more ways generative AI can power automation, business intelligence, and
              decision-making at scale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project3;