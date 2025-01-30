import React, { useEffect } from 'react';

const Project5 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Project Header */}
          <h1 className="text-4xl font-bold mb-4">Optimizing Customer Support: Call Classification with NLP</h1>
          <div className="flex gap-2 mb-8">
            {["NLP", "Machine Learning", "Customer Support", "AI Automation"].map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>

          {/* Project Content */}
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">1. The Challenge: Inefficiencies in Call Center Support</h2>
            <p>
              My first corporate project as a Data Scientist at <strong>Capital One</strong> was tackling a core issue in customer service operations.
              Traditional banks are often perceived as <strong>slow to adopt technology</strong>, but Capital One was different—digitization was a key priority
              under <strong>Richard Fairbank’s vision</strong>.
            </p>
            <p>
              One of the biggest inefficiencies at the time was in <strong>call center agent workflows</strong>. Our agents were distributed across multiple
              time zones and required extensive training on workflows for <strong>Credit Cards and Auto Loans</strong>. The issue? <strong>Call forwarding and repeated questioning</strong>.
            </p>
            <ul>
              <li><strong>Frustrated Customers</strong> – Repeating their concerns to every new agent.</li>
              <li><strong>Lack of Context</strong> – Agents had little visibility into prior conversations.</li>
            </ul>
            <p>
              We had access to <strong>Amazon’s call transcription service</strong>, which allowed us to transcribe call recordings into text.
              Our vision was to <strong>build an NLP-based system</strong> that could <strong>detect customer pain points and sentiment in real-time</strong>
              —eventually integrating this into the internal <strong>Agent UI</strong> to provide contextualized customer insights.
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">2. Data Collection & Model Development</h2>
            <h3 className="text-lg font-semibold mb-0.5">Building a High-Quality Dataset</h3>
            <p>
              Before the widespread adoption of <strong>Generative AI</strong>, we relied on <strong>manual annotation</strong>.
              I spent two months <strong>listening to customer calls</strong> and tagging key sections for:
            </p>
            <ul>
              <li><strong>Pain Point Identification</strong> – Categorizing call topics and primary concerns.</li>
              <li><strong>Sentiment Analysis</strong> – Determining customer frustration levels.</li>
            </ul>
            <p>
              After rigorous labeling, we compiled a <strong>dataset of 2,000 calls</strong> for training our model.
            </p>

            <h3 className="text-lg font-semibold mb-0.5">Feature Engineering with BERT & Random Forests</h3>
            <p>
              To develop the classification pipeline, we leveraged <strong>BERT embeddings</strong> for <strong>feature extraction, semantic understanding, and sentiment detection</strong>.
              For the final classification task, we built an <strong>optimized Random Forest model</strong> that assigned:
            </p>
            <ul>
              <li><strong>Workflow Class</strong> – Mapping customer queries to predefined issue categories.</li>
              <li><strong>Agent Authorization Level</strong> – Identifying which tier of agents had the necessary authorization to resolve the issue.</li>
            </ul>
            <p>
              With extensive hyperparameter tuning and model evaluation, we achieved <strong>86% accuracy</strong> in problem and sentiment detection.
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">3. Deployment & Business Impact</h2>
            <p>
              The production model was deployed later that year, resulting in:
            </p>
            <ul>
              <li><strong>18% increase in customer satisfaction</strong>, driven by reduced service time.</li>
              <li><strong>Faster issue resolution</strong>, as agents could immediately see historical customer pain points.</li>
              <li><strong>A structured, searchable log</strong> of customer interactions, improving knowledge management across support teams.</li>
            </ul>
            <p>
              Following this success, I worked on the <strong>next phase of the project</strong>—designing a <strong>customer journey visualization</strong>
              in the <strong>Agent UI</strong>. This allowed agents to <strong>chronologically view past interactions</strong>,
              making it easier to detect recurring customer issues.
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">4. Lessons Learned & Future Applications</h2>
            <p>
              Back in <strong>2018</strong>, working with <strong>large-language models (LLMs) for NLP</strong> was a fascinating challenge.
              Today, with <strong>the rise of Generative AI</strong>, the possibilities are even greater.
            </p>
            <p>
              Looking forward, I see tremendous opportunities in <strong>AI-driven customer support</strong>, from <strong>real-time AI agents handling queries</strong>
              to <strong>predictive analytics for proactive customer engagement</strong>.
              This project reinforced my passion for <strong>leveraging AI to enhance operational efficiency</strong>,
              and I’m excited to explore the next frontier of <strong>intelligent automation in customer service.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project5;