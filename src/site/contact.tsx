import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-100 text-gray-900 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Have questions or want to get involved? Reach out to us!
        </p>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Message" className="w-full p-2 border border-gray-300 rounded h-32"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
