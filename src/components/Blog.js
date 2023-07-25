import React from "react";
import { useParams } from "react-router-dom";

const Blog = ({ blog }) => {
  console.clear();
  const { id } = useParams();
  const blogs = JSON.parse(localStorage.getItem("blogs"));
  console.log(blogs[id]);
  return blogs ? (
    <>
      <center>
        <div>
          <h2 style={{ textTransform: "capitalize" }}>{blogs[id].title}</h2>
          <div
            style={{ marginTop: "10px" }}
            dangerouslySetInnerHTML={{ __html: blogs[id].content.content }}
          />
        </div>
      </center>
    </>
  ) : (
    <>
      <div>
        <center>
          <h2>Nothing to Show</h2>
        </center>
      </div>
    </>
  );
};

export default Blog;
