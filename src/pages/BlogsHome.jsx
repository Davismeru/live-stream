import React, { useEffect, useState } from "react";
import axios from "axios";
import { base_api_uri } from "../assets/constants";
import "../css/BlogsHome.css";
import { Link } from "react-router-dom";

const BlogsHome = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleNextPage = () => {
    if (page < blogs.totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    setLoading(true);
    axios.get(`${base_api_uri}/display_blogs?page=${page}`).then((res) => {
      setBlogs(res.data);
      setLoading(false);
    });
  }, [page]);

  return (
    <div>
      {/* Hero Section */}
      <section className="blogs-hero">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">BallHub News Center</h2>
          <p className="mb-6">Dive Into the Latest Football Stories</p>
        </div>
      </section>

      {/* Blogs Section */}
      {!loading && (
        <section className="py-10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogs?.blogs?.map((blog, i) => (
                <div
                  key={i}
                  className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  {/* img section */}
                  <section className="blog-img">
                    <img src={blog.img} alt="" />
                  </section>
                  <section>
                    <h3 className="text-xl font-bold mb-2">{blog.headline}</h3>
                    <p className="text-gray-600">
                      {blog.content.slice(0, 86)}....
                    </p>
                    <Link
                      to={`/blog/${blog._id}`}
                      className="text-blue-600 hover:underline mt-4 block"
                    >
                      Read More
                    </Link>
                  </section>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {loading && (
        <img
          src="/loader.gif"
          alt="loading..."
          className="mx-auto w-12 my-24"
        />
      )}

      {/* pagination buttons */}
      <div className="pagination-section">
        {console.log(blogs.blogs)}
        <button onClick={() => handlePrevPage()}>Prev</button>
        <button onClick={() => handleNextPage()}>Next</button>
      </div>
    </div>
  );
};

export default BlogsHome;
