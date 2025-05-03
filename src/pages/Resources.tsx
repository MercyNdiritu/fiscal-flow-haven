
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ResourcesSection from '../components/ResourcesSection';
import CTASection from '../components/CTASection';
import { Calculator, FileText, TrendingUp, BookOpen, Calendar } from 'lucide-react';

const Resources = () => {
  const articles = [
    {
      id: 4,
      title: "Small Business Tax Deductions You Shouldn't Miss",
      excerpt: "Make sure you're taking advantage of all available tax deductions to minimize your business tax liability.",
      date: "April 10, 2025",
      category: "Tax Planning",
      image: "https://source.unsplash.com/random/300x200/?business,tax"
    },
    {
      id: 5,
      title: "How to Prepare for a Financial Audit",
      excerpt: "Steps to ensure your business is ready for an audit, whether from the IRS or an independent auditor.",
      date: "April 5, 2025",
      category: "Audit",
      image: "https://source.unsplash.com/random/300x200/?audit,documents"
    },
    {
      id: 6,
      title: "Cash Flow Management for Seasonal Businesses",
      excerpt: "Strategies for maintaining consistent cash flow when your business experiences significant seasonal fluctuations.",
      date: "March 28, 2025",
      category: "Financial Advisory",
      image: "https://source.unsplash.com/random/300x200/?cash,finance"
    },
    {
      id: 7,
      title: "Understanding Business Valuation Methods",
      excerpt: "A comparison of different approaches to determine the true value of a business for sale, acquisition, or internal assessment.",
      date: "March 22, 2025",
      category: "Business Consulting",
      image: "https://source.unsplash.com/random/300x200/?business,valuation"
    },
    {
      id: 8,
      title: "Effective Bookkeeping Practices for Small Businesses",
      excerpt: "Simple but powerful bookkeeping methods that can improve financial clarity and compliance for small business owners.",
      date: "March 15, 2025",
      category: "Bookkeeping",
      image: "https://source.unsplash.com/random/300x200/?bookkeeping,accounting"
    },
    {
      id: 9,
      title: "Year-End Tax Planning Checklist",
      excerpt: "Essential actions to take before year-end to optimize your tax position and prepare for filing season.",
      date: "March 8, 2025",
      category: "Tax Planning",
      image: "https://source.unsplash.com/random/300x200/?taxes,planning"
    }
  ];
  
  const calculators = [
    {
      id: "tax",
      title: "Tax Estimator",
      description: "Estimate your tax liability based on income and deductions.",
      icon: <Calculator size={40} className="text-accounting-600" />
    },
    {
      id: "loan",
      title: "Loan Payment Calculator",
      description: "Calculate monthly payments and total interest for various loan scenarios.",
      icon: <TrendingUp size={40} className="text-accounting-600" />
    },
    {
      id: "retirement",
      title: "Retirement Planner",
      description: "Project your retirement savings based on contributions and expected returns.",
      icon: <Calendar size={40} className="text-accounting-600" />
    },
    {
      id: "business",
      title: "Business Cash Flow",
      description: "Forecast your business cash flow based on revenue and expense projections.",
      icon: <FileText size={40} className="text-accounting-600" />
    }
  ];
  
  const guides = [
    {
      title: "Small Business Tax Guide",
      description: "Complete guide to tax regulations and strategies for small businesses.",
      link: "/resources/guides/small-business-tax",
      icon: <BookOpen size={24} className="text-accounting-600" />
    },
    {
      title: "Financial Statement Analysis",
      description: "How to interpret and use financial statements for better decision-making.",
      link: "/resources/guides/financial-statement-analysis",
      icon: <BookOpen size={24} className="text-accounting-600" />
    },
    {
      title: "Business Entity Selection",
      description: "Comparison of business entity types and their tax implications.",
      link: "/resources/guides/business-entity-selection",
      icon: <BookOpen size={24} className="text-accounting-600" />
    }
  ];

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-accounting-700 to-accounting-800 text-white py-16">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources & Tools</h1>
              <p className="text-xl text-accounting-100">
                Free financial tools, guides, and educational content to help you make informed decisions.
              </p>
            </div>
          </div>
        </div>
        
        {/* Financial Calculators */}
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="section-title">Financial Calculators</h2>
            <p className="section-subtitle">
              Use our free calculators to help plan your financial future and make informed decisions.
            </p>
          </div>
          
          <div id="calculators" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {calculators.map((calculator) => (
              <div key={calculator.id} className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-100">
                <div className="flex justify-center mb-4">
                  {calculator.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-accounting-800">{calculator.title}</h3>
                <p className="text-gray-600 mb-6">{calculator.description}</p>
                <a href={`/resources/calculators/${calculator.id}`} className="btn-primary inline-block">
                  Use Calculator
                </a>
              </div>
            ))}
          </div>
        </div>
        
        {/* Interactive Calculator Example */}
        <div className="bg-gray-50 py-16 mt-16">
          <ResourcesSection />
        </div>
        
        {/* Educational Guides */}
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="section-title">Educational Guides</h2>
            <p className="section-subtitle">
              In-depth guides to help you understand complex financial topics and make better decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="mb-4">
                  {guide.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-accounting-800">{guide.title}</h3>
                <p className="text-gray-600 mb-6">{guide.description}</p>
                <a href={guide.link} className="text-accounting-600 hover:underline flex items-center">
                  Download Guide
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
        
        {/* Blog Articles */}
        <div className="bg-white py-16">
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="section-title">Latest Articles</h2>
              <p className="section-subtitle">
                Expert insights on taxes, accounting, financial planning, and business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-accounting-600 font-medium">{article.category}</span>
                      <span className="text-sm text-gray-500">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-accounting-800">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <a href={`/resources/blog/${article.id}`} className="text-accounting-600 hover:underline flex items-center">
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a href="/resources/blog" className="btn-primary">
                View All Articles
              </a>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="bg-accounting-100 py-16">
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Answers to common questions about accounting, taxes, and financial management.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2 text-accounting-800">When should I start preparing for tax season?</h3>
                <p className="text-gray-600">
                  Ideally, tax preparation is a year-round activity. However, you should begin actively gathering documents and reviewing your tax situation at least 3-4 months before the filing deadline. For most individuals, this means starting in January for the April filing deadline.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2 text-accounting-800">How often should a small business review their financial statements?</h3>
                <p className="text-gray-600">
                  Small businesses should review their financial statements monthly at a minimum. This allows you to catch issues early, adjust strategies as needed, and maintain a clear picture of your financial health. Quarterly deeper reviews with your accountant are also recommended.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2 text-accounting-800">What's the difference between a bookkeeper and an accountant?</h3>
                <p className="text-gray-600">
                  Bookkeepers primarily record daily financial transactions and maintain financial records. Accountants analyze this financial data, prepare reports, provide financial insights, ensure regulatory compliance, and often have more specialized education. Many businesses need both services.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2 text-accounting-800">How long should I keep financial records and tax returns?</h3>
                <p className="text-gray-600">
                  Generally, you should keep tax returns and supporting documents for at least 7 years. However, some records related to assets, property, and investments should be kept longer - until the period of limitations expires for the year in which you dispose of the property.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a href="/resources/faq" className="btn-primary">
                View All FAQs
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection />
      <Footer />
    </>
  );
};

export default Resources;
