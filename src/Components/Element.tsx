import React from 'react';

const Elements: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen px-4 bg-gray-50 sm:px-6 lg:px-8">
      <h1 className="mt-10 text-3xl font-bold sm:text-4xl">Elements</h1>
      
      <nav className="w-full max-w-2xl mt-5">
        <ul className="flex flex-wrap justify-center gap-6 sm:gap-10">
          <li className="text-base sm:text-lg">
            <a href="#" className="text-gray-800 hover:text-blue-500">Home</a>
          </li>
          <li className="text-base sm:text-lg">
            <a href="#" className="text-gray-800 hover:text-blue-500">Elements</a>
          </li>
        </ul>
      </nav>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-8">
        {[
          "Typography",
          "Headings",
          "Buttons",
          "Social Buttons",
          "Progress Bar",
          "Info Box",
          "Instagram",
          "Tabs",
          "Talks",
          "Accordion",
          "Blog Listing",
          "Products Grid Carousel",
          "Products With Banner",
          "Products Categories",
          "Image Gallery",
          "Recently Viewed Products",
          "Testimonials",
          "Counter",
          "Countdown Timer",
          "Hot Deal Products",
          "Products Widgets",
          "Portfolio Listing",
          "Portfolio Carousel",
          "Products Categories Thumbnail",
          "Team",
          "Tours",
        ].map((element) => (
          <div key={element} className="p-3 text-center transition bg-white rounded-lg shadow sm:p-4 hover:shadow-md">
            <a href="#" className="text-sm text-gray-800 sm:text-base md:text-lg hover:text-blue-500">
              {element}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Elements;
