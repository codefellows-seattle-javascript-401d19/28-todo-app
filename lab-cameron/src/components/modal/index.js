import React from 'react';
import './modal.scss';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <main className='modal-main'>
        {children}
        <button
          className='closebutton'
          onClick={handleClose}
        >
          Close
        </button>
      </main>
    </div>
  );
};

export default Modal;
