import Modal from 'react-bootstrap/Modal';
import video from '../../assets/images/video.mp4';
import '../../assets/css/property-modal.css';

const PropertyModal = ({show, handleClose}) => {
  return (
    <Modal centered show={show} onHide={handleClose} className="property-modal">
      <Modal.Header closeButton></Modal.Header>
      <video controls>
        <source src={video} type="video/mp4"/>
      </video>
    </Modal>
  )
}

export default PropertyModal