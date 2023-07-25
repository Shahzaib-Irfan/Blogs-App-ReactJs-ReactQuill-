import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  return (
    <div>
      <center>
        <h2>Blogs</h2>
      </center>
      {blogs.map((blog, index) => {
        return (
          <div key={index}>
            <Link style={{ textTransform: "none" }} to={`/blog/${index}`}>
              <h3>{blog.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
