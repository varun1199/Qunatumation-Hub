import React, { useState } from 'react';
import { Bot, Users, MessageSquareCode, Zap, Brain, Workflow, Database, Target, BarChart as ChartBar, Cpu, BookOpen, MessageSquare, Settings } from 'lucide-react';

interface ServiceFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  technologies: string[];
}

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgClass: string;
  features: ServiceFeature[];
}

function ServiceCard({ 
  service, 
  isActive, 
  onClick 
}: { 
  service: Service;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button 
      onClick={onClick}
      className={`${service.bgClass} rounded-3xl p-8 relative overflow-hidden group text-left transition-all duration-300 transform hover:scale-[1.02] ${
        isActive ? 'ring-2 ring-quantum-red' : ''
      }`}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-white/10 transition-all duration-500"></div>
      <div className="relative z-10">
        <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
          {service.icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
        <p className="text-white/70">{service.description}</p>
      </div>
    </button>
  );
}

function FeatureButton({ 
  feature, 
  isActive, 
  onClick 
}: { 
  feature: ServiceFeature;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
        isActive 
          ? 'bg-quantum-red border-quantum-red text-white' 
          : 'bg-white/5 border-white/10 hover:bg-white/10'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`${isActive ? 'text-white' : 'text-quantum-red'}`}>
          {feature.icon}
        </div>
        <span className="font-semibold">{feature.title}</span>
      </div>
    </button>
  );
}

