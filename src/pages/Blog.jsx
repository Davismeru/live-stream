import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { base_api_uri } from "../assets/constants";

const BlogPage = () => {
  const params = useParams();
  const id = params.id;
  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    axios.post(`${base_api_uri}/selected_blog`, { id: id }).then((res) => {
      setBlogData(res.data);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }, []);
  return (
    <div className="max-w-3xl mx-auto p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">{blogData?.headline}</h1>
      {console.log(blogData)}
      <img
        src={blogData?.img}
        alt="Blog post"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <p className="text-lg text-gray-700 leading-relaxed">
        {blogData?.content}
      </p>
    </div>
  );
};

export default BlogPage;
