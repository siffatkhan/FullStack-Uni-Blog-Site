import React from 'react'
import "./FeaturedBlog.css"
import { Link } from "react-router-dom"
import blogs from '../../data/blogs'

const FeaturedBlog = () => {
  const firstBlog=blogs[0];
  return (
    <div className="featuredBlogContainer">
      <p className="featuredLabel">FEATURED POST</p>
       
      <div className="blogCard">
        <img src="./featured.jpg" alt="About Blog Pic" className="blogPic" />
        
        <div className="blogContent">
          <div className="blogMeta">
            <p className="blogAuthor">{firstBlog.author}</p>
            <p className="blogDate">{firstBlog.date} <span className="dot">•</span> {firstBlog.readTime}</p>
          </div>

          <div className="content">
            {/* check the bellow link endpoint and slug whether it doing that same purpose of going to that exact endpoint */}
          <Link to={`/journals/${firstBlog.slug}`} className="blogLink">
            <h1 className="blogTitle">{firstBlog.title}</h1>
            <p className="blogExcerpt">
              {firstBlog.excerpt}
            </p>
          </Link>
          </div>
        </div>
      </div>
    </div>
 
  )
}

export default FeaturedBlog



