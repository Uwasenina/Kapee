import React from 'react';
import image1 from "../assets/blog2.jpg";
import image2 from '../assets/blog3.jpg';

import { Check, Truck, Headphones, RotateCcw, Monitor, Zap, BarChart3, Edit, Headset, Code, Star } from 'lucide-react';

const KapeePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* About Kapee Section */}
      <div className="container px-6 py-16 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="overflow-hidden shadow-lg aspect-square rounded-2xl">
              <img 
                src={image1} 
                alt="About Kapee illustration" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900">About Kapee</h1>
            <p className="mb-6 text-sm text-blue-600">Welcome to kapee theme</p>
            
            <p className="mb-8 leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis consequat justo, 
              ac consectetur elit. Nam non mauris ut libero eleifend lacinia in leo suscipit. Sed commodo diam, 
              lorem quis consectetur fermentum hendrerit. Morbi pulvinar hendrerit lorem. Maecenas 
              tristique consectetur elit ut aliquam ut, interdum elit sagittis consectetur, lorem ut 
              lacus varius odio.
            </p>
            
            {/* Features Grid */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-700">Lorem ipsum dolor sit amet.</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-700">Lorem ipsum dolor sit amet.</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-700">Integer tempor mauris faucibus.</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-700">Integer tempor mauris faucibus.</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-700">Sed molestus euismod elit quis.</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-700">Sed molestus euismod elit quis.</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Why Choose Us Section */}
        <div className="grid items-center gap-12 mt-20 lg:grid-cols-2">
          {/* Left Column - Content */}
          <div>
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mb-8 text-sm text-gray-600">Lorem ipsum dolor adipiscing elit.</p>
            
            <p className="mb-12 leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac placerat tristique, 
              vestibulum et ipsum sit amet, aliquam sit rhoncus in malesuada tellus et ante. Donec tempor id 
              faucibus. Duis rhoncus lorem eros eros tincidunt, et tempor metus tristique. Quisque 
              molestie elit ex nibh tempor cursus.
            </p>
            
            {/* Service Features */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Truck className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Free Shipping</h3>
                  <p className="text-sm text-gray-600">
                    Praesent Sed Porttitor Lacuus. Integer Molestie Vehicula Porttitor In Vehicula. 
                    Ante At Gravida Laorris. Lorem Augue Sodales Erat. Vitae Vestibulum Arcu Urna Vel 
                    Justo. Quisque Sed Arcu Aliquam Nulls.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Headphones className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">24/7 Support</h3>
                  <p className="text-sm text-gray-600">
                    Praesent Sed Porttitor Lacuus. Integer Molestie Vehicula Porttitor In Vehicula. 
                    Ante At Gravida Laorris. Lorem Augue Sodales Erat. Vitae Vestibulum Arcu Urna Vel 
                    Justo. Quisque Sed Arcu Aliquam Nulls.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <RotateCcw className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">30 Days Returns</h3>
                  <p className="text-sm text-gray-600">
                    Praesent Sed Porttitor Lacuus. Integer Molestie Vehicula Porttitor In Vehicula. 
                    Ante At Gravida Laorris. Lorem Augue Sodales Erat. Vitae Vestibulum Arcu Urna Vel 
                    Justo. Quisque Sed Arcu Aliquam Nulls.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative">
            <div className="overflow-hidden shadow-lg aspect-square rounded-2xl">
              <img 
                src={image2} 
                alt="Person with travel bags and accessories" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Kapee Features Section */}
      <div className="py-16 bg-white">
        <div className="container px-6 mx-auto">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm text-blue-600">BEST FEATURES</p>
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Kapee Features</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Vivamus tortor velit, porta quis mauris ut quam, aliquam non mauris euismod lorem. 
              Lorem mollis elit ex vestibulum eleifend consectetur tristique.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 text-center bg-gray-50 rounded-xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg">
                <Monitor className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Fully Responsive</h3>
              <p className="text-sm text-gray-600">
                Pellentesque Maximus Mattis Ullamcorper Nam 
                Feugiat Neque Placerat. Mattis Odio Tellus Aliquam 
                Suscipit Mattis Cursus Non Eleifd Quam.
              </p>
            </div>
            
            <div className="p-6 text-center bg-gray-50 rounded-xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Fastest Page Load</h3>
              <p className="text-sm text-gray-600">
                Pellentesque Maximus Mattis Ullamcorper Nam 
                Feugiat Neque Placerat. Mattis Odio Tellus Aliquam 
                Suscipit Mattis Cursus Non Eleifd Quam.
              </p>
            </div>
            
            <div className="p-6 text-center bg-gray-50 rounded-xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">SEO Base Built-In</h3>
              <p className="text-sm text-gray-600">
                Pellentesque Maximus Mattis Ullamcorper Nam 
                Feugiat Neque Placerat. Mattis Odio Tellus Aliquam 
                Suscipit Mattis Cursus Non Eleifd Quam.
              </p>
            </div>
            
            <div className="p-6 text-center bg-gray-50 rounded-xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg">
                <Edit className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Translation & RTL Ready</h3>
              <p className="text-sm text-gray-600">
                Pellentesque Maximus Mattis Ullamcorper Nam 
                Feugiat Neque Placerat. Mattis Odio Tellus Aliquam 
                Suscipit Mattis Cursus Non Eleifd Quam.
              </p>
            </div>
            
            <div className="p-6 text-center bg-gray-50 rounded-xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg">
                <Headset className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Dedicated Support</h3>
              <p className="text-sm text-gray-600">
                Pellentesque Maximus Mattis Ullamcorper Nam 
                Feugiat Neque Placerat. Mattis Odio Tellus Aliquam 
                Suscipit Mattis Cursus Non Eleifd Quam.
              </p>
            </div>
            
            <div className="p-6 text-center bg-gray-50 rounded-xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">No Coding Skills Required</h3>
              <p className="text-sm text-gray-600">
                Pellentesque Maximus Mattis Ullamcorper Nam 
                Feugiat Neque Placerat. Mattis Odio Tellus Aliquam 
                Suscipit Mattis Cursus Non Eleifd Quam.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50">
        <div className="container px-6 mx-auto">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm text-blue-600">OUR TESTIMONIAL</p>
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Our Clients Say</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Vivamus tortor velit, porta quis mauris ut quam, aliquam non mauris euismod lorem. 
              Lorem mollis elit ex vestibulum eleifend consectetur tristique.
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-white shadow-sm rounded-xl">
              <p className="mb-6 text-sm leading-relaxed text-gray-600">
                Praesent quis porttitor lectus. Integer molestie 
                vehicula porttitor in vehicula, ante at lacinia lorem 
                augue sodales vestibulum arcu augue.
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Alexander Alex</h4>
                  <p className="text-sm text-gray-500">Founder</p>
                  <div className="flex mt-1 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white shadow-sm rounded-xl">
              <p className="mb-6 text-sm leading-relaxed text-gray-600">
                Praesent quis porttitor lectus. Integer molestie 
                vehicula porttitor in vehicula, ante at lacinia lorem 
                augue sodales vestibulum arcu augue.
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Melissa Smith</h4>
                  <p className="text-sm text-gray-500">Director</p>
                  <div className="flex mt-1 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white shadow-sm rounded-xl">
              <p className="mb-6 text-sm leading-relaxed text-gray-600">
                Praesent quis porttitor lectus. Integer molestie 
                vehicula porttitor in vehicula, ante at lacinia lorem 
                augue sodales vestibulum arcu augue.
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Theo Lee</h4>
                  <p className="text-sm text-gray-500">CEO</p>
                  <div className="flex mt-1 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KapeePage;