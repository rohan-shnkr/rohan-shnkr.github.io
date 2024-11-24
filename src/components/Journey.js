import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';
import braintrustImage from '../images/Braintrust Data.png';
import goldmanImage from '../images/Goldman_Sachs.png';
import caponeImage from '../images/Capital-One.jpg';
import udaanImage from '../images/udaan-logo.png';
import boothImage from '../images/chicago-booth-official-school-logo.png';
import kgpImage from '../images/IITKGP-logo.jpg';

const Journey = () => {
  const sections = [
    {
      id: 'work',
      title: 'Work Experience',
      period: '2018-Present',
      icon: Briefcase,
      color: 'from-blue-200 to-blue-300',
      activeColor: 'bg-blue-100',
      content: {
        subsections: [
          {
            title: 'Braintrust Data',
            role: 'Technical Product Manager',
            period: 'Jun 2023 - Aug 2023',
            location: 'San Francisco',
            image: braintrustImage,
            details: [
              'As a Product Manager, I led the development of enterprise security features through Role-Based Access Control implementation, while spearheading AI initiatives including a GPT-4-powered lead generation system that transformed our sales efficiency. I orchestrated LLM experimentation infrastructure with advanced caching and version control, and fostered community engagement by organizing the AI-Builders Conference, which provided valuable user insights for our product direction.',
              <i>Braintrust Data is Series A LLM-Evals Company backed by Andreesen Horowitz and Greylock Ventures.</i>
            ]
          },
          {
            title: 'Goldman Sachs',
            role: 'Technical Product Manager',
            period: 'Aug 2020 - Jun 2023',
            location: 'Bengaluru',
            image: goldmanImage,
            details: [
              'Led the development of a groundbreaking Customer Authentication Platform securing 10M+ customers and $250B+ in assets, managing 15+ engineers to deliver ahead of schedule with 99.9% uptime, resulting in 38% fraud reduction and $20M annual savings.',
              'Spearheaded 3D-Secure integration for 250M+ monthly transactions, partnering with industry leaders like Apple and GM, while deploying 80+ ML algorithms that achieved $50M in fraud prevention savings with 96.5% accuracy',
              'Implemented innovative device fingerprinting across user interfaces, reducing stolen device fraud by 97% in the Apple Card portfolio and exceeding target KPIs by 150% through strategic vendor partnerships.',
              'Enhanced customer experience by introducing Voice OTP and Biometric Authentication caching, driving a 30% increase in satisfaction while reducing operational overhead by 70% through streamlined verification processes.'
            ]
          },
          {
            title: 'Udaan',
            role: 'Data Scientist, Merchant Lending',
            period: 'Dec 2019 - Aug 2020',
            location: 'Bengaluru',
            image: udaanImage,
            details: [
              'As a leader in merchant lending, I managed credit disbursement models for a $130M portfolio serving 2M+ Indian businesses, implementing an XG-Boost ML model that reduced default rates by 9%. I revolutionized the credit onboarding process through digitization, achieving 99%+ time savings and securing a $200M lending reserve from IDFC First Capital. Additionally, I standardized lending policies in collaboration with legal teams, ensuring compliance and achieving clean audit results.'
            ]
          },
          {
            title: 'Capital One',
            role: 'Data Scientist',
            period: '2019-2020',
            location: 'Bengaluru',
            image: caponeImage,
            details: [
              'I revolutionized our call center operations by developing and implementing advanced AI solutions. Using a BERT-based model, I was able to automatically classify customer calls and detect sentiment with 97% accuracy, which led to a remarkable 62% improvement in how efficiently our agents could handle calls. I also created a cross-call analysis model that performed with 86% accuracy, and this directly improved our customer satisfaction scores by 18% in our Auto loans division. These improvements significantly enhanced both our operational efficiency and customer experience.'
            ]
          }
        ]
      }
    },
    {
      id: 'university',
      title: 'Education',
      period: '2014-Present',
      icon: GraduationCap,
      color: 'from-purple-200 to-purple-300',
      activeColor: 'bg-purple-100',
      content: {
        subsections: [
          {
            title: 'University of Chicago, Booth School of Business',
            role: 'Masters in Business Administration (MBA)',
            period: '2023-2025',
            location: 'Chicago, United States',
            image: boothImage,
            details: [
              'At Chicago Booth, I serve as the co-chair of the Analytics Club - one of the largest student groups. I help students upskill for roles in Product Management, Decision Analytics and Economic Consulting roles. I\'m also an active member of the Booth Technology Group and Boothe Cricket Group.',
              'My areas of concentration are Entrepreneurship, Analytics and Finance'
            ]
          },
          {
            title: 'Indian Institute of Technology (IIT), Kharagpur',
            role: 'Bachelor of Technology, Industrial Engineering',
            period: '2014-2018',
            location: 'Kharagpur, India',
            image: kgpImage,
            details: [
              'As an undergraduate student, I was highly active in researching mathematical solutions to large-scale optimization problems. I worked closely with Prof. M K Tiwari to collaborate with researchers across the globe on projects like Airport Logistics Management, Cold-Storage Supply Chain Management and Competitive Dynamics of Dual-Channel Supply Chains.',
              'I spent the summer of 2016 working with Prof. Felix Chan, Dean of Student Research at PolyU Hong Kong. I helped build a carbon footprint reduction model for multi-model freight networks.'
            ]
          }
        ]
      }
    }
  ];

  const [activeSection, setActiveSection] = useState('work');
  const sectionRefs = useRef({});
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = contentRef.current;
      if (!container) return;
  
      // Get work experience section reference
      const workSection = sectionRefs.current['work'];
      const workSectionEnd = workSection.offsetTop + workSection.offsetHeight;
      
      // Calculate middle point of the window
      const containerMid = container.scrollTop + (container.clientHeight / 2);
  
      // Simple threshold check
      if (containerMid < workSectionEnd) {
        setActiveSection('work');
      } else {
        setActiveSection('university');
      }
    };
  
    // Add scroll event listener
    const container = contentRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }
  
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const container = contentRef.current;
    const element = sectionRefs.current[sectionId];
    
    if (container && element) {
      setActiveSection(sectionId); // Immediately update active section
      const elementPosition = element.offsetTop;
      container.scrollTo({
        top: elementPosition - 20,
        behavior: 'smooth'
      });
    }
};

  return (
    <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 w-full px-2">
      <div className="flex h-[600px]">
        {/* Fixed Navigation Bar */}
        <div className="w-48 border-r border-gray-100 p-4">
          <div className="space-y-3">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-500 ease-in-out
                    ${activeSection === section.id 
                      ? 'bg-gradient-to-r ' + section.color + ' shadow-sm' 
                      : 'hover:bg-gray-50'
                    }`}
                >
                  <Icon className={`w-5 h-5 ${activeSection === section.id ? 'text-gray-800' : 'text-gray-500'}`} />
                  <span className={`font-medium ${activeSection === section.id ? 'text-gray-800' : 'text-gray-500'}`}>
                    {section.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto px-2" ref={contentRef}>
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                ref={el => sectionRefs.current[section.id] = el}
                className="p-4 border-b border-gray-100 last:border-b-0"
              >
                <div className="w-full">
                  <div className={`inline-flex items-center space-x-3 px-4 py-2 rounded-full ${section.activeColor} text-gray-700 mb-6`}>
                    <Icon className="w-5 h-5" />
                    <span>{section.period}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-8 text-gray-800">{section.title}</h2>
                  
                  <div className="space-y-8">
                    {section.content.subsections.map((subsection, index) => (
                      <div 
                        key={index}
                        className="bg-gray-50 rounded-lg p-6"
                      >
                        <div className="flex gap-6">
                          <div className="flex-1">
                            <div className="mb-4">
                              <h3 className="text-xl font-semibold text-gray-800">
                                {subsection.title}
                              </h3>
                              <h4 className="text-lg text-gray-700 mt-1">
                                {subsection.role}
                              </h4>
                              <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                                <span>{subsection.period}</span>
                                <span>•</span>
                                <span>{subsection.location}</span>
                              </div>
                            </div>
                            <ul className="space-y-3 mt-4">
                              {subsection.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start text-gray-600">
                                  <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 ${section.activeColor}`} />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="w-48 shrink-0 flex items-center justify-center bg-white p-2 rounded-lg shadow-sm">
                            <img
                                src={subsection.image}
                                alt={subsection.title}
                                className="max-w-full max-h-28 w-auto h-auto object-contain"
                            />
                            </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Journey;