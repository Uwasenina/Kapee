import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, subject, message });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="px-4 py-8 mx-auto text-center max-w-7xl">
          <h1 className="mb-2 text-3xl font-bold text-gray-900 md:text-5xl">
            Contact Us
          </h1>
          <nav className="text-sm text-gray-500">
            <span>Home</span> / <span>Contact Us</span>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-4 py-8 mx-auto max-w-7xl">
        <div className="flex flex-col justify-between p-6 bg-white rounded-lg shadow-lg md:flex-row">
          {/* Left Side: Contact Form */}
          <div className="w-full mb-8 md:w-2/3 md:mb-0">
            <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700" htmlFor="name">
                  Your Name (required)
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700" htmlFor="email">
                  Your Email (required)
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 text-white transition bg-blue-600 rounded-md hover:bg-blue-700 md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Contact Information */}
          <div className="w-full md:w-1/3 md:pl-8">
            <h2 className="mb-4 text-2xl font-bold">Get In Touch</h2>
            <p className="mb-6 text-sm text-gray-700 md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium nisl
              feugiat nisl gravida, eget rutrum ligula placerat. Aenean id elit dolor.
            </p>

            <h3 className="font-semibold">Our Office</h3>
            <p className="mb-2 text-sm md:text-base">Address: 106 Street, New City, United States.</p>
            <p className="mb-2 text-sm md:text-base">Phone: (0123) 245 9870</p>
            <p className="mb-4 text-sm md:text-base">Email: Mail@Example.com</p>

            <h3 className="mt-4 font-semibold">Working Hours</h3>
            <p className="text-sm md:text-base">Mon - Fri: 9am - 7pm</p>
            <p className="text-sm md:text-base">Saturday: 9am - 2pm</p>
            <p className="text-sm md:text-base">Sunday: Closed</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="px-4 py-12 text-center text-white bg-blue-900">
        <h2 className="mb-3 text-2xl font-bold md:text-3xl">
          Want To Work With Us?
        </h2>
        <p className="mb-6 text-sm md:text-base">
          Feel free to reach us with the contact form!
        </p>
        <button className="px-6 py-3 text-sm font-semibold transition bg-transparent border border-white rounded-md hover:bg-white hover:text-blue-900 md:text-base">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