function FeatureDetails({ feature }: { feature: ServiceFeature }) {
  return (
    <div className="space-y-6">
      <div className="bg-white/5 rounded-xl p-6">
        <h4 className="text-xl font-semibold mb-4">{feature.title}</h4>
        <p className="text-white/70 mb-6">{feature.description}</p>
        
        <h5 className="font-semibold mb-3">Key Benefits:</h5>
        <ul className="space-y-2 mb-6">
          {feature.benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-2 text-white/70">
              <div className="w-1.5 h-1.5 rounded-full bg-quantum-red"></div>
              {benefit}
            </li>
          ))}
        </ul>

        <h5 className="font-semibold mb-3">Technologies Used:</h5>
        <div className="flex flex-wrap gap-2">
          {feature.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/70"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [activeService, setActiveService] = useState('agent');
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const services: Record<string, Service> = {
    agent: {
      title: "Autonomous Agent Development",
      description: "Transform your business operations with AI-powered autonomous agents designed to optimize efficiency, enhance customer engagement, and drive growth.",
      icon: <Bot className="w-8 h-8 text-white" />,
      bgClass: "bg-gradient-to-br from-red-900/90 to-red-950",
      features: [
        {
          icon: <Target className="w-6 h-6" />,
          title: "Lead Generation System",
          description: "Our AI-driven Lead Generation System automates prospect identification, qualification, and engagement using advanced data analysis and behavioral tracking.",
          benefits: [
            "Automated prospect identification and qualification",
            "Personalized engagement sequences",
            "Real-time lead scoring and prioritization",
            "Seamless CRM integration"
          ],
          technologies: ["Machine Learning", "NLP", "Predictive Analytics", "CRM APIs", "Data Mining"]
        },
        {
          icon: <Workflow className="w-6 h-6" />,
          title: "Custom Workflow Automation",
          description: "Eliminate inefficiencies with AI-powered workflow automation tailored to your business needs.",
          benefits: [
            "Streamlined operations",
            "Reduced human error",
            "Increased productivity",
            "Real-time process optimization"
          ],
          technologies: ["Process Mining", "RPA", "Business Rules Engine", "Workflow Analytics"]
        },
        {
          icon: <Brain className="w-6 h-6" />,
          title: "Workforce Training System",
          description: "AI-driven training system that personalizes learning experiences and provides real-time feedback.",
          benefits: [
            "Personalized learning paths",
            "Adaptive skill development",
            "Progress tracking",
            "Performance analytics"
          ],
          technologies: ["Adaptive Learning", "Performance Analytics", "LMS Integration", "Feedback Systems"]
        }
      ]
    },
    consulting: {
      title: "Enterprise Consulting",
      description: "Expert consulting services for end-to-end AI strategy development and implementation.",
      icon: <Users className="w-8 h-8 text-white" />,
      bgClass: "bg-gradient-to-br from-red-800/90 to-red-900",
      features: [
        {
          icon: <ChartBar className="w-6 h-6" />,
          title: "Strategy Development",
          description: "Custom AI strategy aligned with your business goals and market opportunities.",
          benefits: [
            "Market trend analysis",
            "ROI optimization",
            "Risk mitigation",
            "Competitive advantage"
          ],
          technologies: ["Market Analysis Tools", "Strategic Planning", "Risk Assessment", "ROI Modeling"]
        },
        {
          icon: <Target className="w-6 h-6" />,
          title: "Feasibility Assessment",
          description: "Comprehensive evaluation of technical, financial, and operational viability.",
          benefits: [
            "Cost-benefit analysis",
            "Technical evaluation",
            "Resource assessment",
            "Implementation roadmap"
          ],
          technologies: ["Feasibility Analysis", "Technical Assessment", "Cost Modeling", "Resource Planning"]
        },
        {
          icon: <Cpu className="w-6 h-6" />,
          title: "Custom AI Development",
          description: "Tailored AI solutions for your specific business needs and challenges.",
          benefits: [
            "Custom model development",
            "System integration",
            "Performance optimization",
            "Scalability planning"
          ],
          technologies: ["Machine Learning", "Deep Learning", "Cloud Computing", "API Integration"]
        }
      ]
    },
    chatbot: {
      title: "Chatbot Development",
      description: "Advanced conversational AI solutions for enhanced customer engagement.",
      icon: <MessageSquareCode className="w-8 h-8 text-white" />,
      bgClass: "bg-gradient-to-br from-red-700/90 to-red-800",
      features: [
        {
          icon: <MessageSquare className="w-6 h-6" />,
          title: "GPT Development",
          description: "Advanced GPT-powered chatbots with human-like conversation capabilities.",
          benefits: [
            "Natural language understanding",
            "Context awareness",
            "Multi-language support",
            "Personality customization"
          ],
          technologies: ["GPT-4", "Natural Language Processing", "Transformer Models", "Neural Networks"]
        },
        {
          icon: <BookOpen className="w-6 h-6" />,
          title: "Knowledge Response",
          description: "AI-driven knowledge system for accurate and instant information retrieval.",
          benefits: [
            "Instant response generation",
            "Knowledge base integration",
            "Answer accuracy",
            "Content personalization"
          ],
          technologies: ["Knowledge Graphs", "Semantic Search", "Vector Databases", "Content Management"]
        },
        {
          icon: <Settings className="w-6 h-6" />,
          title: "Model Tuning",
          description: "Fine-tuned AI models optimized for your specific use case and audience.",
          benefits: [
            "Improved accuracy",
            "Domain adaptation",
            "Performance optimization",
            "Continuous learning"
          ],
          technologies: ["Transfer Learning", "Fine-tuning", "Model Optimization", "Performance Monitoring"]
        }
      ]
    }
  };

  return (
    <div className="pt-20">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover how our AI solutions can transform your business operations and drive growth
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {Object.entries(services).map(([key, service]) => (
            <ServiceCard
              key={key}
              service={service}
              isActive={activeService === key}
              onClick={() => {
                setActiveService(key);
                setActiveFeature(0);
              }}
            />
          ))}
        </div>

        {/* Service Details */}
        <div className="bg-white/5 rounded-3xl p-12">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{services[activeService].title}</h2>
            <p className="text-white/70 text-lg">{services[activeService].description}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Feature Buttons */}
            <div className="space-y-4">
              {services[activeService].features.map((feature, index) => (
                <FeatureButton
                  key={index}
                  feature={feature}
                  isActive={activeFeature === index}
                  onClick={() => setActiveFeature(index)}
                />
              ))}
            </div>

            {/* Feature Details */}
            <div className="md:col-span-3">
              <FeatureDetails feature={services[activeService].features[activeFeature]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}