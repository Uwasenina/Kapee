import React from 'react';
import image1 from "../assets/blog2.jpg";
import image2 from '../assets/blog3.jpg';
import { Check, Truck, Headphones, RotateCcw, Monitor, Zap, BarChart3, Edit, Headset, Code, Star } from 'lucide-react';

const KapeePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* About Kapee Section */}
      <div className="container px-4 py-12 mx-auto sm:px-6 lg:px-16 sm:py-16">
        <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2">

          {/* Left Column - Image */}
          <div className="relative w-full">
            <div className="overflow-hidden shadow-lg aspect-square rounded-2xl">
              <img src={image1} alt="About Kapee illustration" className="object-cover w-full h-full" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h1 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">About Kapee</h1>
            <p className="mb-5 text-sm text-blue-600 sm:text-base">Welcome to kapee theme</p>
            <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:mb-8 sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis consequat justo, 
              ac consectetur elit. Nam non mauris ut libero eleifend lacinia in leo suscipit. Sed commodo diam, 
              lorem quis consectetur fermentum hendrerit. Morbi pulvinar hendrerit lorem. Maecenas 
              tristique consectetur elit ut aliquam ut, interdum elit sagittis consectetur, lorem ut 
              lacus varius odio.
            </p>

            {/* Features Grid */}
            <div className="grid gap-2 sm:gap-4 md:grid-cols-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center space-x-2 sm:space-x-3">
                  <Check className="w-4 h-4 text-blue-600 sm:w-5 sm:h-5" />
                  <span className="text-xs text-gray-700 sm:text-sm">Lorem ipsum dolor sit amet.</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="grid items-center gap-8 mt-12 sm:mt-16 lg:grid-cols-2">
          {/* Left Column - Content */}
          <div>
            <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose Us</h2>
            <p className="mb-6 text-sm text-gray-600 sm:text-base">Lorem ipsum dolor adipiscing elit.</p>
            <p className="mb-8 text-sm leading-relaxed text-gray-600 sm:mb-12 sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac placerat tristique, 
              vestibulum et ipsum sit amet, aliquam sit rhoncus in malesuada tellus et ante. Donec tempor id 
              faucibus. Duis rhoncus lorem eros eros tincidunt, et tempor metus tristique. Quisque 
              molestie elit ex nibh tempor cursus.
            </p>

            {/* Service Features */}
            <div className="space-y-6">
              {[
                { icon: Truck, title: "Free Shipping", text: "Praesent Sed Porttitor Lacuus. Integer Molestie Vehicula Porttitor In Vehicula." },
                { icon: Headphones, title: "24/7 Support", text: "Praesent Sed Porttitor Lacuus. Integer Molestie Vehicula Porttitor In Vehicula." },
                { icon: RotateCcw, title: "30 Days Returns", text: "Praesent Sed Porttitor Lacuus. Integer Molestie Vehicula Porttitor In Vehicula." },
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-gray-100 rounded-lg">
                    <feature.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-semibold text-gray-900 sm:text-base">{feature.title}</h3>
                    <p className="text-xs text-gray-600 sm:text-sm">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full mt-8 lg:mt-0">
            <div className="overflow-hidden shadow-lg aspect-square rounded-2xl">
              <img src={image2} alt="Person with travel bags and accessories" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Kapee Features Section */}
      <div className="py-12 bg-white sm:py-16">
        <div className="container px-4 mx-auto sm:px-6 lg:px-16">
          <div className="mb-12 text-center">
            <p className="mb-1 text-sm text-blue-600 sm:text-base">BEST FEATURES</p>
            <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">Kapee Features</h2>
            <p className="max-w-2xl mx-auto text-xs text-gray-600 sm:text-sm">
              Vivamus tortor velit, porta quis mauris ut quam, aliquam non mauris euismod lorem. 
              Lorem mollis elit ex vestibulum eleifend consectetur tristique.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Monitor, title: "Fully Responsive" },
              { icon: Zap, title: "Fastest Page Load" },
              { icon: BarChart3, title: "SEO Base Built-In" },
              { icon: Edit, title: "Translation & RTL Ready" },
              { icon: Headset, title: "Dedicated Support" },
              { icon: Code, title: "No Coding Skills Required" },
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center p-6 text-center bg-gray-50 rounded-xl">
                <div className="flex items-center justify-center w-16 h-16 mb-4 bg-blue-100 rounded-lg">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:mb-3 sm:text-xl">{feature.title}</h3>
                <p className="text-xs text-gray-600 sm:text-sm">
                  Pellentesque Maximus Mattis Ullamcorper Nam Feugiat Neque Placerat. Mattis Odio Tellus Aliquam Suscipit Mattis Cursus Non Eleifd Quam.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-12 sm:py-16 bg-gray-50">
        <div className="container px-4 mx-auto sm:px-6 lg:px-16">
          <div className="mb-12 text-center">
            <p className="mb-1 text-sm text-blue-600 sm:text-base">OUR TESTIMONIAL</p>
            <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">Our Clients Say</h2>
            <p className="max-w-2xl mx-auto text-xs text-gray-600 sm:text-sm">
              Vivamus tortor velit, porta quis mauris ut quam, aliquam non mauris euismod lorem. 
              Lorem mollis elit ex vestibulum eleifend consectetur tristique.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[{name:"Alexander Alex", role:"Founder"}, {name:"Melissa Smith", role:"Director"}, {name:"Theo Lee", role:"CEO"}].map((client, i) => (
              <div key={i} className="p-6 bg-white shadow-sm rounded-xl">
                <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:mb-6 sm:text-base">
                  Praesent quis porttitor lectus. Integer molestie vehicula porttitor in vehicula, ante at lacinia lorem augue sodales vestibulum arcu.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 sm:text-base">{client.name}</h4>
                    <p className="text-xs text-gray-500 sm:text-sm">{client.role}</p>
                    <div className="flex mt-1 space-x-1">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KapeePage;
