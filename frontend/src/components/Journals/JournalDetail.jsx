import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../../data/blogs";

const JournalDetail = () => {

  const { slug } = useParams();

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <p>Blog not found</p>; // avoid errors on invalid slugs

  return (
    <div>
      {/* <h1>{slug}</h1> */}
      <h1>{blog.title}</h1>
      
      <img src={blog.coverImage} alt="Cover" />
      <p>{blog.excerpt}</p>
      <div>{blog.content}</div>
      <p>By {blog.author} on {blog.date} — {blog.readTime}</p>
      <button>Like</button>
      {/* <p>Tags: {blog.tags.join(', ')}</p>s */}
    </div>
  );
};

export default JournalDetail;
