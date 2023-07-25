import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const BlogForm = ({ onSave }) => {
  const [content, setContent] = useState("");

  const handleSave = () => {
    onSave({ content });
    setContent("");
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code-block"],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      ["link", "image"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "blockquote",
    "code-block",
    "align",
    "color",
    "background",
    "link",
    "image",
  ];

  return (
    <div>
      <center>
        <ReactQuill
          style={{ width: "80%", height: "auto" }}
          modules={modules}
          formats={formats}
          theme="snow"
          onChange={setContent}
        />
        <button
          style={{
            marginTop: "20px",
            borderRadius: "5px",
            backgroundColor: "silver",
          }}
          onClick={handleSave}
        >
          Save Blog
        </button>
      </center>
    </div>
  );
};

export default BlogForm;
