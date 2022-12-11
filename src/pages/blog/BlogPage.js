import React, { useEffect } from 'react';
import Blog from '../../components/blog/Blog';
import Breadcrumb from '../../components/shared/Breadcrumb';

const BlogPage = () => {
  useEffect(() => {
    document.title = 'Real Estate | Blog';
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <Breadcrumb
        data={[]}
        activePage="Blog"
      />
      <Blog data={"blog-page"}/>
    </>
  )
}

export default BlogPage