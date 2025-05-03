
import React, { useState } from 'react';
import { Calculator, BookOpen, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const TaxCalculator = () => {
  const [income, setIncome] = useState('');
  const [deductions, setDeductions] = useState('');
  const [result, setResult] = useState<number | null>(null);
  
  const calculateEstimatedTax = () => {
    const incomeValue = parseFloat(income) || 0;
    const deductionsValue = parseFloat(deductions) || 0;
    
    const taxableIncome = Math.max(incomeValue - deductionsValue, 0);
    
    // Very simple tax calculation for demonstration purposes
    let estimatedTax = 0;
    
    if (taxableIncome <= 10000) {
      estimatedTax = taxableIncome * 0.1;
    } else if (taxableIncome <= 40000) {
      estimatedTax = 1000 + (taxableIncome - 10000) * 0.12;
    } else if (taxableIncome <= 85000) {
      estimatedTax = 4600 + (taxableIncome - 40000) * 0.22;
    } else {
      estimatedTax = 14500 + (taxableIncome - 85000) * 0.24;
    }
    
    setResult(Math.round(estimatedTax * 100) / 100);
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
      <h3 className="text-xl font-bold mb-4 text-accounting-800">Simple Tax Estimator</h3>
      <p className="text-gray-600 mb-4">Get a quick estimate of your tax liability based on income and deductions.</p>
      
      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="income" className="block text-sm font-medium text-gray-700 mb-1">Annual Income ($)</label>
          <input
            type="number"
            id="income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accounting-500 focus:border-accounting-500"
            placeholder="Enter your annual income"
          />
        </div>
        
        <div>
          <label htmlFor="deductions" className="block text-sm font-medium text-gray-700 mb-1">Total Deductions ($)</label>
          <input
            type="number"
            id="deductions"
            value={deductions}
            onChange={(e) => setDeductions(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accounting-500 focus:border-accounting-500"
            placeholder="Enter your total deductions"
          />
        </div>
      </div>
      
      <button 
        onClick={calculateEstimatedTax}
        className="w-full bg-accounting-600 hover:bg-accounting-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
      >
        Calculate Estimate
      </button>
      
      {result !== null && (
        <div className="mt-4 p-4 bg-accounting-100 rounded-md">
          <p className="font-medium">Estimated Tax: <span className="text-accounting-800">${result.toLocaleString()}</span></p>
          <p className="text-xs text-gray-500 mt-2">
            Note: This is a simplified estimate for demonstration purposes only. For accurate tax planning, please consult with our tax professionals.
          </p>
        </div>
      )}
    </div>
  );
};

const ResourcesSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Tax Saving Strategies for Small Businesses',
      excerpt: 'Discover effective ways to minimize your business tax liability while remaining fully compliant with tax regulations.',
      date: 'May 1, 2025'
    },
    {
      id: 2,
      title: 'Understanding Financial Statements',
      excerpt: 'Learn how to interpret balance sheets, income statements, and cash flow reports to make informed business decisions.',
      date: 'April 22, 2025'
    },
    {
      id: 3,
      title: '5 Bookkeeping Tips for Better Financial Management',
      excerpt: 'Implement these practical bookkeeping strategies to improve accuracy and efficiency in your financial record-keeping.',
      date: 'April 15, 2025'
    }
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="section-title">Financial Resources</h2>
          <p className="section-subtitle">
            Take advantage of our free tools and educational content to strengthen your financial knowledge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Column */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center">
              <Calculator size={24} className="text-accounting-600 mr-2" />
              <h3 className="text-2xl font-bold text-accounting-800">Financial Calculators</h3>
            </div>
            <div id="calculators">
              <TaxCalculator />
              <div className="mt-4 text-center">
                <Link to="/resources#calculators" className="text-accounting-600 hover:underline">
                  View All Calculators
                </Link>
              </div>
            </div>
          </div>
          
          {/* Blog Column */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center">
              <BookOpen size={24} className="text-accounting-600 mr-2" />
              <h3 className="text-2xl font-bold text-accounting-800">Latest Articles</h3>
            </div>
            
            <div className="space-y-6">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <h4 className="text-xl font-semibold mt-1 mb-2 text-accounting-800">{post.title}</h4>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link to={`/resources/blog/${post.id}`} className="text-accounting-600 hover:underline inline-flex items-center">
                    Read More
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-center">
              <Link to="/resources/blog" className="btn-primary">
                View All Articles
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-accounting-700 to-accounting-800 rounded-xl text-white p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-3">
                <TrendingUp size={24} className="mr-2" />
                <h3 className="text-2xl font-bold">Financial Newsletter</h3>
              </div>
              <p className="max-w-xl">
                Subscribe to our monthly newsletter for expert financial insights, tax updates, and accounting tips delivered directly to your inbox.
              </p>
            </div>
            
            <div className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-l-lg md:w-64 focus:outline-none focus:ring-2 focus:ring-accounting-400 text-gray-800"
                />
                <button className="bg-accounting-500 hover:bg-accounting-400 px-6 py-3 rounded-r-lg font-medium transition-colors mt-2 sm:mt-0">
                  Subscribe
                </button>
              </div>
              <p className="text-xs mt-2 text-accounting-200">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
