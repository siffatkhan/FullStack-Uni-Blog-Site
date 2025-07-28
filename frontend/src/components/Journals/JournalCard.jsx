import React from 'react';
import blogs from '../../data/blogs';
import { Link } from 'react-router-dom';
import './JournalCard.css'; // optional for styling

const JournalCard = () => {
  return (
    <div className="journalCardGrid"> {/* Flex or grid container */}
      {blogs.map((blog, index) =>{
        if(blog.id!==1){
            return (
          <div className="journalCard" key={index}>
          <img
            src={blog.coverImage || './defaultCover.png'}
            alt="Cover"
            className="cardCover"
          />

          <div className="cardContent">
            

            <p className="cardMeta">
              {/* {blog.author} • {blog.semester} Sem, {blog.department}, {blog.batch}<br /> */}
              {blog.author}s<br />
              {blog.date} • {blog.readTime}
            </p>

            <h2 className="cardTitle">{blog.title}</h2>

            <p className="cardExcerpt">
              {blog.excerpt.length > 120
                ? blog.excerpt.slice(0, 120) + '...'
                : blog.excerpt}
            </p>

            <Link to={`/journals/${blog.slug}`} className="readMore">
             <button>Read More</button>
            </Link>
            <p>{blog.likes}</p>
          </div>
        </div>
            )
        }
            else {
                return null;
            }
            })}
    </div>
  );
};

export default JournalCard;
