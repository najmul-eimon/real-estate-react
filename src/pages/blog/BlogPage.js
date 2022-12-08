import React, { useEffect } from 'react';
import Blog from '../../components/blog/Blog';
import Breadcrumb from '../../components/shared/Breadcrumb';

const BlogPage = () => {
  useEffect(() => {
    document.title = 'Real Estate | Blog';
    window.scrollTo(0,0);
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