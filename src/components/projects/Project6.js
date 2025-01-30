import React, { useEffect } from 'react';

const Project6 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Project Header */}
          <h1 className="text-4xl font-bold mb-4">Optimizing Revenue in Semi-Luxury Retail: A Data-Driven Approach</h1>
          <div className="flex gap-2 mb-8">
            {["Machine Learning", "Pricing Optimization", "Retail Analytics", "Revenue Management"].map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>

          {/* Project Content */}
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">1. Introduction: The Pricing Challenge in High-End Retail</h2>
            <p>
              Pricing optimization is a critical yet complex challenge in <strong>offline retailing</strong>, especially in the <strong>semi-luxury segment</strong>,
              where demand is seasonal and consumer behavior is highly unpredictable. Unlike essential commodities, high-end retail products—from
              <strong>furniture and home décor to premium accessories</strong>—exhibit erratic sales patterns due to <strong>price sensitivity, inventory constraints,
              and economic trends</strong>.
            </p>
            <p>
              My research, published in <em><a href="https://tinyurl.com/3ny7338f" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">Computers & Industrial Engineering</a></em>, sought to tackle this problem by developing a <strong>data-driven pricing and demand prediction model</strong>
              that leverages <strong>machine learning and integer programming</strong>. Our approach aimed to help retailers dynamically adjust pricing to <strong>maximize revenue while managing inventory risk</strong>.
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">2. Machine Learning for Demand Prediction</h2>
            <h3 className="text-lg font-semibold mb-0.5">Building a High-Quality Dataset</h3>
            <p>
              The first step in our study involved analyzing <strong>2.5 years of sales data</strong> from major retail stores across <strong>45 regions</strong>, capturing variables such as:
            </p>
            <ul>
              <li><strong>Pricing trends</strong> and historical markdowns.</li>
              <li><strong>Inventory levels</strong> and replenishment cycles.</li>
              <li><strong>Consumer demand fluctuations</strong> due to seasonality.</li>
              <li><strong>Macroeconomic indicators</strong> like fuel prices, regional income levels, and unemployment rates.</li>
            </ul>

            <h3 className="text-lg font-semibold mb-0.5">Regression Trees & Random Forests for Demand Forecasting</h3>
            <p>
              We implemented <strong>random forests and regression trees</strong>—well-suited for handling <strong>highly variable, non-linear demand trends</strong>. These models allowed us to:
            </p>
            <ul>
              <li><strong>Identify demand-influencing factors</strong> (price sensitivity, seasonality, and competition).</li>
              <li><strong>Cluster products into substyles</strong> to forecast demand at a granular level.</li>
              <li><strong>Incorporate regional economic indicators</strong> to refine predictions.</li>
            </ul>
            <p>
              Our forecasting model outperformed traditional <strong>linear regression-based approaches</strong>, reducing <strong>mean absolute percentage error (MAPE) by over 23.6%</strong>.
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">3. Revenue Optimization Through Integer Programming</h2>
            <p>
              With <strong>accurate demand forecasts</strong>, the next challenge was <strong>optimal price allocation</strong>. We formulated the <strong>pricing problem as an Integer Linear Program (ILP)</strong>, incorporating:
            </p>
            <ul>
              <li><strong>Price-Demand Sensitivity</strong>: Ensuring price adjustments align with forecasted demand fluctuations.</li>
              <li><strong>Competitive Pricing</strong>: Maintaining product positioning within its category.</li>
              <li><strong>Inventory Constraints</strong>: Preventing overstocking or stockouts.</li>
            </ul>

            <h3 className="text-lg font-semibold mb-0.5">Solving the ILP: Branch & Bound vs. Branch & Cut</h3>
            <p>
              We tested <strong>two optimization techniques</strong>:
            </p>
            <ul>
              <li><strong>Branch & Bound Algorithm</strong>: A stepwise approach that iteratively refines pricing assignments.</li>
              <li><strong>Branch & Cut Heuristic</strong>: A more flexible model allowing multiple price adjustments, leading to <strong>an average 10% increase in revenue</strong> compared to Branch & Bound.</li>
            </ul>
            <p>
              To further refine pricing, we introduced a <strong>heuristic modification strategy</strong>, dynamically adjusting pricing by <strong>small increments (e.g., ±5%)</strong>
              to maximize revenue without causing demand collapse.
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">4. Key Takeaways & Industry Applications</h2>
            <h3 className="text-lg font-semibold mb-0.5">Key Results</h3>
            <ul>
              <li><strong>Revenue Increase</strong>: Dynamic pricing optimization led to a <strong>7-10% uplift in revenue</strong>.</li>
              <li><strong>Improved Forecasting</strong>: Advanced machine learning methods reduced prediction errors by <strong>23%</strong>.</li>
              <li><strong>Scalability</strong>: The framework is adaptable to various retail segments, including <strong>fashion, home goods, and electronics</strong>.</li>
            </ul>

            <h3 className="text-lg font-semibold mb-0.5">Future Directions</h3>
            <p>
              With the rise of <strong>real-time AI-driven pricing models</strong>, this research lays the foundation for <strong>automated, adaptive pricing strategies</strong>.
              Expanding this approach with <strong>deep learning, reinforcement learning, and multi-agent AI models</strong> could revolutionize how retailers <strong>respond dynamically to market conditions</strong>.
            </p>
            <p>
              This project reinforced my passion for <strong>building AI-powered decision-support systems</strong> and optimizing <strong>business operations through data science</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project6;