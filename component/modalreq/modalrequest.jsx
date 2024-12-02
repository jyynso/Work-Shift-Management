import React from 'react';

const Modalrequest = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; 

  return (
    <div className='texht2' style={styles.overlay}>
      <div className='texth2' style={styles.modal}>
        <div className='texth2' style={styles.header}>
          <h2 className='texth2' style={styles.title}>{title}</h2>
          <button style={styles.closeButton} onClick={onClose}>
            <span style={styles.closeIcon}>&times;</span>
          </button>
        </div>
        <div style={styles.content}>{children}</div>
        <div style={styles.footer}>
          <button style={styles.requestButton}>Request leave</button>
        </div>
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
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '500px',
    height:'400px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
  },
  title: {
    fontSize: '20px',
    color:'#D72B2B',
    fontWeight: 'bold',
    marginLeft:'10px'
  },
  closeButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  closeIcon: {
    fontSize: '24px',
    color: '#666',
  },
  content: {
    padding: '24px',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '16px',

  },
  requestButton: {
    fontWeight:'bold',
    fontSize:'17px',
    backgroundColor: '#D72B2B',
    color: 'white',
    border: 'none',
    padding: '15px 24px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft:'240px',
    marginTop:'151px'
  },
};

export default Modalrequest;