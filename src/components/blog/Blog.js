import React from 'react';
import { Link } from 'react-router-dom';
import AllBlog from './AllBlog';
import RecentBlog from './RecentBlog';
import '../../assets/css/blog.css';

const Blog = ({data}) => {
  return (
    <section className={data === "blog-section" ? "blog" : "blog blog-page"}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title text-center">
              <h2>Latest blog news</h2>
            </div>
          </div>

          {/*  recent blogs */}
          <div className="recent-blogs">
            <div className="col-md-12">
              {
                data === "blog-page" && (
                <div className="blog-section-title">
                  <h3>Recent Blog Post</h3>
                </div>
              )}
              <RecentBlog/>
            </div>
          </div>

          {/*  all blogs */}
          {
            data === "blog-page" && (
            <div className="all-blogs">
              <div className="col-md-12">
                <div className="blog-section-title">
                  <h3>All Blog Post</h3>
                </div>
                <AllBlog/>
              </div>
            </div>
          )}
        </div>
        
        {/*  view all button */}
        {
          data === "blog-section" && (
          <div className="col-md-12">
            <div className="text-center view-all">
              <Link to="/blog" className="view-all-btn btn-style">View all</Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Blog