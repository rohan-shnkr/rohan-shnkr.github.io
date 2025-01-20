import React, { useEffect } from 'react';

const Project1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Project Header */}
          <h1 className="text-4xl font-bold mb-4">Customer Authentication Decision Engine</h1>
          <div className="flex gap-2 mb-8">
            {['Technical Product Management', 'Stakeholder Management', 'System Design', 'API Development'].map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>

          {/* Project Content */}
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">1. Introduction &amp; Context</h2>
            <p>
              In 2020, I stepped into a role in the consumer arm of a large investment bank. At the
              time, we had over 10 million customers across our savings product and credit card
              partnership. Despite the strong user base, a glaring issue had emerged—account takeover
              fraud. Customers were falling victim to hacked accounts, leading to millions in
              fraudulent transactions and causing significant monetary losses for both the bank and
              our users.
            </p>
            <p>
              With a background in data science, I was tasked with understanding how to combat this
              growing problem. Little did I know, this challenge would launch me into the world of
              product management. Over the next three years, I led the strategy and execution of
              what became the <strong className="font-medium">Customer Authentication Decision Engine (CADE)</strong>—a
              centralized, intelligent API solution to dynamically introduce authentication where it
              was most needed.
            </p>
            <p>
              This project encapsulates my product philosophy:{' '}
              <strong className="font-medium">
                start with user empathy, ensure flawless execution, empower and align people, and
                continuously iterate the vision
              </strong>
              .
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">2. Problem Definition</h2>
            <h3 className="text-lg font-semibold mb-0.5">Understanding Account Takeover Fraud</h3>
            <p>
              The fraud problem boiled down to bad actors exploiting system gaps in non-monetary
              transactions (e.g., changing personal information, issuing new virtual cards) and
              subsequently executing fraudulent monetary transactions. By the time we detected the
              breaches, we had already incurred steep financial and reputational costs.
            </p>

            <h3 className="text-lg font-semibold mb-0.5">Gathering Data &amp; Research</h3>
            <p>
              I launched a thorough investigation, reviewing over 100 dispute reports to identify
              leading indicators of fraud. Activities such as digital wallet usage, suspicious
              change of PII (personally identifiable information), and new virtual card issuance
              consistently preceded fraudulent activity. Through questionnaires and surveys of both
              affected and unaffected customers, it became clear that <strong className="font-medium">stronger authentication</strong>{' '}
              was critical for higher-risk scenarios—yet adding friction for every customer would
              hurt user experience.
            </p>

            <h3 className="text-lg font-semibold mb-0.5">Key Insight: Intelligent Authentication</h3>
            <p>
              Balancing security and seamlessness became the crux of our product challenge. The
              takeaway: we needed an <strong className="font-medium">intelligent system</strong> that introduces additional
              user verification only when data signals indicated high risk.
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">3. Vision &amp; Strategy</h2>
            <h3 className="text-lg font-semibold mb-0.5">Envisioning CADE</h3>
            <p>
              This led to the idea of <strong className="font-medium">Customer Authentication Decision Engine (CADE)</strong>:
              a horizontal API layer that continuously evaluates customer actions, flags suspicious
              behavior, and escalates authentication requirements dynamically.
            </p>
            <ol>
              <li>
                <h4 className="text-base font-medium mb-0.1">User Empathy</h4>
                <ul>
                  <li>
                    Our surveys showed that users impacted by fraud were open to more friction.
                    Those not impacted desired a near-frictionless experience.
                  </li>
                  <li>
                    We needed a solution that worked for both segments, ensuring minimal disruption
                    for most customers and tighter security for high-risk actions.
                  </li>
                </ul>
              </li>
              <li>
                <h4 className="text-base font-medium mb-0.1">Strategic Goals</h4>
                <ul>
                  <li>
                    <strong>Reduce Fraud Losses</strong>: Offer a risk-based approach to
                    authentication.
                  </li>
                  <li>
                    <strong>Enhance Customer Trust</strong>: Safeguard user accounts without
                    unnecessary hurdles.
                  </li>
                  <li>
                    <strong>Maintain Scalability</strong>: Create a centralized, easily extensible
                    system to integrate with various customer journeys.
                  </li>
                </ul>
              </li>
            </ol>

            <h3 className="text-lg font-semibold mb-0.5">Frameworks &amp; Metrics</h3>
            <p>We anchored our KPIs on:</p>
            <ul>
              <li>
                <strong>Fraud Loss Reduction</strong> (primary metric)
              </li>
              <li>
                <strong>Friction-Free Authentication Rate</strong> (secondary metric: % of customers
                not prompted for extra verification)
              </li>
              <li>
                <strong>User Satisfaction</strong> (tracked through surveys and user feedback)
              </li>
            </ul>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">4. Execution &amp; Roadmapping</h2>
            <h3 className="text-lg font-semibold mb-0.5">Defining the Scope</h3>
            <p>
              I began by mapping critical user journeys, focusing on high-risk flows:
              <ul>
                <li>PII changes</li>
                <li>Lost or stolen cards/devices</li>
                <li>New virtual card issuance</li>
              </ul>
              We prioritized these based on fraud frequency and customer impact.
            </p>

            <h3 className="text-lg font-semibold mb-0.5">Technical Blueprint</h3>
            <p>
              After consolidating insights from about 15 technical teams (identity access
              management, UX design, middleware, data engineering, etc.), I created a{' '}
              <strong className="font-medium">Product Requirements Document (PRD)</strong>. This PRD served as a
              collaborative space, outlining data needs, proposed architecture, and potential
              workflows for CADE.
            </p>

            <h3 className="text-lg font-semibold mb-0.5">Iterative Roadmap</h3>
            <ol>
              <li>
                <h4 className="text-base font-medium mb-0.1">Design Phase (1 Month)</h4>
                <ul>
                  <li>Cross-functional discussions to refine system architecture.</li>
                  <li>Identified missing data capture and logging requirements for modeling.</li>
                  <li>
                    Collaborated with a newly assigned technical lead to finalize microservices
                    approach.
                  </li>
                </ul>
              </li>
              <li>
                <h4 className="text-base font-medium mb-0.1">Development &amp; Integration (6 Months)</h4>
                <ul>
                  <li>
                    Built a <strong className="font-medium">single CADE API</strong> that sits in middleware, invoked before
                    processing high-risk requests.
                  </li>
                  <li>
                    Implemented three levels of authentication, from friction-free to in-person
                    agent verification.
                  </li>
                  <li>
                    Developed machine learning indicators with the data science team to signal
                    potential risk levels.
                  </li>
                </ul>
              </li>
              <li>
                <h4 className="text-base font-medium mb-0.1">Functional Testing &amp; Validation</h4>
                <ul>
                  <li>
                    Created a comprehensive test plan with edge cases across mobile app, website,
                    and call center channels.
                  </li>
                  <li>
                    Refined the Drools-based business logic rules (over 200 rules) to map ML risk
                    scores to authentication levels.
                  </li>
                </ul>
              </li>
            </ol>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">5. Collaboration &amp; People Management</h2>
            <h3 className="text-lg font-semibold mb-0.5">Cross-Functional Alignment</h3>
            <ul>
              <li>
                <h4 className="text-base font-medium mb-0.1">Engineering &amp; Data Science</h4>
                Partnered to define data ingestion, model building, and API response structures.
              </li>
              <li>
                <h4 className="text-base font-medium mb-0.1">Identity &amp; Access Management</h4>
                Consulted to ensure compliance with internal security protocols.
              </li>
              <li>
                <h4 className="text-base font-medium mb-0.1">UX &amp; App Development</h4>
                Aligned on how to present authentication prompts in-app, on web, and to call center agents.
              </li>
              <li>
                <h4 className="text-base font-medium mb-0.1">Agent Operations</h4>
                Defined how to escalate complex cases seamlessly to human agents.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-0.5">Stakeholder Management</h3>
            <p>
              Throughout this project, I managed the backlog of tasks on Jira, ensuring that over 15
              teams stayed aligned on priorities and deadlines. Regular stand-ups, retrospectives,
              and stakeholder meetings helped us pivot quickly when needed.
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">6. Challenges &amp; Key Learnings</h2>
            <ol>
              <li>
                <h3 className="text-lg font-semibold mb-0.5">Channel Variability</h3>
                <p>
                  Ensuring CADE's stateless API responded consistently to diverse channels (mobile,
                  web, call center) required meticulous mapping.
                </p>
                <p>
                  <em>Key learning:</em> <strong className="font-medium">Early involvement</strong> of all channel owners
                  fosters better synergy and less rework.
                </p>
              </li>
              <li>
                <h3 className="text-lg font-semibold mb-0.5">Data Purity &amp; Model Readiness</h3>
                <p>
                  Incorporating new data sources meant strict schema definitions and robust logging
                  with Kafka streams.
                </p>
                <p>
                  <em>Key learning:</em> <strong className="font-medium">Investing early</strong> in data engineering pays
                  off in accurate risk scoring down the line.
                </p>
              </li>
              <li>
                <h3 className="text-lg font-semibold mb-0.5">Balancing Security &amp; UX</h3>
                <p>Some unaffected users pushed back on additional friction.</p>
                <p>
                  <em>Key learning:</em> <strong className="font-medium">User empathy</strong> means building adaptive flows
                  that escalate only for high-risk scenarios.
                </p>
              </li>
              <li>
                <h3 className="text-lg font-semibold mb-0.5">Scaling Beyond the Original Scope</h3>
                <p>
                  Other divisions, such as Personal Wealth Management, expressed interest in CADE.
                </p>
                <p>
                  <em>Key learning:</em> <strong className="font-medium">Designing a modular system</strong> from the outset
                  opens opportunities for cross-organization adoption.
                </p>
              </li>
            </ol>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">7. Outcome &amp; Impact</h2>
            <h3 className="text-lg font-semibold mb-0.5">Major Milestones</h3>
            <ul>
              <li>
                <strong>Functional Testing &amp; Early Demos</strong>: Completed in October 2021,
                paving the way for a successful beta phase.
              </li>
              <li>
                <strong>Partnership Cards Launch (January 2022)</strong>: CADE actively monitored
                over <strong>3 million</strong> users.
              </li>
              <li>
                <strong>Expansion to Apple Card</strong>: Scaled to <strong>10 million</strong>{' '}
                additional users by late 2022.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-0.5">Key Results</h3>
            <ul>
              <li>
                <strong>Fraud Loss Reduction</strong>: 38% drop in fraudulent disputes tied to these
                high-risk actions.
              </li>
              <li>
                <strong>Friction-Free Rate</strong>: About 80% of user actions remained
                frictionless.
              </li>
              <li>
                <strong>Cross-Org Adoption</strong>: Enabled a Proof of Concept (POC) for the
                Personal Wealth Management group, completed 3 months ahead of schedule.
              </li>
            </ul>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">8. Future Outlook</h2>
            <h3 className="text-lg font-semibold mb-0.5">Continuous Improvement</h3>
            <ul>
              <li>
                <strong>Data &amp; Model Enhancements</strong>: Ongoing work to include more data
                vendors and refine ML features for better risk detection.
              </li>
              <li>
                <strong>Expanded Use Cases</strong>: CADE remains one of the top decision-making
                platforms in the consumer bank, and has a roadmap to cater to additional user
                journeys like large fund transfers and complex multi-account sign-ins.
              </li>
              <li>
                <strong>Further Personalization</strong>: Explore adaptive authentication levels
                based on user profile, behavior patterns, and prior interactions.
              </li>
            </ul>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">9. Conclusion</h2>
            <p>
              Leading the <strong className="font-medium">Customer Authentication Decision Engine (CADE)</strong> project
              was an eye-opening journey from data scientist to product manager. Rooted in{' '}
              <strong className="font-medium">user empathy</strong>, driven by <strong className="font-medium">flawless execution</strong>,
              supported by <strong className="font-medium">people management</strong>, and constantly{' '}
              <strong className="font-medium">iterating our vision</strong>, CADE significantly improved the security and
              user experience for millions of customers. The project reaffirmed my belief in the
              power of data-driven insights, strong cross-functional alignment, and an unwavering
              focus on end-users' needs.
            </p>
            <p>
              <strong>Key Takeaways:</strong>
            </p>
            <ul>
              <li>
                <strong>Start with the Customer</strong>: Real user stories and data define the best
                product strategies.
              </li>
              <li>
                <strong>Design with Scalability in Mind</strong>: A modular architecture can quickly
                extend to new use cases and teams.
              </li>
              <li>
                <strong>Embrace Cross-Functional Collaboration</strong>: Communication and buy-in
                are vital to turn bold ideas into tangible results.
              </li>
              <li>
                <strong>Iterate Relentlessly</strong>: Each challenge is an opportunity to refine
                both the technology and the product vision.
              </li>
            </ul>
            <p>
              I hope this story provides insight into the <strong>art</strong> and{' '}
              <strong className="font-medium">science</strong> of product management. If you're facing similar challenges or
              exploring ways to build intelligent authentication solutions, I'd love to hear your
              thoughts and experiences.
            </p>
            <p>
              <em>
                Thank you for reading about my product management journey with CADE. This was an
                incredibly challenging yet rewarding experience, proving that when you combine
                rigorous data analysis with user-centric design and flawless execution, you can
                deliver real impact for both the business and its customers.
              </em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;