import React, { useEffect } from 'react';

const Project4 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Project Header */}
          <h1 className="text-4xl font-bold mb-4">Securing Digital Identities: Preventing Stolen Device Fraud with Digital Fingerprinting</h1>
          <div className="flex gap-2 mb-8">
            {["Fraud Prevention", "Digital Fingerprinting", "Security", "Machine Learning"].map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>

          {/* Project Content */}
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">1. The Challenge: A Surge in Stolen Device Fraud</h2>
            <p>
              In 2022, a noticeable uptick in <strong>stolen device fraud</strong> within the <strong>Apple Card portfolio</strong> exposed a fundamental security gap.
              COVID-19 had shifted user behavior—many customers switched from biometric authentication (Face ID, Touch ID) to <strong>passcode-based access</strong>,
              making their devices vulnerable to social engineering attacks. Fraudsters exploited this change by obtaining passcodes and gaining full control over customer devices.
            </p>
            <p>
              While we had <strong>velocity-based fraud detection</strong>, criminals were <strong>intelligent in bypassing such controls</strong>—spreading out transactions
              over time to avoid triggering automated alerts. This required a <strong>new approach</strong> to tracking fraud post-device compromise.
              My task was to design a <strong>stronger fraud detection and authentication framework</strong> that could:
            </p>
            <ul>
              <li>Verify suspicious device activity before fraudulent transactions occur.</li>
              <li>Harden PII (Personally Identifiable Information) changes to prevent account takeover.</li>
              <li>Incorporate third-party risk intelligence into authentication decisions.</li>
            </ul>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">2. Building a Smarter Identity Verification Pipeline</h2>
            <p>
              A key fraud pattern we identified was the modification of <strong>PII (phone numbers, emails, addresses)</strong> shortly after device compromise.
              Fraudsters would replace real customer details with their own to <strong>intercept OTPs</strong> and fully take over accounts.
            </p>
            <p>
              I led an investigation into data providers offering <strong>phone, email, and address intelligence</strong>, assessing their capability to verify associations
              between old and new customer information. Alongside vendor evaluation, I conducted <strong>customer research</strong> to ensure any solution aligned with user expectations.
            </p>

            <h3 className="text-lg font-semibold mb-0.5">Key Customer Insights</h3>
            <ul>
              <li>Users welcomed additional friction when modifying sensitive account details.</li>
              <li>Customers preferred authentication via trusted channels such as verified phone calls.</li>
              <li>There was strong interest in third-party verification to detect fraudulent PII changes.</li>
            </ul>

            <h3 className="text-lg font-semibold mb-0.5">The Solution: Digital Fingerprinting + Stronger Authentication</h3>
            <p>
              After running internal fraud analytics and finalizing vendors, I worked with <strong>engineering and identity access teams</strong>
              to build a <strong>multi-layered risk assessment framework</strong>:
            </p>
            <ul>
              <li>
                <strong>Device Fingerprinting Signals</strong>: Geolocation, IP address, login history, and failed attempts were integrated into the authentication pipeline.
                Risk scoring based on device behavior anomalies.
              </li>
              <li>
                <strong>PII Verification with Third-Party Data</strong>: Any PII change request was cross-referenced against external data providers before approval.
                If risk exceeded a threshold, an agent verification step was triggered.
              </li>
              <li>
                <strong>Risk-Adaptive Authentication</strong>:
                <ul>
                  <li>Low-risk requests: Silent authentication through background device checks.</li>
                  <li>Medium-risk requests: Multi-factor authentication via OTP or email confirmation.</li>
                  <li>High-risk requests: Mandatory agent intervention with verification via secret word.</li>
                </ul>
              </li>
              <li>
                <strong>Velocity Controls for Post-PII Changes</strong>: Increased monitoring and transaction velocity checks immediately after account modifications.
                Automated decline mechanisms for high-risk transaction patterns.
              </li>
            </ul>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">3. Implementation and Cross-Functional Execution</h2>
            <p>
              Fraud prevention isn’t just a technical problem—it’s a <strong>cross-functional effort</strong>. Given the sensitive nature of this security upgrade,
              I collaborated with:
            </p>
            <ul>
              <li><strong>Engineering</strong> – To integrate risk signals and develop real-time fraud detection models.</li>
              <li><strong>Identity Access Management</strong> – To refine authentication logic and escalation protocols.</li>
              <li><strong>Marketing & Communications</strong> – To create a customer education campaign on security best practices.</li>
            </ul>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">4. Impact & Lessons Learned</h2>
            <p>
              Within months of deployment, we observed <strong>a 97% reduction in stolen device fraud</strong>, surpassing initial expectations by <strong>150%</strong>.
            </p>
            <ul>
              <li>Fraudsters were blocked at multiple touchpoints, reducing successful account takeovers.</li>
              <li>Customers appreciated the added security and responded positively to proactive verification efforts.</li>
              <li>Data integrity was reinforced, ensuring that fraudulent modifications were detected before causing harm.</li>
            </ul>
            <p>
              This project underscored a critical truth: <strong>In fraud detection, data purity is everything</strong>.
              By improving how we <strong>authenticate, verify, and assess risk</strong>, we created a <strong>secure, scalable framework</strong>
              that strengthens digital identity protection.
              This experience further fueled my passion for <strong>building security-driven AI systems</strong>, and I’m excited to explore deeper applications of
              <strong>machine learning in real-time fraud prevention</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project4;