import { useState } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Eye, 
  Calendar, 
  User, 
  MessageCircle, 
  Flame 
} from "lucide-react";

import image2 from "../assets/blog1.jpg";
import image3 from "../assets/blog2.jpg";
import image4 from "../assets/blog3.jpg";

// Blog Images
const blogImages = [image2, image3, image4];

// Dummy blog data
const blogs = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Blog Post ${i + 1}: Latest Tech Trends`,
  excerpt:
    "Discover the latest innovations and trends shaping the future of technology and digital commerce...",
  content:
    "Full article content would go here with detailed insights and analysis...",
  date: `2025-09-${(i % 30) + 1}`,
  author: `Author ${(i % 5) + 1}`,
  comments: Math.floor(Math.random() * 20) + 1,
  views: Math.floor(Math.random() * 200) + 50,
  image: blogImages[i % blogImages.length],
  category: ["Technology", "Business", "Design", "Marketing", "E-commerce"][i % 5],
  readTime: Math.floor(Math.random() * 10) + 2,
}));

// Sidebar data
const recentBlogs = blogs.slice(-5);
const popularBlogs = [...blogs].sort((a, b) => b.views - a.views).slice(0, 5);
const commentsData = blogs
  .map((b) => ({
    blogId: b.id,
    text: `Great insights on ${b.category}! Thanks for sharing...`,
    author: `User${b.id}`,
  }))
  .slice(0, 5);

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const blogsPerPage = 6;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const [sidebarTab, setSidebarTab] = useState<"recent" | "popular" | "comments">(
    "recent"
  );

  // Blogs for current page
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">Latest Blog Posts</h1>
          <p className="text-lg text-gray-600">
            Stay updated with the latest trends and insights
          </p>
          <div className="w-20 h-1 mx-auto mt-4 bg-yellow-400"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Blog Cards */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {currentBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="overflow-hidden transition-all duration-300 transform bg-white shadow-lg cursor-pointer rounded-2xl hover:shadow-2xl hover:-translate-y-2 group"
                  onMouseEnter={() => setHoveredCard(blog.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        hoveredCard === blog.id
                          ? "scale-110 brightness-75"
                          : "scale-100 brightness-100"
                      }`}
                    />

                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                        hoveredCard === blog.id ? "opacity-100" : "opacity-0"
                      }`}
                    ></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-semibold tracking-wide text-gray-800 uppercase bg-yellow-400 rounded-full">
                        {blog.category}
                      </span>
                    </div>

                    {/* Hover Content */}
                    <div
                      className={`absolute bottom-4 left-4 right-4 text-white transition-all duration-300 transform ${
                        hoveredCard === blog.id
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                    >
                      <p className="mb-2 text-sm line-clamp-2">{blog.content}</p>
                      <button className="px-4 py-2 text-sm font-semibold text-gray-800 transition-colors bg-yellow-400 rounded-lg hover:bg-yellow-300">
                        Read More
                      </button>
                    </div>

                    {/* Read Time Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 text-xs text-white rounded bg-black/70">
                        {blog.readTime} min read
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <User size={14} className="text-gray-500" />
                      <span className="text-sm text-gray-600">{blog.author}</span>
                      <Calendar size={14} className="ml-2 text-gray-500" />
                      <span className="text-sm text-gray-600">{blog.date}</span>
                    </div>

                    <h2 className="mb-3 text-xl font-bold text-gray-800 transition-colors line-clamp-2 group-hover:text-yellow-600">
                      {blog.title}
                    </h2>

                    <p className="mb-4 text-sm text-gray-600 line-clamp-3">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Eye size={14} />
                          {blog.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle size={14} />
                          {blog.comments}
                        </span>
                      </div>

                      <div
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          hoveredCard === blog.id
                            ? "bg-yellow-400 scale-150"
                            : "bg-gray-300"
                        }`}
                      ></div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:-translate-y-0.5"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
              >
                <ChevronLeft size={16} />
                <span className="hidden sm:inline">Previous</span>
              </button>

              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                const pageNum = i + Math.max(1, currentPage - 2);
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 rounded-lg font-semibold transition-all duration-200 ${
                      currentPage === pageNum
                        ? "bg-yellow-400 text-gray-800 shadow-lg scale-110"
                        : "bg-white text-gray-600 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:-translate-y-0.5"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tabs */}
            <div className="p-2 bg-white shadow-lg rounded-2xl">
              <div className="grid grid-cols-3 gap-1">
                <button
                  onClick={() => setSidebarTab("recent")}
                  className={`py-3 px-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    sidebarTab === "recent"
                      ? "bg-yellow-400 text-gray-800 shadow-md"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Recent
                </button>
                <button
                  onClick={() => setSidebarTab("popular")}
                  className={`py-3 px-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    sidebarTab === "popular"
                      ? "bg-yellow-400 text-gray-800 shadow-md"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Popular
                </button>
                <button
                  onClick={() => setSidebarTab("comments")}
                  className={`py-3 px-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    sidebarTab === "comments"
                      ? "bg-yellow-400 text-gray-800 shadow-md"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Comments
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-6 bg-white shadow-lg rounded-2xl">
              <h3 className="mb-4 font-bold text-gray-800 capitalize">
                {sidebarTab} Posts
              </h3>

              <div className="space-y-4">
                {sidebarTab === "recent" &&
                  recentBlogs.map((b) => (
                    <div key={b.id} className="cursor-pointer group">
                      <div className="flex gap-3 p-3 transition-colors rounded-lg hover:bg-gray-50">
                        <img
                          src={image3}
                          alt={b.title}
                          className="object-cover w-12 h-12 rounded-lg"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-800 transition-colors group-hover:text-yellow-600 line-clamp-2">
                            {b.title}
                          </p>
                          <p className="mt-1 text-xs text-gray-500">{b.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                {sidebarTab === "popular" &&
                  popularBlogs.map((b) => (
                    <div key={b.id} className="cursor-pointer group">
                      <div className="flex gap-3 p-3 transition-colors rounded-lg hover:bg-gray-50">
                        <img
                          src={image4}
                          alt={b.title}
                          className="object-cover w-12 h-12 rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex items-start gap-2">
                            <Flame
                              size={14}
                              className="text-orange-500 mt-0.5 flex-shrink-0"
                            />
                            <div>
                              <p className="text-sm font-medium text-gray-800 transition-colors group-hover:text-yellow-600 line-clamp-2">
                                {b.title}
                              </p>
                              <p className="mt-1 text-xs text-gray-500">
                                {b.views} views
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                {sidebarTab === "comments" &&
                  commentsData.map((c, i) => (
                    <div
                      key={i}
                      className="p-3 transition-colors rounded-lg cursor-pointer hover:bg-gray-50"
                    >
                      <p className="mb-2 text-sm italic text-gray-700">
                        "{c.text}"
                      </p>
                      <p className="text-xs text-gray-500">- {c.author}</p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="p-6 text-gray-800 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl">
              <h3 className="mb-2 font-bold">Stay Updated!</h3>
              <p className="mb-4 text-sm">
                Get the latest posts delivered to your inbox.
              </p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 text-sm border-0 rounded-lg focus:ring-2 focus:ring-white"
                />
                <button className="w-full py-2 text-sm font-medium text-white transition-colors bg-gray-800 rounded-lg hover:bg-gray-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
