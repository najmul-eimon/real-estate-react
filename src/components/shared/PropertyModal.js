import Modal from 'react-bootstrap/Modal';
import '../../assets/css/property-modal.css';

const PropertyModal = ({show, handleClose}) => {
  return (
    <Modal centered show={show} onHide={handleClose} className="property-modal">
      <Modal.Header closeButton></Modal.Header>
      <iframe src="https://www.youtube.com/embed/KbTjl1PNCzg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </Modal>
  )
}

export default PropertyModal