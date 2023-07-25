import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  return (
    <div>
      <center>
        <h2>Blogs</h2>
      </center>
      blogs ?{" "}
      <>
        {blogs.map((blog, index) => {
          return (
            <div key={index}>
              <Link style={{ textTransform: "none" }} to={`/blog/${index}`}>
                <h3>{blog.title}</h3>
              </Link>
            </div>
          );
        })}
      </>{" "}
      : <center>No Blogs Found</center>
    </div>
  );
};

export default BlogList;
