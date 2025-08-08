import React,{useState} from "react";
import { useParams } from "react-router-dom";
import blogs from "../../data/blogs";
import "./JournalDetail.css"

const JournalDetail = () => {

  const [likeCount,setLikeCount]=useState(0);
  const { slug } = useParams();

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <p>Blog not found</p>; // avoid errors on invalid slugs

  return (
    <div className="JournelDetailCardContainer">
      <img src={blog.coverImage} alt="Cover" />
      <h1>{blog.title}</h1>
      <div>{blog.content}</div>
      <p>By {blog.author} on {blog.date} — {blog.readTime}</p>
      <button onClick={()=>setLikeCount(likeCount+1)}>Like</button>
      <p>{likeCount}</p>
      {/* <p>Tags: {blog.tags.join(', ')}</p>s */}
    </div>
  );
};

export default JournalDetail;
