import { Link } from 'react-router-dom';
import image from '../../assets/images/not-found.png';
import '../../assets/css/not-found.css';

const NotFound = () => {

  return (
    <main>
      <section className="not-found">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img src={image} alt="" />
              <div className="d-flex align-items-center justify-content-center">
                <Link to="/" className='btn-style'>Back to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default NotFound