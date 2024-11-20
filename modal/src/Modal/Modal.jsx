
import './Modal.css';

const Modal = (props) => {
    const {modalData, showModal, toggleModal} = props; 
    const {title, message} = modalData;

    const handleClose = () => {
        toggleModal();
    }

  return (
        !showModal ? '' :
        <div className='modal-backdrop' onClick={toggleModal}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <header className='modal-header'>
                    <h3>{title}</h3>
                    <button onClick={handleClose}>X</button>
                </header>
                <div className='modal-body'>
                    <p>{message}</p>
                </div>
            </div>
        </div>
)
}

export default Modal