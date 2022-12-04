import { BsChevronRight } from 'react-icons/bs'
import { GrHomeRounded } from 'react-icons/gr'
import { Link } from 'react-router-dom'

const Breadcrumb = ({activePage, data}) => {
  return (
    <section className="quick-menu">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/"><GrHomeRounded className='icon icon-home'/> Home</Link></li>
                {
                  data.map(({label, link}, index)=> <li key={index} className="breadcrumb-item"><Link to={link}><BsChevronRight className='icon'/>{label}</Link></li>)
                }
                <li className="breadcrumb-item active" aria-current="page"><BsChevronRight className='icon'/>{activePage}</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Breadcrumb