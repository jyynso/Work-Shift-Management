import { hasUncaughtExceptionCaptureCallback } from 'process';
import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Render nothing if the modal is closed

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 className='texth2' 
            style={{
                marginRight:'420px',
                fontWeight:'bold'
            }}>{title}</h2>
        <div className='texth2'>{children}</div>
        <button  className='texth2'
        style={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '600px',
    height:'400px'
  },
  closeButton: {
    marginTop: '200px',
    padding: '10px 20px',
    border: 'none',
    backgroundColor: '#D9C40B',
    color: '#fff',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default Modal;
