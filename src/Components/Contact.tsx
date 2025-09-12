import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to an API)
    console.log({ name, email, subject, message });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm debug-header">
        <div className="px-4 py-8 mx-auto text-center max-w-7xl debug-header-inner">
          <h1 className="mb-2 text-5xl font-bold text-gray-900 debug-header-title">Contact Us</h1>
          <nav className="text-sm text-gray-500 debug-header-nav">
            <span>Home</span> / <span>Contact Us</span>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-4 py-8 mx-auto max-w-7xl">
        <div className="flex flex-col justify-between p-6 bg-white rounded-lg shadow-lg md:flex-row">
          {/* Left Side: Contact Form */}
          <div className="w-full mb-6 md:w-2/3">
            <h2 className="mb-4 text-2xl font-bold">Send Us Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-gray-700" htmlFor="name">
                  Your Name (required)
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded md:w-3/4"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-700" htmlFor="email">
                  Your Email (required)
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded md:w-3/4"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-700" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded md:w-3/4"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-700" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded md:w-3/4"
                  rows={4}
                />
              </div>
              <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Contact Information */}
          <div className="w-full pl-0 md:w-1/3 md:pl-6">
            <h2 className="mb-4 text-2xl font-bold">Get In Touch</h2>
            <p className="mb-4 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium nisl feugiat nisl gravida, eget rutrum ligula placerat. Aenean id elit dolor. Suspendisse malesuada varius elit.
            </p>
            <h3 className="font-semibold">Our Office</h3>
            <p className="mb-2">Address: 106 Street, New City, United States.</p>
            <p className="mb-2">Phone: (0123) 245 9870</p>
            <p className="mb-2">Email: Mail@Example.com</p>
            <h3 className="mt-4 font-semibold">Working Hours</h3>
            <p>Monday - Friday: 9am to 7pm</p>
            <p>Saturday: 9am to 2pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-12 text-center text-white bg-blue-900">
        <h2 className="mb-2 text-3xl font-bold">Want To Work With Us?</h2>
        <p className="mb-6">Feel free to reach us with the contact form!</p>
        <button className="px-6 py-2 transition-colors bg-transparent border border-white rounded hover:bg-white hover:text-blue-900">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default ContactUs;