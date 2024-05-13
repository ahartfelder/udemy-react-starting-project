import { useNavigate } from 'react-router-dom';
import styles from './Modal.module.css';


function Modal({ children }) {
  const Navigate = useNavigate();
  
  function closeModal() {
    Navigate('..');
  }

  return (
    <>
      <div className={styles.backdrop} onClick={closeModal} />
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
