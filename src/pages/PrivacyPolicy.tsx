
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-accounting-dark">Privacy Policy</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-accounting-800">Introduction</h2>
              <p className="text-gray-600">
                At FiscalFlow, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-accounting-800">Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Register for our services or request information</li>
                <li>Participate in activities on our website</li>
                <li>Contact us via email, phone, or through our contact forms</li>
              </ul>
              <p className="text-gray-600 mt-4">
                This information may include your name, email address, phone number, company name, and other business details relevant to providing our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-accounting-800">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We may use the information we collect from you for various purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Provide, operate, and maintain our website and services</li>
                <li>Improve, personalize, and expand our website and services</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you about our services, updates, and other relevant information</li>
                <li>Process transactions and send related information</li>
                <li>Find and prevent fraud</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-accounting-800">Disclosure of Your Information</h2>
              <p className="text-gray-600 mb-4">
                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.</li>
                <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, and customer service.</li>
                <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-accounting-800">Security of Your Information</h2>
              <p className="text-gray-600">
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the information you provide to us, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-accounting-800">Cookies and Web Beacons</h2>
              <p className="text-gray-600">
                We may use cookies, web beacons, tracking pixels, and other tracking technologies on our website to help customize the site and improve your experience. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of our website.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-accounting-800">Your Privacy Rights</h2>
              <p className="text-gray-600">
                If you are a resident of certain states or countries, you may have certain data protection rights. FiscalFlow respects your privacy and will adhere to applicable privacy laws and regulations. Please contact us using the information provided below for more information about your privacy rights.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-accounting-800">Contact Us</h2>
              <p className="text-gray-600">
                If you have questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-3">
                <p className="text-accounting-800 font-medium">FiscalFlow, Inc.</p>
                <p className="text-gray-600">123 Finance Street, Suite 300</p>
                <p className="text-gray-600">New York, NY 10001</p>
                <p className="text-gray-600">Email: privacy@fiscalflow.com</p>
                <p className="text-gray-600">Phone: (555) 123-4567</p>
              </div>
            </section>
            
            <section>
              <p className="text-gray-500 text-sm">
                Last updated: May 1, 2025
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
