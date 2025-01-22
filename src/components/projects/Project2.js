import React, { useEffect } from 'react';

const Project2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Project Header */}
          <h1 className="text-4xl font-bold mb-4">SMB Credit Collection Model</h1>
          <div className="flex gap-2 mb-8">
            {["Data Science", "Machine Learning", "Geospatial Analytics", "Risk Management"].map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>

          {/* Project Content */}
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">1. Problem Context</h2>
            <p>
              In 2019, Udaan, a Series D B2B e-commerce company, embarked on a mission to enhance
              its lending platform for over 2 million SMB (Small and Medium-sized Businesses) retailers in India. The key challenges
              were twofold: assessing creditworthiness in a largely undocumented market and
              optimizing payment collection in a cash-heavy ecosystem. My role as a data scientist
              was to develop scalable machine learning solutions to address these challenges.
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">2. Credit-worthiness Assessment</h2>
            <h3 className="text-lg font-semibold mb-0.5">Data Exploration</h3>
            <p>
              Leveraging transactional data, we analyzed gross merchandise value (GMV), order
              frequency, and return rates. Seasonal trends were modeled using Hindu calendar-based
              holidays, and shopper behavior was categorized by product preferences, including
              FMCG, Electronics, and Pharmaceuticals. Augmenting this with external data from
              GeoIQ (geolocation activity) and Khatabook (accounting data) enriched our feature
              set.
            </p>

            <h3 className="text-lg font-semibold mb-0.5">Feature Engineering</h3>
            <p>
              Key features included:
            </p>
            <ul>
              <li>
                <strong>Shelf-life Adjusted GMV</strong>: GMV weighted by product shelf life to
                capture variability.
              </li>
              <li>
                <strong>Market Presence Metrics</strong>: Derived from shop geolocation and
                competitive dynamics.
              </li>
              <li>
                <strong>Repeat Customer Flags</strong>: Identifying six-month retention as a
                lending eligibility criterion.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-0.5">Model Deployment</h3>
            <p>
              Using XGBoost, a classification model assigned credit tiers to retailers based on
              their transaction history and behavioral metrics. The rollout prioritized Tier 1 and
              2 cities, achieving a $130M credit book within three months.
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">3. Collection Optimization</h2>
            <h3 className="text-lg font-semibold mb-0.5">Reachability Analysis</h3>
            <p>
              During COVID-19 lockdowns, retailer availability was mapped using geolocation data,
              optimizing logistics routes to ensure visits occurred during peak availability.
              Additionally, we integrated payment collection into delivery workflows, leveraging
              real-time data to enhance success rates.
            </p>

            <h3 className="text-lg font-semibold mb-0.5">Behavioral Feedback Loops</h3>
            <p>
              Collection data was fed back into the lending model, refining credit scoring by
              incorporating adherence to payment schedules and operational patterns during
              disruptions.
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">4. Impact & Key Learnings</h2>
            <h3 className="text-lg font-semibold mb-0.5">Outcomes</h3>
            <ul>
              <li>
                9% reduction in monthly default rates.
              </li>
              <li>
                11% increase in credit lending, expanding Udaan’s NBFC footprint.
              </li>
              <li>
                Improved operational scalability with geospatial analytics and behavior-driven
                modeling.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-0.5">Takeaways</h3>
            <p>
              This project demonstrated the power of mapping complex SMB behaviors into data
              points, enabling predictive modeling and operational efficiencies. The iterative
              feedback loop between lending and collection workflows was pivotal in driving
              sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;