import React from 'react';
import './index.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    isOpen && (
      <div className="modalOverlay" onClick={onClose}>
        <div className="modalContent" onClick={(e) => e.stopPropagation()}>
          <span className="closeBtn" onClick={onClose}>&times;</span>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
