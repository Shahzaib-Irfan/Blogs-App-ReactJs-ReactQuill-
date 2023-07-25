import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = localStorage.getItem("blogs");
    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs));
    }
  }, []);

  const handleSaveBlog = (blog) => {
    blog = { title: "blog # " + blogs.length, content: blog };
    alert("Blog Added As Blog # " + blogs.length);
    const updatedBlogs = [...blogs, blog];
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogForm onSave={handleSaveBlog} />} />
        <Route path="/blogs" element={<BlogList blogs={blogs} />} />
        <Route path="/blog/:id" element={<Blog blogs={blogs} />} />
      </Routes>
    </Router>
  );
};

export default App;
