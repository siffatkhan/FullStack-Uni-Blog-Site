import React from 'react'
import "./FeaturedBlog.css"
import { Link } from "react-router-dom"

const FeaturedBlog = () => {
  return (
    <div className="featuredBlogContainer">
      <p className="featuredLabel">FEATURED POST</p>
       
      <div className="blogCard">
        <img src="./sifatPic.png" alt="About Blog Pic" className="blogPic" />
        
        <div className="blogContent">
          <div className="blogMeta">
            <p className="blogAuthor">Admin</p>
            <p className="blogDate">July 20, 2025 - 1 min read</p>
          </div>

          <Link to="/" className="blogLink">
            <h1 className="blogTitle">Why I made this</h1>
            <p className="blogExcerpt">
              The sole purpose of this website, uploading blogs, past papers, and everything was...
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlog
