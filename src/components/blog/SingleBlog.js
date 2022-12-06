import React from 'react';
import { Link } from 'react-router-dom';
import {IoCalendarNumberOutline} from 'react-icons/io5';
import {HiArrowUpRight} from 'react-icons/hi2';
import '../../assets/css/blog.css';

const SingleBlog = ({blog}) => {
  const {id, image, title, date, tags, description} = blog;
  return (
    <div key={id} className={id === "2" || id === "3" ? "single-blog small-blog" : "single-blog big-blog"}>
      <div className="image">
        <img src={image} className="img-fluid" alt=""/>
      </div>
      <div className="content">
        <div className="d-flex align-items-center justify-content-between">
          <span><IoCalendarNumberOutline className='date-icon'/> {date}</span>
          <Link to={`/blog/blog-details/${id}`} className="details-btn"><HiArrowUpRight className='details-icon'/></Link>
        </div>
        <div className="blog-title">
          <h3>{title.length > 29 ? title.substring(0,29) + "..." : title}</h3>
          <p>{id === "2" || id === "3" ? description[0].substring(0,65) : description[0]}</p>
        </div>
        <ul className="tags d-flex align-items-center">
          {
            tags.map(({id, name, link}) => <li key={id}><a href={link} className={name}>{name.split("-").join(" ")}</a></li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default SingleBlog