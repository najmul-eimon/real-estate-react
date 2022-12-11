import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../../components/blogDetails/Details';
import Breadcrumb from '../../components/shared/Breadcrumb';
import { blogs } from '../../data/blog';

const BlogDetails = () => {
  const {blogId} = useParams();
  const [singleBlog, setSingleBlog] = useState({});

  useEffect(() => {
    if(blogId){
      setSingleBlog(blogs.find(({id}) => id === blogId))
    }
  },[blogId]);

  useEffect(() => {
    document.title = "Real Estate | Blog Details";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <Breadcrumb
        data={[
          {
            label: "Blog",
            link: "/blog",
          },
        ]}
        activePage="Blog Details"
      />
      <Details data={singleBlog}/>
    </>
  )
}

export default BlogDetails