// BlogHome.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  // Sample blog posts for pagination
  {
    id: 1,
    title: "Understanding React Components",
    image: "https://via.placeholder.com/150",
    content:
      "React components are the building blocks of any React application...",
    category: "React",
  },
  {
    id: 2,
    title: "Getting Started with Tailwind CSS",
    image: "https://via.placeholder.com/150",
    content:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs...",
    category: "CSS",
  },
  {
    id: 3,
    title: "Mastering JavaScript Basics",
    image: "https://via.placeholder.com/150",
    content:
      "JavaScript is a versatile programming language used to add interactivity to websites...",
    category: "JavaScript",
  },
  {
    id: 4,
    title: "Advanced CSS Techniques",
    image: "https://via.placeholder.com/150",
    content: "CSS allows for creating visually appealing websites...",
    category: "CSS",
  },
  {
    id: 5,
    title: "React State Management",
    image: "https://via.placeholder.com/150",
    content:
      "State management is a crucial part of complex React applications...",
    category: "React",
  },
  // Add more blog posts for demonstration
];

const categories = ["All", "React", "CSS", "JavaScript"];
const postsPerPage = 3;

const BlogsHome = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts based on the selected category
  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  // Calculate the paginated posts to show on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Categories Section */}
      <div className="mb-8">
        <div className="flex gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`py-2 px-4 rounded-lg ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1); // Reset to page 1 when category changes
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="space-y-8 mb-8">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="flex items-start bg-white rounded-lg shadow-md p-4"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-24 h-24 object-cover rounded-md mr-4"
            />
            <div>
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-gray-600 mt-2">
                {post.content.substring(0, 80)}...
              </p>
              <Link
                to="/blog/title"
                className="mt-4 text-blue-600 hover:underline"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center items-center space-x-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={`px-3 py-1 rounded-lg ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogsHome;
