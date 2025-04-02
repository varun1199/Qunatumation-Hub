import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-quantum-red/10"></div>
      <div className="container mx-auto px-6 relative">
        <div className="bg-gradient-to-r from-quantum-black to-quantum-gray p-12 rounded-3xl border border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="w-16 h-16 text-quantum-red mx-auto mb-8" />
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the ranks of industry leaders who have revolutionized their operations with our AI solutions.
            </p>
            <button className="bg-quantum-red px-12 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center">
              Schedule a Consultation <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}