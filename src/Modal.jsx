import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from "./Context"

const Modal = () => {
  const { isModal, closeModal } = useGlobalContext()
  return (
    <div className='modal-overlay'>
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn' onclick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}
export default Modal
