import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Bot, Users, MessageSquareCode, ChevronRight } from 'lucide-react';
import Services from './pages/Services';
import Layout from './components/Layout';

function FeatureButton({ 
  children, 
  onClick,
  feature 
}: { 
  children: React.ReactNode; 
  onClick: () => void;
  feature: string;
}) {
  return (
    <button 
      onClick={onClick} 
      className="feature-button"
      data-feature={feature}
    >
      {children}
    </button>
  );
}

function CapabilityCard({ 
  number, 
  title, 
  description, 
  features, 
  bgClass,
  setCurrentPage,
  setActiveService,
  setActiveFeature 
}: { 
  number: string; 
  title: string; 
  description: string; 
  features: { title: string; content: string }[];
  bgClass: string;
  setCurrentPage: (page: string) => void;
  setActiveService: (service: string) => void;
  setActiveFeature: (feature: number) => void;
}) {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const handleFeatureClick = (index: number, feature: string) => {
    setSelectedFeature(selectedFeature === index ? null : index);
    setCurrentPage('services');
    
    switch(title.toLowerCase()) {
      case 'autonomous agent development':
        setActiveService('agent');
        break;
      case 'enterprise consulting':
        setActiveService('consulting');
        break;
      case 'chatbot development':
        setActiveService('chatbot');
        break;
    }
    setActiveFeature(index);
  };

  return (
    <div className={`capability-card ${bgClass}`}>
      <div className="card-number">#{number}</div>
      <h3 className="text-3xl font-bold mb-6">{title}</h3>
      <p className="text-white/70 mb-8">{description}</p>
      
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index}>
            <FeatureButton 
              onClick={() => handleFeatureClick(index, feature.title)}
              feature={feature.title}
            >
              {feature.title}
            </FeatureButton>
            {selectedFeature === index && (
              <div className="mt-3 p-4 rounded-lg bg-white/5 text-sm text-white/70">
                {feature.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function HomePage({ setActiveService, setActiveFeature }: { 
  setActiveService: (service: string) => void;
  setActiveFeature: (feature: number) => void;
}) {
  const [currentPage, setCurrentPage] = useState('home');

  const capabilities = [
    {
      number: "1",
      title: "AUTONOMOUS AGENT DEVELOPMENT",
      description: "Transform your business operations with AI-powered autonomous agents designed to optimize efficiency, enhance customer engagement, and drive growth. Our intelligent systems work 24/7 to automate tasks, streamline processes, and deliver consistent, high-quality results.",
      bgClass: "bg-gradient-to-br from-red-900/90 to-red-950 text-white",
      features: [
        {
          title: "Lead Generation System",
          content: "Our AI-driven Lead Generation System automates prospect identification, qualification, and engagement. Using advanced data analysis, natural language processing, and behavioral tracking, our system targets high-intent prospects, nurtures them through personalized interactions, and seamlessly integrates with your CRM to optimize conversions."
        },
        {
          title: "Custom Workflow Automation",
          content: "Eliminate inefficiencies with AI-powered workflow automation tailored to your business needs. From scheduling and task delegation to data processing and real-time decision-making, our custom automation solutions streamline operations, reduce human error, and boost productivity across all departments."
        },
        {
          title: "Workforce Training System",
          content: "Leverage AI to train and upskill your workforce efficiently. Our AI-driven training system personalizes learning experiences, adapts to employee performance, and provides real-time feedback. This ensures faster onboarding, continuous skill development, and improved employee retention through engaging, data-driven training modules."
        }
      ]
    },
    {
      number: "2",
      title: "ENTERPRISE CONSULTING",
      description: "Unlock the full potential of AI for your enterprise with our expert consulting services. We provide end-to-end AI strategy development, feasibility assessment, and seamless integration to help businesses scale efficiently and future-proof their operations.",
      bgClass: "bg-gradient-to-br from-red-800/90 to-red-900 text-white",
      features: [
        {
          title: "Strategy Development",
          content: "We craft a custom AI strategy aligned with your business goals. Our experts analyze market trends, operational challenges, and growth opportunities to develop a roadmap that ensures successful AI adoption, maximizing ROI while mitigating risks."
        },
        {
          title: "Feasibility Assessment",
          content: "Before implementing AI, we conduct a thorough feasibility study to evaluate technical, financial, and operational viability. Our assessment includes cost-benefit analysis, scalability potential, and risk evaluation to ensure your AI investments yield measurable results."
        },
        {
          title: "Custom AI Development & Integration",
          content: "We design, develop, and integrate AI solutions tailored to your enterprise. Whether you need intelligent automation, predictive analytics, or machine learning models, our AI specialists ensure seamless deployment, compatibility with existing systems, and continuous optimization for peak performance."
        }
      ]
    },
    {
      number: "3",
      title: "CHATBOT DEVELOPMENT",
      description: "Enhance customer engagement and support with intelligent AI-powered chatbots. Our chatbots leverage cutting-edge natural language processing (NLP) and machine learning to provide instant, accurate, and personalized responses, improving customer satisfaction and operational efficiency.",
      bgClass: "bg-gradient-to-br from-red-700/90 to-red-800 text-white",
      features: [
        {
          title: "GPT Development",
          content: "We build advanced GPT-powered chatbots customized for your business needs. Whether for customer support, sales assistance, or internal automation, our GPT models deliver human-like conversations, deep contextual understanding, and adaptive learning capabilities."
        },
        {
          title: "Knowledge Response",
          content: "Equip your chatbot with an AI-driven knowledge response system that instantly retrieves and delivers accurate information. Our chatbots integrate with your knowledge base, FAQs, and internal documentation to provide real-time, data-backed responses to customer and employee queries."
        },
        {
          title: "Model Tuning",
          content: "Optimize chatbot performance with fine-tuned AI models tailored to your industry and audience. Our model tuning process involves dataset refinement, reinforcement learning, and feedback loops to improve accuracy, intent recognition, and response relevance over time."
        }
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 z-0">
          <Spline scene="https://my.spline.design/particleaibrain-fe89a15e42b027d81316df6b5386cc38/" />
        </div>
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Revolutionize Your Business with
                <span className="text-quantum-red"> AI Automation</span>
              </h1>
              <p className="text-xl text-gray-300">
                Transform your operations with cutting-edge AI solutions. We turn complex automation challenges into seamless digital workflows.
              </p>
              <div className="flex items-center space-x-6">
                <button className="bg-quantum-red px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors flex items-center">
                  Start Your Journey <ChevronRight className="ml-2" />
                </button>
                <button className="border border-white/20 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <section className="py-24 bg-quantum-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-quantum-red text-lg font-semibold mb-4 block">Our Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Intelligent Automation Solutions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine cutting-edge AI technologies with deep industry expertise to create solutions that transform how businesses operate and increase productivity
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability) => (
              <CapabilityCard 
                key={capability.number} 
                {...capability} 
                setCurrentPage={setCurrentPage}
                setActiveService={setActiveService}
                setActiveFeature={setActiveFeature}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeService, setActiveService] = useState('agent');
  const [activeFeature, setActiveFeature] = useState(0);
  
  return (
    <Layout setCurrentPage={setCurrentPage}>
      {currentPage === 'services' ? (
        <Services />
      ) : (
        <HomePage 
          setActiveService={setActiveService} 
          setActiveFeature={setActiveFeature} 
        />
      )}
    </Layout>
  );
}

export default App;