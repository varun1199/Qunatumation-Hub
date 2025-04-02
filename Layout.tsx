import React from 'react';
import CTASection from './CTASection';

interface LayoutProps {
  children: React.ReactNode;
  setCurrentPage: (page: string) => void;
}

export default function Layout({ children, setCurrentPage }: LayoutProps) {
  return (
    <div className="bg-quantum-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-quantum-black/60 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/logo.svg" alt="Quantumation Hub Logo" className="w-8 h-8" />
              <span className="text-xl font-bold">Quantumation Hub</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setCurrentPage('home')} 
                className="hover:text-quantum-red transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentPage('services')} 
                className="hover:text-quantum-red transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => setCurrentPage('blog')} 
                className="hover:text-quantum-red transition-colors"
              >
                Blog
              </button>
              <a href="#about" className="hover:text-quantum-red transition-colors">About</a>
              <button className="hover:text-quantum-red transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img src="/logo.svg" alt="Quantumation Hub Logo" className="w-6 h-6" />
                <span className="text-lg font-bold">Quantumation Hub</span>
              </div>
              <p className="text-gray-400">
                Pioneering the future of business automation with advanced AI solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button 
                    onClick={() => {
                      setCurrentPage('services');
                      // Add logic to set active service
                    }} 
                    className="hover:text-quantum-red transition-colors"
                  >
                    Autonomous Agent Development
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      setCurrentPage('services');
                      // Add logic to set active service
                    }} 
                    className="hover:text-quantum-red transition-colors"
                  >
                    Enterprise Consulting
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      setCurrentPage('services');
                      // Add logic to set active service
                    }} 
                    className="hover:text-quantum-red transition-colors"
                  >
                    Chatbot Development
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-quantum-red transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-quantum-red transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-quantum-red transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-quantum-red transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-quantum-red transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-quantum-red transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-quantum-red transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-quantum-red transition-colors">Medium</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 Quantumation Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}