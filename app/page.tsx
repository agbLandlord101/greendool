/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useEffect } from "react";

const steps = [
  {
    title: "Share Your Situation",
    content: "Confidentially share your financial challenges through our simple form - we're here to listen, not judge.",
  },
  {
    title: "Personalized Needs Assessment",
    content: "Our specialists will work with you to understand your unique circumstances within 24 hours of submission.",
  },
  {
    title: "Your Privacy Protected",
    content: "All information remains strictly confidential, secured with bank-level encryption standards.",
  },
  {
    title: "Fair & Compassionate Review",
    content: "Every request receives individual attention from our trained financial empowerment advisors.",
  },
  {
    title: "Tailored Support Plan",
    content: "Receive customized resources and guidance to help regain control of your financial future.",
  },
];

const FinancialEmpowermentPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(steps[0].title);
  const [isMobile, setIsMobile] = useState(false);
  const [openTabs, setOpenTabs] = useState<boolean[]>(new Array(steps.length).fill(false));

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleAccordion = (index: number) => {
    setOpenTabs(prev => {
      const newTabs = [...prev];
      newTabs[index] = !newTabs[index];
      return newTabs;
    });
  };

  return (
    <div className="page-container bg-white text-black">
      <header className="header bg-white text-black flex justify-between items-center p-6 shadow-md sticky top-0 z-50">
        <div className="logo-container">
          <a>
            <img src="/logogreen.svg" alt="HelpNow Logo" className="h-8 mr-3" />
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-4">
          <a
            href="/info"
            className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 text-sm"
          >
            Get Assistance
          </a>
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-menu hidden md:flex space-x-8 font-medium text-sm md:text-base">
          <a href="/info" className="hover:text-green-500 transition duration-300">Our Programs</a>
          <a href="/info" className="hover:text-green-500 transition duration-300">Get Involved</a>
          <a href="/info" className="hover:text-green-500 transition duration-300">Impact</a>
          <a href="/info" className="hover:text-green-500 transition duration-300">About Us</a>
          <a href="/info" className="hover:text-green-500 transition duration-300">FAQ</a>
        </nav>

        <div className="hidden md:flex space-x-4">
          <a href="/login" className="text-black hover:text-green-500 transition duration-300">Member Login</a>
          <a href="/donate" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-green-500 transition duration-300">
            Donate
          </a>
          <a href="/info" className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
            Apply
          </a>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white text-black space-y-4 p-4">
          {["Our Programs", "Get Involved", "Impact", "About Us", "FAQ", "Login"].map((item) => (
            <a key={item} href="/login" className="block hover:text-green-500">
              {item}
            </a>
          ))}
          <a href="/donate" className="block bg-black text-white px-5 py-2 rounded-lg hover:bg-green-500 transition duration-300">
            Support Our Work
          </a>
          <a href="/info" className="block bg-green-500 text-black px-5 py-2 rounded-lg hover:bg-green-600 transition duration-300">
            Get Help
          </a>
        </nav>
      )}

      <main>
        <section className="p-6 md:p-10 bg-gray-50">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Empowerment Through Action
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 space-y-6 md:space-y-0">
            <div className="flex items-center space-x-4">
              <img src="/submit.png" alt="Request Help" className="w-12 h-12" />
              <div>
                <h3 className="font-bold">Share Your Needs</h3>
                <p className="text-sm text-gray-600">Begin your journey by confidentially sharing your current financial situation.</p>
              </div>
              <span className="hidden md:inline-block text-xl text-green-500">➡</span>
            </div>

            <div className="flex items-center space-x-4">
              <img src="/stopwatch.png" alt="Assessment" className="w-12 h-12" />
              <div>
                <h3 className="font-bold">Personalized Strategy</h3>
                <p className="text-sm text-gray-600">Receive a customized action plan within 24 hours from our financial coaches.</p>
              </div>
              <span className="hidden md:inline-block text-xl text-green-500">➡</span>
            </div>

            <div className="flex items-center space-x-4">
              <img src="/moneyhand.png" alt="Support" className="w-12 h-12" />
              <div>
                <h3 className="font-bold">Ongoing Support</h3>
                <p className="text-sm text-gray-600">Gain access to resources, education, and financial tools for lasting change.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center p-6 md:p-10 gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Break the Cycle of Financial Uncertainty
            </h2>
            <p className="text-lg md:text-xl mb-4">
              Traditional systems often overlook real human potential. We focus on your capabilities, not just credit scores. 
              Our community-driven approach helps you build sustainable financial health through education, resources, 
              and personalized support.
            </p>
            <a
              href="/info"
              className="inline-block bg-green-500 text-black px-8 py-3 rounded-lg hover:bg-green-600 transition duration-300 text-lg font-semibold"
            >
              Start Your Journey
            </a>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/tax-center.png"
              alt="Financial Empowerment"
              className="w-full max-w-xl mx-auto rounded-xl shadow-lg"
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row-reverse items-center p-6 md:p-10 gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Community-Powered Solutions
            </h2>
            <p className="text-lg md:text-xl mb-4">
              Access immediate support through our network of financial mentors and community partners. 
              Whether you&apos;re facing unexpected expenses or planning long-term stability, we provide the tools 
              and guidance to help you take control.
            </p>
            <a
              href="/info"
              className="inline-block bg-green-500 text-black px-8 py-3 rounded-lg hover:bg-green-600 transition duration-300 text-lg font-semibold"
            >
              Apply for Support
            </a>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/tax-refund-win10k-desktop.svg"
              alt="Community Support"
              className="w-full max-w-xl mx-auto rounded-xl shadow-lg"
            />
          </div>
        </section>

        <section className="p-6 md:p-10 bg-gray-50">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Your Path to Financial Freedom
          </h2>

          {!isMobile ? (
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {steps.map((step) => (
                  <button
                    key={step.title}
                    onClick={() => setActiveTab(step.title)}
                    className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                      activeTab === step.title
                        ? 'bg-green-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {step.title}
                  </button>
                ))}
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                {steps.find((step) => step.title === activeTab)?.content}
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="mb-4 bg-white rounded-xl shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center px-6 py-4 font-semibold"
                  >
                    <span>{step.title}</span>
                    <span className={`text-green-500 text-xl transition-transform ${openTabs[index] ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  {openTabs[index] && (
                    <div className="px-6 py-4 border-t border-gray-100">
                      {step.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="bg-black text-white p-6 text-center">
        <p className="text-sm md:text-base">
          © 2025 HelpNow Financial Empowerment Network. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default FinancialEmpowermentPage;