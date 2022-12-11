import React from 'react'
import InnerSidebar from '../shared/InnerSidebar';
import {IoCalendarNumberOutline} from 'react-icons/io5';
import '../../assets/css/blog.css';

const Details = ({data}) => {
  const {date, tags, title, description, gallery, subtitle} = data;
  return (
    <section className="blog-details">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title text-center">
              <h2>Latest blog news</h2>
            </div>
          </div>

          <div className="col-md-12">
            <div className="row">
              {/* ---------------------------------- description --------------------------------- */}
              <div className="col-lg-7 col-xl-8">
                <div className="content">
                  <div className="date">
                    <span className="d-flex align-items-center"><IoCalendarNumberOutline className='date-icon'/>{date}</span>
                    <ul className="d-flex align-items-center tags">
                      {
                        tags?.map(({id, name, link}) => <li key={id}><a href={link} className={name}>{name.split("-").join(" ")}</a></li>)
                      }
                    </ul>
                  </div>

                  <h3>{title} </h3>
                  
                  <div className="paragraph">
                    {
                      description?.slice(1,3).map((para, index) => <p key={index}>{para}</p>)
                    }
                  </div>

                  <div className="image">
                    <img src={gallery?.slice(0,1)} alt=""/>
                  </div>

                  <h3>{subtitle}</h3>
                  <div className="paragraph">
                    <p>{description?.slice(3,4)}</p>
                  </div>
                  
                  <div className="img">
                    {
                      gallery?.slice(1).map((img, index) => 
                      <div key={index} className="image">
                        <img src={img} alt=""/>
                      </div>
                      )
                    }
                  </div>

                  <div className="paragraph">
                    {
                      description?.slice(4).map((para, index) => <p key={index}>{para}</p>)
                    }
                  </div>
                </div>
              </div>
              {/* ---------------------------------- sidebar --------------------------------- */}
              <div className="col-lg-5 col-xl-4">
                <InnerSidebar data={"blog-details"}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details