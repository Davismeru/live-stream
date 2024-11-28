import React, {useEffect, useState} from "react";
import "../css/addBlog.css";
import axios from "axios"
import { base_api_uri } from "../assets/constants";

function AddBlog() {
  const [error,setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [title, setTitle]= useState("")
  const [img,setImg]= useState("")
  const [categories, setCategories]= useState("")
  const [content, setContent]= useState("")


  const handleAddBlog = async (e) => {
    e.preventDefault()
    setLoading(true)
    axios.post(`${base_api_uri}/create_blog`, {
      headline: title,
      img: img,
      content: content,
      category: categories
    })

    setLoading(false)
  }

  const token = sessionStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      setError("you are not signed in");
    } else {
      axios
        .post(`${base_api_uri}/admin/verify_token`, {
          token,
        })
        .then((response) => {
          if (!response.data.error) {
            setError("")
          } else {
            setError(response.data.error);
          }
        });
    }
  }, []);
  return (
    <div className="add-blogs">
      {!error && <form>
        <input type="text" placeholder="blog title" onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" placeholder="image source" onChange={(e) => setImg(e.target.value)}/>
        <input type="text" placeholder="categories" onChange={(e) => setCategories(e.target.value)}/>
        <textarea type="text" placeholder="blog content" className="blog-content" onChange={(e) => setContent(e.target.value)}/>
        <button onClick={(e) => handleAddBlog(e)}>{!loading ? "Add blog" : "jus a sec..."}</button>
      </form>}

      {error && <p className="text-center text-red-500">{error}</p>}
    </div>
  );
}

export default AddBlog;
